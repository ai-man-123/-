const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'Palantir',
    input: 'src/main.ts',
    output: 'palantir',
  },
});
