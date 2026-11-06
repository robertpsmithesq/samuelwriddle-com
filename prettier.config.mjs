export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  // Match Astro 6's default compressHTML: true (plugin 1.x defaults to "jsx").
  astroCompressHTML: "html",
};
