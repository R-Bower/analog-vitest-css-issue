# React + TypeScript + Remix

[Documentation](https://docs.qui.qualcomm.com/)

This template provides a React application featuring the following tools and libraries:

- [pnpm](https://pnpm.io/) workspaces.
- TypeScript
- [turborepo](https://turbo.build/repo)
  - high-performance build system for TypeScript codebases.
- [eslint](https://eslint.org/) + [prettier](https://prettier.io/) + [stylelint](https://stylelint.io/) for consistent code formatting.
- [React](https://react.dev/) v18.2
- [Remix](https://remix.run/)
- [QUI React](https://react.qui.aws.qualcomm.com/) component library.
- [Tailwind CSS](https://tailwindcss.com/)
  - Utility CSS for rapid and consistent composition.
- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
  - Widely considered as React's missing data-fetching library.
- [Jotai](https://jotai.org/)
  - Atomic state management, huge ecosystem and integrates well with some of our other libraries like Tanstack Query and Zustand.

# Getting Started

## Install Dependencies

- Install Node.js
- Once Node is installed, [install pnpm](https://pnpm.io/installation).

## Install NPM Dependencies

In the repository root folder:

- run `pnpm i` to install dependencies.

If the packages install without issue, skip to the [Configure Local Hostnames](#configure-local-hostnames) step.

If you run into certificate issues during installation, follow these steps to resolve them:

### Windows

A Bash terminal is recommended for installation and running commands. If you don't have access to a Bash terminal, you have two options:

1. Install [GitBash](https://gitforwindows.org/) and use the Bash terminal exclusively.

Use this command to install:

```
NODE_EXTRA_CA_CERTS=certs/artifactory.pem HTTP_PROXY=https://qualcomm.com pnpm install
```

OR

2. Follow these steps to install the local certificate:

- Create a folder on your local hard drive. I prefer `C:\certs`.
- Copy the file at `certs/artifactory.pem` to `C:\certs`. The final path should be `C:\certs\artifactory.pem`.
- Create a Windows environment variable:
  - key: `NODE_EXTRA_CA_CERTS`
  - value: `C:\certs\artifactory.pem`

After these environment variables are set, `pnpm install` should work properly.

### Mac/Linux

If you're using a proper bash, sh, or zsh terminal, you can run this:

```
NODE_EXTRA_CA_CERTS=certs/artifactory.pem pnpm install
```

## Run Local Development Scripts

Start the site:

```shell
pnpm dev
```

Listen for TS errors in watch mode (in a separate terminal):

```shell
pnpm typecheck
```

Visit the site:

http://localhost:5173
