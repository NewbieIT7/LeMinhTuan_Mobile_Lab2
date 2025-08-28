"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPromise = void 0;
// bai4.ts
exports.randomPromise = new Promise((resolve) => {
    setTimeout(() => resolve(Math.random()), 1000);
});
