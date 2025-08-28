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
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai2_1 = require("./bai2");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai3_1 = require("./bai3");
const bai30_1 = require("./bai30");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai9_1 = require("./bai9");
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
        // Bai 6
        console.log('Bai 6:');
        yield bai6_1.parallelTasks.then((results) => console.log(results));
        // Bai 7
        console.log('Bai 7:');
        yield bai7_1.raceTasks.then((result) => console.log(result));
        // Bai 8
        console.log('Bai 8:');
        yield bai8_1.chainPromise.then((result) => console.log(result));
        // Bai 9
        console.log('Bai 9:');
        yield bai9_1.filterEven.then((result) => console.log(result));
        // Bai 10
        console.log('Bai 10:');
        yield bai10_1.finallyPromise.then((result) => console.log(result));
        // Bai 11
        console.log('Bai 11:');
        console.log(yield (0, bai11_1.asyncHello)());
        // Bai 12
        console.log('Bai 12:');
        yield (0, bai12_1.runTask)();
        // Bai 13
        console.log('Bai 13:');
        yield (0, bai13_1.handleError)();
        // Bai 14
        console.log('Bai 14:');
        console.log(yield (0, bai14_1.triple)(5));
        // Bai 15
        console.log('Bai 15:');
        yield (0, bai15_1.sequentialCalls)();
        // Bai 16
        console.log('Bai 16:');
        yield (0, bai16_1.parallelCalls)();
        // Bai 17
        console.log('Bai 17:');
        yield (0, bai17_1.iteratePromises)();
        // Bai 18
        console.log('Bai 18:');
        console.log(yield (0, bai18_1.fetchUser)(1));
        // Bai 19
        console.log('Bai 19:');
        console.log(yield (0, bai19_1.fetchUsers)([1, 2]));
        // Bai 20
        console.log('Bai 20:');
        try {
            console.log(yield (0, bai20_1.fetchWithTimeout)(1));
        }
        catch (error) {
            console.log('Error:', error);
        }
        // Bai 21
        console.log('Bai 21:');
        console.log(yield (0, bai21_1.getTodo)());
        // Bai 22
        console.log('Bai 22:');
        yield (0, bai22_1.multipleTodos)();
        // Bai 24
        console.log('Bai 24:');
        console.log(yield (0, bai24_1.postData)());
        // Bai 25
        console.log('Bai 25:');
        yield (0, bai25_1.downloadFile)();
        // Bai 23
        console.log('Bai 23:');
        console.log(yield (0, bai23_1.filterTodos)());
        // Bai 26
        console.log('Bai 26:');
        yield (0, bai26_1.waitFiveSeconds)();
        // Bai 27
        console.log('Bai 27:');
        try {
            console.log(yield (0, bai27_1.fetchWithRetry)("https://jsonplaceholder.typicode.com/todos/1", 3));
        }
        catch (error) {
            console.log('Error:', error);
        }
        // Bai 28
        console.log('Bai 28:');
        console.log(yield (0, bai28_1.batchProcess)());
        // Bai 29
        console.log('Bai 29:');
        yield (0, bai29_1.queueProcess)();
        // Bai 30
        console.log('Bai 30:');
        yield (0, bai30_1.batchCalls)();
    });
}
main().catch((error) => console.error("Main error:", error));
