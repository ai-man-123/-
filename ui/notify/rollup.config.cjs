const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessNotify',
    input: 'src/main.ts',
    output: 'notify',
  },
});
