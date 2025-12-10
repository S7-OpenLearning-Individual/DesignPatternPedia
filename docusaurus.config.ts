import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

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
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/S7-OpenLearning-Individual/DesignPatternPedia/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    "@docusaurus/theme-live-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
      },
    ],
    "@docusaurus/theme-mermaid",
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
          position: "left",
          to: "/docs/overview",
          label: "Overview",
        },
        {
          position: "left",
          to: "/docs/navigator",
          label: "Navigator",
        },
        {
          position: "left",
          to: "docs/behavioral",
          label: "Behavioral",
        },
        {
          position: "left",
          to: "docs/creational",
          label: "Creational",
        },
        {
          position: "left",
          to: "docs/structural",
          label: "Structural",
        },
        { to: "/manifest", label: "Manifesto", position: "left" },
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
          title: "Contribute & Feedback",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/S7-OpenLearning-Individual/DesignPatternPedia",
            },
          ],
        },
      ],
      copyright: `Made by Joris Brugman`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
