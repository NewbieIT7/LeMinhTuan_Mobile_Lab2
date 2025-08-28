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
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Bai 1
        console.log('Bai 1:');
        yield bai1_1.helloPromise.then((result) => console.log(result));
        // Bai 2
        console.log('Bai 2:');
        yield (0, bai2_1.getTen)().then((result) => console.log(result));
        // Bai 3
        console.log('Bai 3:');
        try {
            yield (0, bai3_1.rejectError)();
        }
        catch (error) {
            console.log('Error:', error);
        }
        // Bai 4
        console.log('Bai 4:');
        yield bai4_1.randomPromise.then((result) => console.log(result)).catch((error) => console.error(error));
        // Bai 5
        console.log('Bai 5:');
        yield (0, bai5_1.simulateTask)(1000).then((result) => console.log(result));
    });
}
main().catch((error) => console.error("Main error:", error));
