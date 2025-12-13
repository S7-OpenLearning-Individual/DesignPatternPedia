# DesignPatternPedia

- [DesignPatternPedia](#designpatternpedia)
  - [Coding Standards](#coding-standards)
  - [Installation](#installation)
    - [Local Development](#local-development)
    - [Linting](#linting)
    - [Build and serve](#build-and-serve)
  - [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
    - [Docker Image](#docker-image)
  - [Contributing](#contributing)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Coding Standards

1. All images are put into an `/img` directory and not embedded directly.
2. All images have `alt` texts explaining their purpose and contents.
3. All basic page elements that can be re-used should be turned into components.
4. Code is written in American English.
5. Page content is written in Queens English.
6. Page content is cited, sourced, and referenced where deemed necessary.
7. All docs/pages are `.mdx` files.
8. Code compiles and tests pass.
9. Directories follow the correct pattern structure.
10. Each page is built using the [template](/template.mdx) (validated by `npm run lint:mdx`).
11. Custom components should not implement their own title, they should use the correct heading (#) level in the page itself to ensure proper url based linking.
12. Images need to have padding applied around them, optimally `2rem`.
13. Code has no 'TODO' blocks, only a 'FUTURE_WORK' block may be present with a reference to an issue or task.

## Installation

To install the required packages and otherwise dependencies, run the following command;

```bash
npm i
```

### Local Development

```bash
 npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Linting

To validate that all pattern documentation files follow the required structure:

```bash
npm run lint:mdx
```

This checks that all MDX files in `docs/behavioral/`, `docs/creational/`, and `docs/structural/` contain the required headers as defined in `template.mdx`. See [scripts/README.md](scripts/README.md) for more details.

### Build and serve

Certain pieces of functionality such as switching locales & searching only works in a production environment. To achieve this you'll need to build and 'deploy' the site locally. To do this run the following commands.

```bash
 npm run build
```

And then to serve the newly created build, simply run.

```bash
 npm run serve
```

## Deployment

To deploy the website, there are multiple options available depending on your hosting preferences. But first you should create a `.env` file in the root directory of the project with the following content:

```env
# This value MUST start and end with a slash '/', unless it's the root '/'.
BASE_URL=''
```

This step is only necessary when you want to differ from the default `baseUrl` value of `/`. This is particularly useful when deploying to GitHub Pages under a repository, e.g., `https://username.github.io/repository-name/`, where the `BASE_URL` should be set to `/repository-name/`. See the [Docusaurus docs](https://docusaurus.io/docs/api/docusaurus-config#baseUrl) for more information

### GitHub Pages

T.B.A

### Docker Image

T.B.A

## Contributing

Would you like to propose changes to the pattern-wiki? Then feel free to create a pull request in this repository. Make sure that your PR follows the standards as set in the [coding standards](#coding-standards). These standards ensure that the wiki is of high quality and that both the users and developers can find the right information quickly. The steps to work on an issue or task are as follows:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes, ensuring they follow the coding standards.
4. Run the linter to ensure your changes meet the required structure.
5. Create a pull request describing your changes.
6. Wait for the review and feedback from the maintainers.
7. Profit.
