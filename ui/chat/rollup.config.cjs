const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessChat',
    input: 'src/main.ts',
    output: 'chat',
  },
});
