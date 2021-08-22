const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessInsight',
    input: 'src/main.ts',
    output: 'insight',
    external: ['highcharts'],
    globals: {
      highcharts: 'Highcharts',
    },
  },
});
