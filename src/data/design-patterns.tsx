export interface DesignPattern {
  name: string;
  description: string;
  category: "behavioral" | "structural" | "creational";
  path: string;
}

export const designPatterns: DesignPattern[] = [
  // Creational Patterns
  {
    name: "Abstract Factory",
    description: "Creates an instance of several families of classes.",
    category: "creational",
    path: "creational/abstract-factory",
  },
  {
    name: "Builder",
    description: "Separates object construction from its representation.",
    category: "creational",
    path: "creational/builder",
  },
  {
    name: "Factory Method",
    description: "Creates objects without specifying the exact class.",
    category: "creational",
    path: "creational/factory-method",
  },
  {
    name: "Prototype",
    description: "Clones objects to create new instances.",
    category: "creational",
    path: "creational/prototype",
  },
  {
    name: "Singleton",
    description: "Ensures a class has only one instance.",
    category: "creational",
    path: "creational/singleton",
  },

  // Structural Patterns
  {
    name: "Adapter",
    description: "Allows incompatible interfaces to work together.",
    category: "structural",
    path: "structural/adapter",
  },
  {
    name: "Bridge",
    description: "Separates abstraction from implementation.",
    category: "structural",
    path: "structural/bridge",
  },
  {
    name: "Composite",
    description:
      "Compose objects into tree structures to represent part-whole hierarchies.",
    category: "structural",
    path: "structural/composite",
  },
  {
    name: "Decorator",
    description: "Attach additional responsibilities to an object dynamically.",
    category: "structural",
    path: "structural/decorator",
  },
  {
    name: "Facade",
    description: "Provides a simplified interface to a complex subsystem.",
    category: "structural",
    path: "structural/facade",
  },
  {
    name: "Flyweight",
    description: "Reduces memory usage by sharing common parts of objects.",
    category: "structural",
    path: "structural/flyweight",
  },
  {
    name: "Proxy",
    description: "Provides a surrogate or placeholder for another object.",
    category: "structural",
    path: "structural/proxy",
  },

  // Behavioral Patterns
  {
    name: "Chain of Responsibility",
    description: "Passes a request along a chain of objects.",
    category: "behavioral",
    path: "behavioral/chain-of-responsibility",
  },
  {
    name: "Command",
    description: "Encapsulates a request as an object.",
    category: "behavioral",
    path: "behavioral/command",
  },
  {
    name: "Iterator",
    description:
      "Provides a way to access elements sequentially without exposing underlying representation.",
    category: "behavioral",
    path: "behavioral/iterator",
  },
  {
    name: "Mediator",
    description: "Defines simplified communication between objects.",
    category: "behavioral",
    path: "behavioral/mediator",
  },
  {
    name: "Memento",
    description: "Captures and restores an object's internal state.",
    category: "behavioral",
    path: "behavioral/memento",
  },
  {
    name: "Observer",
    description:
      "Objects subscribe to and receive notifications of state changes.",
    category: "behavioral",
    path: "behavioral/observer",
  },
  {
    name: "State",
    description: "Alters an object's behavior when its internal state changes.",
    category: "behavioral",
    path: "behavioral/state",
  },
  {
    name: "Strategy",
    description: "Defines a family of algorithms, encapsulates each one.",
    category: "behavioral",
    path: "behavioral/strategy",
  },
  {
    name: "Template Method",
    description:
      "Defines the skeleton of an algorithm, deferring steps to subclasses.",
    category: "behavioral",
    path: "behavioral/template-method",
  },
  {
    name: "Visitor",
    description:
      "Defines new operations without changing the classes on which they operate.",
    category: "behavioral",
    path: "behavioral/visitor",
  },
];
