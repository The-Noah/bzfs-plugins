<div align="center">

[<img src="src/lib/assets/favicon.svg" height="128">](https://the-noah.github.io/bzfs-plugins)

# BZFlag Server Plugins

[![GitHub license](https://img.shields.io/github/license/The-Noah/bzfs-plugins.svg)](https://github.com/The-Noah/bzfs-plugins/blob/master/LICENSE)

List of BZFlag server plugins.

</div>

## Development

The project requires [NodeJS](https://nodejs.org/en), [pnpm](https://pnpm.io/) and [git](https://git-scm.com/) (if using to download or share changes).

0. Clone the repository

```sh
git clone https://github.com/The-Noah/bzfs-plugins.git
```

1. Install dependencies

```sh
pnpm install
```

2. Start development server

```sh
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

To create a production version:

```sh
pnpm build
```

You can preview the production build with `pnpm preview`.
