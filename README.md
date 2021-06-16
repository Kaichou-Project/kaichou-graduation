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

### Contributors License Agreement

By contributing to the Kaichou Project, you agree to the following terms and conditions for present and future contributions. The Kaichou Project reserves the right to modify these terms and conditions without notice and at the sole discretion of the Kaichou Project. If you contributed to the project prior to the establishment or modification of this agreement, by continuing to contribute to the project you agree to these terms and conditions for past contributions.

1. Definitions
 
    "You" and "Your" means you and any organization on whose behalf you are entering this agreement.
	
	"Submission" means any work, including modifications or additions to existing work or a work not authored by You, that is submitted by You to a product managed by the Kaichou Project (the "Work")

	"Contribution" means any Submission that is an original work authored by You.

2. Grant of Copyright License.
 
    You hereby grant to the Kaichou Project and to recipients of Your Contribution(s) distributed by the Kaichou Project a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute Your Contributions and such derivative works.

3. Grant of Patent License.
 
    You hereby grant to the Kaichou project and to recipients of Your Contribution(s) distributed by the Kaichou Project a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by You that are necessarily infringed by Your Contribution(s) alone or in combination with the Work to which such Contribution(s) was submitted.

4. If your license grant is ineffective, you irrevocably waive your right to assert claims against the Kaichou Project, the Kaichou Project's successors in interest, and any direct or indirect licensees arising from the Kaichou Project's or the Kaichou Project's successors in interest's use, reproduction, preparation of derivative works, public display, public performance, sublicensing, and distribution of Your Contribution(s).

5. You represent that you are legally entitled to grant the above license for Your Contribution(s) and that Your Contribution(s) do not infringe on the intellectual property rights of any party.

6. You represent that the Kaichou Project has been granted a license for Your Submission(s) such that the exercising of any rights granted by the above license would not infringe on any party's intellectual property or other rights, excepting the rights of COVER Corporation to the extent they exercise their rights.

7. You represent that Your Submission(s) is submitted with complete details of any third-party license or other restriction including but not limited to related patents and trademarks of which you are personally aware and which are associated with any part of Your Submission(s), excepting licenses granted and restrictions imposed by COVER Corporation.

8. You agree to notify the Kaichou Project immediately if you become aware of any inaccuracies in the above representations.
