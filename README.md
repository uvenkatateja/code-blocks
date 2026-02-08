<div align="center">
  <a href="https://code-blocks.pheralb.dev">
    <img
      src="https://code-blocks.pheralb.dev/images/code-blocks-svg.svg"
      alt="@pheralb/code-blocks"
      height="60"
    />
  </a>
  <p />
  <p>
    <b>
      A code-block UI component. Copy-Paste. Customizable.
    </b>
  </p>

<a href="http://code-blocks.pheralb.dev/docs">Get Started</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="http://code-blocks.pheralb.dev/components">Components</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="http://code-blocks.pheralb.dev/blocks">Blocks</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-contributing">Contributing</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-license">License</a>

</div>

<div align="center">

![Next.js Badge](https://img.shields.io/badge/Docs-000?logo=nextdotjs&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Styles-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![React Badge](https://img.shields.io/badge/Components-61DAFB?logo=react&logoColor=000&style=flat)
![TypeScript Badge](https://img.shields.io/badge/Utilities-3178C6?logo=typescript&logoColor=fff&style=flat)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fpheralb%2Fcode-blocks%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/pheralb/code-blocks/goto?ref=main)
![GitHub stars](https://img.shields.io/github/stars/pheralb/code-blocks)
![GitHub issues](https://img.shields.io/github/issues/pheralb/code-blocks)

</div>

## Features

- **Copy-Paste**: Copy code with a single click, it's 100% yours.
- **Customizable**: Styled with Tailwind CSS, easily customize it to fit your design.
- **Components & Blocks**: Basic structure and blocks for building your own code-block UI.
- **[Shiki](https://github.com/shikijs/shiki) & [Sugar-High](https://github.com/huozhi/sugar-high/)**: Choose your syntax highlighter.

## Contributing

### Development Setup

1. Clone the repository:

```bash
git clone git@github.com:pheralb/code-blocks.git
cd code-blocks
```

2. Install dependencies:

```bash
# Install pnpm globally if you haven't already:
npm i pnpm@latest -g

# Install project dependencies:
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

### Commands

- `pnpm dev`: Start the development server for the docs website.
- `pnpm website:build-registry`: Build the component and block registry.
- `pnpm website:build`: Build the docs website for production.
- `pnpm website:build-cc`: Build content using content-collections CLI.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/pheralb/code-blocks/blob/main/LICENSE) file for details.
