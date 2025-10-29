import type { ReactNode } from "react";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

function getPrimaryColor() {
  return getComputedStyle(document.documentElement).getPropertyValue(
    "--ifm-color-primary"
  );
}

type ProjectDetail = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const details: ProjectDetail[] = [
  {
    title: "What is DesignPatternPedia?",
    Svg: require("@site/static/icons/book-open.svg").default,
    description: (
      <>
        A comprehensive library to learn and explore software design patterns
        with clear explanations, real-world examples, and interactive content to
        accelerate your development skills.
      </>
    ),
  },
  {
    title: "Transparency",
    Svg: require("@site/static/icons/search.svg").default,
    description: (
      <>
        This wiki is a personal project created by{" "}
        <span style={{ color: getPrimaryColor() }}>a person for a people</span>.
        Transparency is part of the gift of sharing information. The content of
        this cite is not hidden beyond any paywalls, transactions, questionable
        tracking nor analytical cookies. It is purely focused on delivering you
        with the best information possible for free.
      </>
    ),
  },
  {
    title: "AI Assistance",
    Svg: require("@site/static/icons/cyborg-color.svg").default,
    description: (
      <>
        The free content provided to you was collected with the assistance of
        generative AI such as{" "}
        <Link href="https://www.perplexity.ai/">Perplexity</Link> and{" "}
        <Link href="https://github.com/copilot">Copilot</Link>. While AI helped
        gather and draft the information, all content has been reviewed and
        refined by a human to ensure accuracy and clarity. Therefore this
        project has been dubbed as{" "}
        <Link href="https://mmmlabel.tech/#mmmlabel">Cyborg</Link> level of AI
        assistance.
      </>
    ),
  },
  {
    title: "Contribute to the Project",
    Svg: require("@site/static/icons/github.svg").default,
    description: (
      <>
        Learning needs to be free, open and honest. Join our community and
        contribute your knowledge or improvements via{" "}
        <Link to="https://github.com/S7-OpenLearning-Individual/DesignPatternPedia">
          GitHub
        </Link>
        . Help us make DesignPatternPedia the ultimate, free and honest resource
        for all developers learning design patterns!
      </>
    ),
  },
];

function ProjectCard({
  title,
  Svg,
  description,
  reverse,
}: ProjectDetail & { reverse?: boolean }) {
  return (
    <div className={clsx(styles.card, reverse && styles.reverse)}>
      <div className={styles.icon}>
        <Svg className={styles.cardSvg} role="img" />
      </div>
      <div className={styles.text}>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ProjectDetails(): ReactNode {
  return (
    <section
      className={styles.projectDetails}
      aria-label="Project details overview"
    >
      {details.map((item, index) => (
        <ProjectCard key={index} {...item} reverse={index % 2 === 1} />
      ))}
    </section>
  );
}
