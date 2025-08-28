"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterEven = void 0;
// bai9.ts
exports.filterEven = new Promise((resolve) => {
    setTimeout(() => {
        const arr = [1, 2, 3, 4, 5, 6];
        resolve(arr.filter((num) => num % 2 === 0));
    }, 1000);
});
