"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainPromise = void 0;
// bai8.ts
exports.chainPromise = Promise.resolve(2)
    .then((num) => num * num)
    .then((num) => num * 2)
    .then((num) => num + 5);
