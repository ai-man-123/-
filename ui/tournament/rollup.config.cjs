const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessTournament',
    input: 'src/main.ts',
    output: 'tournament',
  },
});
