import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import ProjectDetails from "../components/project-details";
import DesignPatternCarousel from "../components/design-pattern-carousel";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`DesignPatternPedia`}
      description="Learn all your design patterns in one place."
    >
      <HomepageHeader />
      <main>
        <DesignPatternCarousel />
        <ProjectDetails />
      </main>
    </Layout>
  );
}
