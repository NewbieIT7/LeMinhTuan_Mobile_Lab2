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
exports.batchCalls = batchCalls;
// bai30.ts
function batchCalls() {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = [
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
            fetch("invalid-url") // Will fail
        ].map(p => p.then(res => res.json()).catch(err => err));
        const results = yield Promise.allSettled(promises);
        results.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log("Success:", result.value);
            }
            else {
                console.log("Failure:", result.reason);
            }
        });
    });
}
