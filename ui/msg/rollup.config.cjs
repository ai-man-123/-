const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessMsg',
    input: 'src/main.ts',
    output: 'msg',
  },
});
