import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

//todo reconfigure repo so that the designpatternpedia is the source in the git directory
//todo enable test builds for PRs, add as a status check to complete
//todo enable search
const config: Config = {
  title: "Design Pattern Pedia",
  tagline: "Practicing Patterns Made Plain and Practical",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/DesignPatternPedia/",
  organizationName: "S7-OpenLearning-Individual",
  projectName: "DesignPatternPedia",
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Design Pattern Pedia",
      logo: {
        alt: "Design Pattern Pedia Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Patterns",
        },
        {
          href: "https://github.com/S7-OpenLearning-Individual/DesignPatternPedia",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/S7-OpenLearning-Individual/DesignPatternPedia",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
