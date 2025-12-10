import React, { useState } from "react";
import {
  decisionTree,
  getNode,
  getNextNode,
  isPatternNode,
} from "@site/src/data/decision-tree";
import QuestionCard from "./QuestionCard";
import PatternResult from "./PatternResult";
import AnsweredQuestion from "./AnsweredQuestion";
import styles from "./navigator.module.css";

export interface Answer {
  nodeId: string;
  answer: "yes" | "no";
}

const NavigatorContainer: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const currentNodeId =
    answers.length === 0
      ? "q1"
      : getNextNode(
          answers[answers.length - 1].nodeId,
          answers[answers.length - 1].answer
        ) || "q1";
  const currentNode = getNode(currentNodeId);

  if (!currentNode) {
    return <div>Error: Node not found</div>;
  }

  const handleAnswer = (answer: "yes" | "no") => {
    setAnswers([...answers, { nodeId: currentNodeId, answer }]);
  };

  const handleGoBack = (index: number, newAnswer?: "yes" | "no") => {
    const targetAnswer = newAnswer || answers[index].answer;
    setAnswers(
      answers
        .slice(0, index)
        .concat({ nodeId: answers[index].nodeId, answer: targetAnswer })
    );
  };

  const handleReset = () => {
    setAnswers([]);
  };

  const isPattern = isPatternNode(currentNodeId);

  return (
    <div className={styles.navigatorPage}>
      {/* Show all previous questions with their selected answers */}
      {answers.map((answer, index) => {
        const node = getNode(answer.nodeId);
        if (!node) return null;

        // Check if the next node after this answer is a pattern (not a question)
        const nextNodeId = getNextNode(answer.nodeId, answer.answer);
        const isNextNodePattern = nextNodeId
          ? isPatternNode(nextNodeId)
          : false;

        return (
          <AnsweredQuestion
            key={index}
            question={node.question || ""}
            answer={answer.answer}
            onChangeAnswer={(newAnswer) => handleGoBack(index, newAnswer)}
            showDivider={!isNextNodePattern}
          />
        );
      })}

      {/* Current Question or Result */}
      {isPattern && currentNode.pattern ? (
        <PatternResult
          name={currentNode.pattern.name}
          description={currentNode.pattern.description}
          path={currentNode.pattern.path}
          onReset={handleReset}
        />
      ) : (
        <QuestionCard
          question={currentNode.question || ""}
          onAnswerYes={() => handleAnswer("yes")}
          onAnswerNo={() => handleAnswer("no")}
        />
      )}
    </div>
  );
};

export default NavigatorContainer;
