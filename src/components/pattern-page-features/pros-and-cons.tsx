import React from "react";
import styles from "./two-column-pros-cons.module.css";
import clsx from "clsx";

interface TwoColumnProsConsProps {
  pros: string[];
  cons: string[];
}

export default function TwoColumnProsCons({
  pros,
  cons,
}: TwoColumnProsConsProps): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          <h3>Pros</h3>
          <ul className={styles.list}>
            {pros.map((pro, index) => (
              <li
                key={`pro-${index}`}
                className={clsx(styles.item, styles.proItem)}
              >
                <span className={styles.checkmark}>✓</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Cons</h3>
          <ul className={styles.list}>
            {cons.map((con, index) => (
              <li
                key={`con-${index}`}
                className={clsx(styles.item, styles.conItem)}
              >
                <span className={styles.cross}>✕</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
