"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceTasks = void 0;
const bai5_1 = require("./bai5");
// bai7.ts
exports.raceTasks = Promise.race([
    (0, bai5_1.simulateTask)(1000),
    (0, bai5_1.simulateTask)(2000),
    (0, bai5_1.simulateTask)(1500)
]);
