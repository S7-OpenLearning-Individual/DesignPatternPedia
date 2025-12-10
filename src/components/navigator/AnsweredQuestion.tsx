import React from "react";
import QuestionCard, { YesOrNo } from "./QuestionCard";
import styles from "./navigator.module.css";

interface AnsweredQuestionProps {
  question: string;
  answer: YesOrNo;
  onChangeAnswer: (newAnswer: YesOrNo) => void;
  showDivider: boolean;
}

const AnsweredQuestion: React.FC<AnsweredQuestionProps> = ({
  question,
  answer,
  onChangeAnswer,
  showDivider,
}) => {
  return (
    <div>
      <div className={styles.answeredQuestion}>
        <QuestionCard
          question={question}
          selectedAnswer={answer}
          onAnswerYes={() => {
            if (answer !== "yes") {
              onChangeAnswer("yes");
            }
          }}
          onAnswerNo={() => {
            if (answer !== "no") {
              onChangeAnswer("no");
            }
          }}
          isAnswered={true}
        />
      </div>
      {showDivider && <div className={styles.divider} />}
    </div>
  );
};

export default AnsweredQuestion;
