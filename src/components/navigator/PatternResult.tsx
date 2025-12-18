import React from "react";
import styles from "./navigator.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface PatternResultProps {
  name: string;
  description: string;
  path: string;
  onReset: () => void;
}

const PatternResult: React.FC<PatternResultProps> = ({
  name,
  description,
  path,
  onReset,
}) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const baseUrlOrDefault = customFields.baseUrl || "/";

  return (
    <>
      <div className={styles.divider} />
      <div className={styles.patternResult}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={styles.resultButtons}>
          <a
            href={`${baseUrlOrDefault}docs/${path}`}
            className="button button--primary"
          >
            Learn More
          </a>
          <button
            onClick={onReset}
            className={`button button--outline button--secondary ${styles.resetButton}`}
          >
            Start Over
          </button>
        </div>
      </div>
    </>
  );
};

export default PatternResult;
