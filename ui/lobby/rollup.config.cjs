const rollupProject = require('@build/rollupProject');

module.exports = rollupProject({
  main: {
    name: 'LichessLobby',
    input: 'src/boot.ts',
    output: 'lobby',
  },
});
