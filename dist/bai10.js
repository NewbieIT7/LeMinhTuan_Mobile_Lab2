"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finallyPromise = void 0;
// bai10.ts
exports.finallyPromise = new Promise((resolve) => setTimeout(() => resolve("Success"), 1000))
    .finally(() => console.log("Done"));
