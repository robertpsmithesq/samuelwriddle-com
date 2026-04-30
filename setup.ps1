# setup.ps1

winget install OpenJS.NodeJS.LTS
corepack enable
corepack prepare pnpm@latest --activate

pnpm install
