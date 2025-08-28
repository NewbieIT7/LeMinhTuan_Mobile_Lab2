"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = simulateTask;
// bai5.ts
function simulateTask(time) {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
}
