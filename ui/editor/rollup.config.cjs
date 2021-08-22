const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessEditor',
    input: 'src/main.ts',
    output: 'editor',
  },
});
