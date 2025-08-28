"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectError = rejectError;
// bai3.ts
function rejectError() {
    return new Promise((_, reject) => setTimeout(() => reject("Something went wrong"), 1000));
}
