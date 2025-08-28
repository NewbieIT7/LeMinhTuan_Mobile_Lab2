"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTasks = void 0;
const bai5_1 = require("./bai5");
// bai6.ts
exports.parallelTasks = Promise.all([
    (0, bai5_1.simulateTask)(1000),
    (0, bai5_1.simulateTask)(2000),
    (0, bai5_1.simulateTask)(1500)
]);
