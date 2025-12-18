import { NodeType } from "./node-type";

export interface DecisionNode {
  id: string;
  type: NodeType;
  question?: string;
  title?: string;
  description?: string;
  icon?: string;
  yesPath?: string;
  noPath?: string;
  pattern?: {
    name: string;
    description: string;
    path: string;
  };
}
