const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessDgt',
    input: 'src/main.ts',
    output: 'dgt',
  },
});
