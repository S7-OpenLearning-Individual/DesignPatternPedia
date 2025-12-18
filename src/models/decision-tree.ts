import { DecisionNode } from "./decision-node";

export interface DecisionTree {
  [nodeId: string]: DecisionNode;
}
