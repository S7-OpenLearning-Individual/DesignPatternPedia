import React from "react";
import styles from "./applicability.module.css";

interface ApplicabilityItem {
  situation: string;
  context: string;
}

interface ApplicabilityProps {
  items: ApplicabilityItem[];
}

export default function Applicability({
  items,
}: ApplicabilityProps): React.ReactElement {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={`applicability-${index}`} className={styles.item}>
            <span className={styles.icon}>💡</span>
            <div className={styles.content}>
              <div className={styles.situation}>{item.situation}</div>
              <div className={styles.context}>{item.context}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
