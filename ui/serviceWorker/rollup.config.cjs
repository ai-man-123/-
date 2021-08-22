const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    input: 'src/main.ts',
    output: 'serviceWorker',
  },
});
