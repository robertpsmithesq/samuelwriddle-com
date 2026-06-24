const initReadingProgress = () => {
  const progressBar = document.querySelector(".reading-progress");

  if (!progressBar) {
    return;
  }

  const updateReadingProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pct =
      docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;

    progressBar.style.width = `${pct}%`;
  };

  updateReadingProgress();
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
};

const initCodeBlocks = () => {
  document.querySelectorAll(".markdown pre").forEach((pre) => {
    const wrapper = document.createElement("div");
    const header = document.createElement("div");
    const label = document.createElement("span");
    const button = document.createElement("button");
    const code = pre.querySelector("code");
    const languageClass = Array.from(code?.classList ?? []).find((className) =>
      className.startsWith("language-"),
    );

    wrapper.className = "code-frame";
    header.className = "code-frame-header";
    label.className = "code-frame-label";
    button.className = "code-copy-button";
    button.type = "button";
    button.textContent = "Copy";
    label.textContent = languageClass?.replace("language-", "") ?? "code";

    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(pre.innerText);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1800);
    });

    pre.before(wrapper);
    wrapper.append(header, pre);
    header.append(label, button);
  });
};

const initSectionNav = () => {
  document.querySelectorAll("[data-section-nav]").forEach((nav) => {
    const sectionLinks = Array.from(
      nav.querySelectorAll("[data-section-nav-link]"),
    );
    const sectionHeadings = sectionLinks
      .map((link) => {
        const id = link.hash.slice(1);
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean);

    if (sectionHeadings.length === 0) {
      return;
    }

    const setActiveSection = (id) => {
      sectionLinks.forEach((link) => {
        const active = link.hash === `#${id}`;
        link.toggleAttribute("aria-current", active);
        link.classList.toggle("is-active", active);
      });
    };

    const activeHeadingOffset = 112;

    const updateActiveSection = () => {
      const activeHeading =
        sectionHeadings.findLast(
          (heading) =>
            heading.getBoundingClientRect().top <= activeHeadingOffset,
        ) ?? sectionHeadings[0];

      setActiveSection(activeHeading.id);
    };

    const scheduleActiveSectionUpdate = () => {
      window.requestAnimationFrame(updateActiveSection);
    };

    sectionLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const id = link.hash.slice(1);

        if (id) {
          setActiveSection(id);
        }
      });
    });

    updateActiveSection();
    window.addEventListener("scroll", scheduleActiveSectionUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleActiveSectionUpdate);
  });
};

initReadingProgress();
initCodeBlocks();
initSectionNav();
