/** Module System
 * 1. User module
 * 2. Core / Built in
 * 3. NPM - Node Package Manager
 */

const { hello } = require("./modules/greeting.js");
const { sum, multiple } = require("./modules/math.js");

// hello("John");

let result = multiple(5, 6);

console.log(result);
