import React from "react";
import QuestionCard from "./QuestionCard";
import styles from "./navigator.module.css";
import { YesOrNo } from "@site/src/models/yes-or-no";

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
            //Only call if the answer changed
            if (answer !== "yes") {
              onChangeAnswer("yes");
            }
          }}
          onAnswerNo={() => {
            //Only call if the answer changed
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
