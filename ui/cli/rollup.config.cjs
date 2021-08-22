const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessCli',
    input: 'src/main.ts',
    output: 'cli',
  },
});
