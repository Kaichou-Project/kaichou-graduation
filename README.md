# Kaichou Graduation Project

The Kaichou Project is a graduation tribute website for the VTuber [Kiryu Coco](https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w).

## Setup

To set up and run the project you will need to have [node](https://nodejs.org/en/) (at least version 12) and [yarn](https://yarnpkg.com/) installed.

First run `yarn install` and wait for the dependencies to finish installing.

Next, copy and rename the `.env.example` files in both front- and backend to `.env`. Do not delete the `.env.example`.

Lastly you should be able to start the project by simply running `yarn dev`.

To get linting to work in your IDE of choice (for example VSCode), install the [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugins.

## Project Structure

The project is currently split into a frontend and backend package, both being tied together in the project root using [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

Both frontend and backend are using [typescript](https://www.typescriptlang.org/docs/) for type safety.

### Frontend

The frontend uses nextjs, which makes [routing pretty simple](https://nextjs.org/docs/routing/introduction). There is a `components` folder for anything that isn't supposed to show up on the actual website.

Use the `public` folder for images and assets.

For styling there is [scss with css modules](https://nextjs.org/docs/basic-features/built-in-css-support), so do not ever put any css inline unless absolutely required.

Also for styling there is the `variables.scss` which is to be used for global variables like colors and mixins.
The `globals.scss` is mainly used for standardization and should rarely be touched at all.

### Backend

> The backend structure is still up to debate and will change in the near future.

The backend uses express as a server for hosting a REST API, which is all set up inside the `index.ts`.

## Contributing

You do not need to be a member of the Kaichou-Project organization to contribute. Follow these steps:

1. Fork the repository from [here](https://github.com/Kaichou-Project/kaichou-graduation).

2. Clone your fork locally.

3. Optional, but recommended: Create a new branch on the latest commit of the branch you want to contribute to.

4. Commit to the new branch (or the branch you want to contribute to, if you decided not to make a new branch).

5. Push to your fork.

6. [Create a pull request](https://github.com/Kaichou-Project/kaichou-graduation/pulls) from the branch you committed to *in your fork* to the branch you want to contribute to in the organization repository. We don't have a format for pull request descriptions, but please include any details that would help a reviewer.
