const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessSwiss',
    input: 'src/main.ts',
    output: 'swiss',
  },
});
