"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloPromise = void 0;
// bai1.ts
exports.helloPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
});
