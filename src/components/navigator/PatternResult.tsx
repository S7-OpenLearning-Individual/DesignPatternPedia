import React from "react";
import styles from "./navigator.module.css";

const baseURL = "/DesignPatternPedia/docs";

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
  return (
    <>
      <div className={styles.divider} />
      <div className={styles.patternResult}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={styles.resultButtons}>
          <a href={`${baseURL}/${path}`} className="button button--primary">
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
