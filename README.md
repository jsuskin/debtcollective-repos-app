# **DEBT COLLECTIVE GIT REPOS README**

An app which uitilizes GitHub's official API to list The Debt Collective's GitHub repositories and information associated with those repositories.

Created with `gatsby new debtcollective-repos-app https://github.com/gatsbyjs/gatsby-starter-hello-world`

```sh
yarn add gatsby-plugin-sass node-sass
```

## How to Use

* Click the `repos` link in the menu (top of the page on large and medium screens; click the hamburger button on the top right of the screen to access on mobile) to view The Debt Collective's GitHub repositories.
* On the `repos` page, The Debt Collective's GitHub repositories will be displayed as cards containing the name of the repository and, on large and medium screens, the URL associated with that repository.
  * Clicking on the card will open a modal which displays information associated with that repository, including the name, date created, contributors, stargazers/count, and comments associated with that repository.
  * Clicking the URL will open the repository in a new tab.
  * On large screens, 12 repositories are listed per page.
  * On medium screens, four repositories are listed per page.
  * On small screens, seven repositories are listed per page.
  * Pages can be navigated via the arrow buttons at the bottom of the screen or by clicking on the page number between those arrows, which will enable the user to select an individual page.