import { YesOrNo } from "../components/navigator/QuestionCard";
import { DecisionNode, decisionTree } from "../data/decision-tree";

// Helper function to get node by ID
export const getNode = (nodeId: string): DecisionNode | undefined => {
  return decisionTree[nodeId];
};

// Helper function to get next node based on answer
export const getNextNode = (
  nodeId: string,
  answer: YesOrNo
): string | undefined => {
  const node = getNode(nodeId);
  if (!node) {
    return undefined;
  }

  if (answer === "yes") {
    return node.yesPath;
  }

  return node.noPath;
};

// Helper function to check if node is a pattern endpoint
export const isPatternNode = (nodeId: string): boolean => {
  const node = getNode(nodeId);
  return node?.type === "pattern";
};

// Helper function to check if node is a question
export const isQuestionNode = (nodeId: string): boolean => {
  const node = getNode(nodeId);
  return node?.type === "question";
};
