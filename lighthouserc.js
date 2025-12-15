module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        // Additional Chrome flags can be passed via command line
        // chromeFlags: '--headless --no-sandbox --disable-gpu'
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
