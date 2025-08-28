"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTen = getTen;
// bai2.ts
function getTen() {
    return new Promise((resolve) => setTimeout(() => resolve(10), 1000));
}
