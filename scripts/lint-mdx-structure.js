#!/usr/bin/env node

/**
 * MDX Structure Linter
 * Validates that all pattern documentation files follow the template structure
 * defined in template.mdx
 */

const fs = require("fs");
const path = require("path");

// Required headers from template.mdx
const REQUIRED_HEADERS = [
  "## 🧩The problem",
  "## 🛠️Solutions",
  "### 🏛️Metaphors",
  "### 💡Real-world examples",
  "## ⚖️ Pros and Cons",
  "## 🔍Applicability",
  "## 🧭Implementation Plan",
  "### 💻Code samples",
  "### 🎮Playground",
  "## 🔗Relations to other patterns",
  "## 📚Sources",
];

const PATTERN_DIRECTORIES = [
  "docs/behavioral",
  "docs/creational",
  "docs/structural",
];

/**
 * Read and parse an MDX file to extract headers
 */
function extractHeaders(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const headerRegex = /^#{1,6}\s+.+$/gm;
  const headers = content.match(headerRegex) || [];
  return headers;
}

/**
 * Check if a file contains all required headers
 */
function validateFile(filePath) {
  const headers = extractHeaders(filePath);
  const missingHeaders = [];

  for (const requiredHeader of REQUIRED_HEADERS) {
    const found = headers.some((header) => header === requiredHeader);
    if (!found) {
      missingHeaders.push(requiredHeader);
    }
  }

  return missingHeaders;
}

/**
 * Get all MDX files in a directory (excluding _category_.yml and other non-pattern files)
 */
function getMdxFiles(directory) {
  const fullPath = path.join(process.cwd(), directory);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  return files
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => path.join(directory, file));
}

/**
 * Main linter function
 */
function lintMdxStructure() {
  console.log("🔍 Linting MDX structure...\n");

  let hasErrors = false;
  const results = [];

  // Collect all MDX files from pattern directories
  const allFiles = PATTERN_DIRECTORIES.flatMap((dir) => getMdxFiles(dir));

  if (allFiles.length === 0) {
    console.log("⚠️  No MDX files found in pattern directories");
    return 0;
  }

  console.log(`📄 Found ${allFiles.length} pattern file(s) to validate\n`);

  // Validate each file
  for (const file of allFiles) {
    const missingHeaders = validateFile(file);

    if (missingHeaders.length > 0) {
      hasErrors = true;
      results.push({
        file,
        missingHeaders,
      });
    }
  }

  // Report results
  if (hasErrors) {
    console.log("❌ Structure validation failed!\n");

    for (const result of results) {
      console.log(`📄 ${result.file}`);
      console.log("   Missing headers:");
      for (const header of result.missingHeaders) {
        console.log(`   - ${header}`);
      }
      console.log("");
    }

    console.log("💡 Tip: Check template.mdx for the required structure\n");
    return 1;
  } else {
    console.log("✅ All pattern files follow the correct structure!\n");
    return 0;
  }
}

// Run the linter
const exitCode = lintMdxStructure();
process.exit(exitCode);
