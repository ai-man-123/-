const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessDasher',
    input: 'src/main.ts',
    output: 'dasher',
  },
});
