const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessRacer',
    input: 'src/main.ts',
    output: 'racer',
  },
});
