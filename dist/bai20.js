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
exports.fetchWithTimeout = fetchWithTimeout;
const bai18_1 = require("./bai18");
// bai20.ts
function fetchWithTimeout(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const timeout = new Promise((_, reject) => setTimeout(() => reject("Timeout"), 2000));
        return yield Promise.race([(0, bai18_1.fetchUser)(id), timeout]);
    });
}
