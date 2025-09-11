import { defineConfig } from "vitepress";
import markdownItFootnote from "markdown-it-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DesignPatternPedia",
  description:
    "A public, open-source project to improve the learnability of common software design patterns.",
  lastUpdated: true,

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote);
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Creational patterns",
        collapsed: false,
        items: [
          { text: "Factory Method", link: "/creational/" },
          { text: "Abstract Factory", link: "/creational/" },
          { text: "Builder", link: "/creational/" },
          { text: "Prototype", link: "/creational/" },
          { text: "Singleton", link: "/creational/" },
        ],
      },
      {
        text: "Structural patterns",
        collapsed: false,
        items: [
          { text: "Adapter", link: "/structural" },
          { text: "Bridge", link: "/structural" },
          { text: "Composite", link: "/structural" },
          { text: "Decorator", link: "/structural" },
          { text: "Facade", link: "/structural" },
          { text: "Flyweight", link: "/structural" },
          { text: "Proxy", link: "/structural" },
        ],
      },
      {
        text: "Behavioral patterns",
        collapsed: false,
        items: [
          { text: "Chain of Responsibility", link: "/behavioral" },
          { text: "Command", link: "/behavioral" },
          { text: "Iterator", link: "/behavioral" },
          { text: "Mediator", link: "/behavioral" },
          { text: "Memento", link: "/behavioral" },
          { text: "Observer", link: "/behavioral" },
          { text: "State", link: "/behavioral" },
          { text: "Strategy", link: "/behavioral" },
          { text: "Template Method", link: "/behavioral" },
          { text: "Visitor", link: "/behavioral" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/S7-OpenLearning-Individual/DesignPatternPedia",
      },
    ],
  },
});
