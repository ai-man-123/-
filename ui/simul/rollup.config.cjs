const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessSimul',
    input: 'src/main.ts',
    output: 'simul',
  },
});
