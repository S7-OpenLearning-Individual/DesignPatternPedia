import React from "react";
import styles from "./navigator.module.css";

export type YesOrNo = "yes" | "no";

interface QuestionCardProps {
  question: string;
  selectedAnswer?: YesOrNo;
  onAnswerYes: () => void;
  onAnswerNo: () => void;
  isAnswered?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerYes,
  onAnswerNo,
  isAnswered = false,
}) => {
  return (
    <div className={styles.questionContent}>
      <h2>{question}</h2>
      <div className={styles.answerButtons}>
        <button
          onClick={onAnswerYes}
          className={`${styles.answerBtn} ${styles.answerBtnYes} ${
            selectedAnswer === "yes" ? styles.selected : ""
          }`}
          disabled={isAnswered && selectedAnswer === "yes"}
        >
          <span className={styles.answerIcon}>✓</span>
          <span>Yes</span>
        </button>
        <button
          onClick={onAnswerNo}
          className={`${styles.answerBtn} ${styles.answerBtnNo} ${
            selectedAnswer === "no" ? styles.selected : ""
          }`}
          disabled={isAnswered && selectedAnswer === "no"}
        >
          <span className={styles.answerIcon}>✕</span>
          <span>No</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
