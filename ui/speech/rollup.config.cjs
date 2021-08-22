const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessSpeech',
    input: 'src/main.ts',
    output: 'speech',
  },
});
