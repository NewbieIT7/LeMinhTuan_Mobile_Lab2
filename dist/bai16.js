"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelCalls = parallelCalls;
const bai14_1 = require("./bai14");
// bai16.ts
function parallelCalls() {
    return __awaiter(this, void 0, void 0, function* () {
        const [res1, res2, res3] = yield Promise.all([(0, bai14_1.triple)(1), (0, bai14_1.triple)(2), (0, bai14_1.triple)(3)]);
        console.log("Parallel results:", res1, res2, res3);
    });
}
