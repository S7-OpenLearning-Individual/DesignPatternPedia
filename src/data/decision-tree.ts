// Decision Tree Node Types
export type NodeType = "question" | "pattern";

export interface DecisionNode {
  id: string;
  type: NodeType;
  question?: string; // For question nodes
  title?: string; // For pattern nodes
  description?: string; // For pattern nodes
  icon?: string; // Optional icon identifier
  yesPath?: string; // ID of next node if "Yes"
  noPath?: string; // ID of next node if "No"
  pattern?: {
    name: string;
    description: string;
    path: string;
  };
}

export interface DecisionTree {
  [nodeId: string]: DecisionNode;
}

// Decision Tree Structure
export const decisionTree: DecisionTree = {
  // First main decision
  q1: {
    id: "q1",
    type: "question",
    question: "Are you creating new objects?",
    yesPath: "c1",
    noPath: "q2",
  },

  // Second main decision
  q2: {
    id: "q2",
    type: "question",
    question: "Do you need to organize or structure existing objects?",
    yesPath: "s1",
    noPath: "b1",
  },

  // ===== CREATIONAL PATTERNS BRANCH =====

  c1: {
    id: "c1",
    type: "question",
    question: "Do you want to restrict instances?",
    yesPath: "singleton",
    noPath: "c2",
  },

  c2: {
    id: "c2",
    type: "question",
    question: "Does the object require multiple steps to create?",
    yesPath: "c3",
    noPath: "c4",
  },

  c3: {
    id: "c3",
    type: "question",
    question: "Do you need variants?",
    yesPath: "abstract_factory",
    noPath: "builder",
  },

  c4: {
    id: "c4",
    type: "question",
    question: "Do you need to clone existing objects?",
    yesPath: "prototype",
    noPath: "factory_method",
  },

  singleton: {
    id: "singleton",
    type: "pattern",
    title: "Singleton",
    description: "One instance",
    pattern: {
      name: "Singleton",
      description: "Ensures a class has only one instance.",
      path: "creational/singleton",
    },
  },

  abstract_factory: {
    id: "abstract_factory",
    type: "pattern",
    title: "Abstract Factory",
    description: "Family of objects",
    pattern: {
      name: "Abstract Factory",
      description: "Creates an instance of several families of classes.",
      path: "creational/abstract-factory",
    },
  },

  builder: {
    id: "builder",
    type: "pattern",
    title: "Builder",
    description: "Step-by-step",
    pattern: {
      name: "Builder",
      description: "Separates object construction from its representation.",
      path: "creational/builder",
    },
  },

  prototype: {
    id: "prototype",
    type: "pattern",
    title: "Prototype",
    description: "Clone objects",
    pattern: {
      name: "Prototype",
      description: "Clones objects to create new instances.",
      path: "creational/prototype",
    },
  },

  factory_method: {
    id: "factory_method",
    type: "pattern",
    title: "Factory Method",
    description: "Encapsulate creation",
    pattern: {
      name: "Factory Method",
      description: "Creates objects without specifying the exact class.",
      path: "creational/factory-method",
    },
  },

  // ===== STRUCTURAL PATTERNS BRANCH =====
  s1: {
    id: "s1",
    type: "question",
    question: "Are you wrapping an object?",
    yesPath: "s2",
    noPath: "s4",
  },

  s2: {
    id: "s2",
    type: "question",
    question: "Do you need to change an object's interface?",
    yesPath: "adapter",
    noPath: "s3",
  },

  s3: {
    id: "s3",
    type: "question",
    question: "Do you need to add functionality dynamically?",
    yesPath: "decorator",
    noPath: "proxy",
  },

  s4: {
    id: "s4",
    type: "question",
    question: "Are you building a tree or hierarchical structure?",
    yesPath: "composite",
    noPath: "s5",
  },

  s5: {
    id: "s5",
    type: "question",
    question: "Do you need to simplify a complex system?",
    yesPath: "facade",
    noPath: "s6",
  },

  s6: {
    id: "s6",
    type: "question",
    question: "Do you need to optimize memory usage?",
    yesPath: "flyweight",
    noPath: "bridge",
  },

  adapter: {
    id: "adapter",
    type: "pattern",
    title: "Adapter",
    description: "Convert interface",
    pattern: {
      name: "Adapter",
      description: "Allows incompatible interfaces to work together.",
      path: "structural/adapter",
    },
  },

  decorator: {
    id: "decorator",
    type: "pattern",
    title: "Decorator",
    description: "Add behavior",
    pattern: {
      name: "Decorator",
      description:
        "Attaches additional responsibilities to an object dynamically.",
      path: "structural/decorator",
    },
  },

  proxy: {
    id: "proxy",
    type: "pattern",
    title: "Proxy",
    description: "Control access",
    pattern: {
      name: "Proxy",
      description: "Provides a surrogate or placeholder for another object.",
      path: "structural/proxy",
    },
  },

  composite: {
    id: "composite",
    type: "pattern",
    title: "Composite",
    description: "Part-whole",
    pattern: {
      name: "Composite",
      description:
        "Composes objects into tree structures to represent part-whole hierarchies.",
      path: "structural/composite",
    },
  },

  facade: {
    id: "facade",
    type: "pattern",
    title: "Facade",
    description: "Unified interface",
    pattern: {
      name: "Facade",
      description:
        "Provides a unified, simplified interface to a set of interfaces.",
      path: "structural/facade",
    },
  },

  flyweight: {
    id: "flyweight",
    type: "pattern",
    title: "Flyweight",
    description: "Share objects",
    pattern: {
      name: "Flyweight",
      description:
        "Uses sharing to support large numbers of fine-grained objects efficiently.",
      path: "structural/flyweight",
    },
  },

  bridge: {
    id: "bridge",
    type: "pattern",
    title: "Bridge",
    description: "Decouple interface",
    pattern: {
      name: "Bridge",
      description: "Decouples an abstraction from its implementation.",
      path: "structural/bridge",
    },
  },

  // ===== BEHAVIORAL PATTERNS BRANCH =====
  b1: {
    id: "b1",
    type: "question",
    question: "Is it about sequencing?",
    yesPath: "b2",
    noPath: "b4",
  },

  b2: {
    id: "b2",
    type: "question",
    question: "Do you need to pass requests through a chain of handlers?",
    yesPath: "chain_of_responsibility",
    noPath: "b3",
  },

  b3: {
    id: "b3",
    type: "question",
    question: "Do you need to execute commands later or queue them?",
    yesPath: "command",
    noPath: "iterator",
  },

  b4: {
    id: "b4",
    type: "question",
    question: "Does the behavior need to change dynamically?",
    yesPath: "b5",
    noPath: "b6",
  },

  b5: {
    id: "b5",
    type: "question",
    question:
      "Does the object need to change behavior based on internal state?",
    yesPath: "state",
    noPath: "strategy",
  },

  b6: {
    id: "b6",
    type: "question",
    question: "Do you need to track and notify about changes?",
    yesPath: "observer",
    noPath: "b7",
  },

  b7: {
    id: "b7",
    type: "question",
    question: "Do you need to save and restore object state?",
    yesPath: "memento",
    noPath: "visitor",
  },

  chain_of_responsibility: {
    id: "chain_of_responsibility",
    type: "pattern",
    title: "Chain of Responsibility",
    description: "Pass along chain",
    pattern: {
      name: "Chain of Responsibility",
      description: "Passes requests along a chain of handlers.",
      path: "behavioral/chain-of-responsibility",
    },
  },

  command: {
    id: "command",
    type: "pattern",
    title: "Command",
    description: "Encapsulate action",
    pattern: {
      name: "Command",
      description: "Encapsulates a request as an object.",
      path: "behavioral/command",
    },
  },

  iterator: {
    id: "iterator",
    type: "pattern",
    title: "Iterator",
    description: "Access elements",
    pattern: {
      name: "Iterator",
      description: "Accesses elements of a collection sequentially.",
      path: "behavioral/iterator",
    },
  },

  state: {
    id: "state",
    type: "pattern",
    title: "State",
    description: "Change behavior",
    pattern: {
      name: "State",
      description:
        "Allows an object to alter its behavior when its internal state changes.",
      path: "behavioral/state",
    },
  },

  strategy: {
    id: "strategy",
    type: "pattern",
    title: "Strategy",
    description: "Select algorithm",
    pattern: {
      name: "Strategy",
      description: "Defines a family of algorithms and encapsulates each one.",
      path: "behavioral/strategy",
    },
  },

  observer: {
    id: "observer",
    type: "pattern",
    title: "Observer",
    description: "Notify dependents",
    pattern: {
      name: "Observer",
      description: "Defines a one-to-many dependency between objects.",
      path: "behavioral/observer",
    },
  },

  memento: {
    id: "memento",
    type: "pattern",
    title: "Memento",
    description: "Capture state",
    pattern: {
      name: "Memento",
      description: "Captures and externalizes an object's internal state.",
      path: "behavioral/memento",
    },
  },

  visitor: {
    id: "visitor",
    type: "pattern",
    title: "Visitor",
    description: "Add operations",
    pattern: {
      name: "Visitor",
      description:
        "Represents an operation to be performed on elements of an object structure.",
      path: "behavioral/visitor",
    },
  },
};

// Helper function to get node by ID
export const getNode = (nodeId: string): DecisionNode | undefined => {
  return decisionTree[nodeId];
};

// Helper function to get next node based on answer
export const getNextNode = (
  nodeId: string,
  answer: "yes" | "no"
): string | undefined => {
  const node = getNode(nodeId);
  if (!node) return undefined;
  return answer === "yes" ? node.yesPath : node.noPath;
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
