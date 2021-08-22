const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessStorm',
    input: 'src/main.ts',
    output: 'storm',
  },
});
