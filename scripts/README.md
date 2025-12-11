# MDX Structure Linter

This directory contains scripts for maintaining code quality and consistency in the DesignPatternPedia project.

## lint-mdx-structure.js

A linter that validates all pattern documentation files follow the template structure defined in `template.mdx`.

### What it checks

The linter ensures all MDX files in the following directories contain the required headers:

- `docs/behavioral/`
- `docs/creational/`
- `docs/structural/`

### Required Headers

Based on `template.mdx`, all pattern files must include:

1. `## 🧩The problem`
2. `## 🛠️Solutions`
3. `### 🏛️Metaphors`
4. `### 💡Real-world examples`
5. `## ⚖️Pros and Cons`
6. `## 🔍Applicability`
7. `## 🧭Implementation Plan`
8. `### 💻Code samples`
9. `### 🎮Playground`
10. `## 🔗Relations to other patterns`
11. `## 📚Sources`

### Running Locally

```bash
npm run lint:mdx
```
