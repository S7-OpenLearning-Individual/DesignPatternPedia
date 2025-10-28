# DesignPatternPedia

- [DesignPatternPedia](#designpatternpedia)
  - [Page Structure](#page-structure)
  - [Coding Standards](#coding-standards)
  - [Installation](#installation)
    - [Local Development](#local-development)
    - [Build and serve](#build-and-serve)
  - [Contributing](#contributing)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Page Structure

Each page follows a basic structure to ensure that a user can easily find metadata on a certain design pattern. These elements include;

1. The name of the design pattern.
   1. Include extra used names or alternative names used just below the title itself.
2. The group the design pattern belongs to.
   1. Creational, Structural or Behavioral
3. Description
   1. A short paragraph explaining, in simple terms, what the pattern is about.
4. An up-to-date table of contents.
5. Problem statement
   1. A small real-life example of why this can be a problem.
6. Potential solution
   1. An analogy or metaphor to explain in human terms how the pattern works.
7. Examples
   1. Real world examples of application of the pattern.
8. Pros and cons
   1. Pros and cons of the pattern.
9. Applicability
   1. Explain when, and HOW the pattern is applicable to a situation.
10. How can the user see a potential implementation plan.
11. Code samples
12. Snippets in various programming languages.
13. Playground
    1. A 'playground' to get a 'feel' for the pattern.

Some extras, common elements may include;

1. A diagram or image explaining the pattern.
2. Relations or uses in other design patterns.

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
10. Each page is built using the [page structure](#page-structure).
11. Custom components should not use a title, they should use the correct heading level in the page itself to ensure proper url based linking.

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

### Build and serve

Certain pieces of functionality such as switching locales & searching only works in a production environment. To achieve this you'll need to build and 'deploy' the site locally. To do this run the following commands.

```bash
 npm run build
```

And then to serve the newly created build, simply run.

```bash
 npm run serve
```

## Contributing

Would you like to propose changes to the pattern-wiki? Then feel free to create a pull request in this repository. Make sure that your PR follows the standards as set in the [coding standards](#coding-standards) and [page structure](#page-structure). These standards ensure that the wiki is of high quality and that both the users and developers can find the right information quickly.
