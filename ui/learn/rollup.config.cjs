const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessLearn',
    input: 'src/main.js',
    output: 'learn',
    js: true,
  },
});
