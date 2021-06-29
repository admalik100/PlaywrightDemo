const common = `
  --require Runner.js 
  --require features/support/Steps1.js
  `;

module.exports = {
  default: `${common} features/**/*.feature`
};