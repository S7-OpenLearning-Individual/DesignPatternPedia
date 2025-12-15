module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
      numberOfRuns: 1,
    },
    upload: {
      target: "filesystem",
      outputDir: "./lighthouse-report",
    },
  },
};
