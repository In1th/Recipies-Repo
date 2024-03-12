"use strict";
 
module.exports = {
  recursive: true,
  extension: ['js, ts'],
  package: './package.json',
  timeout: 3000,
  checkLeaks: false,
  color: true,
  diff: true,
  spec: ["test/**/*.ts"],
  "node-option": ['trace-warnings', 'import=tsx']
};