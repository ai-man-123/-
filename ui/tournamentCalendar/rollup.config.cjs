const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessTournamentCalendar',
    input: 'src/main.ts',
    output: 'tournament.calendar',
  },
});
