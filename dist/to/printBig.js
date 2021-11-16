"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printBig = void 0;
const printSmall_1 = require("./printSmall");
function printBig(text) {
    if (text.length > 16) {
        throw new Error(`cannot convert to Chinese as value ${text} is too big`);
    }
    const unitText = text.slice(-4);
    const unitPart = unitText ? (0, printSmall_1.printSmall)(unitText) : "";
    const tenThousandText = text.slice(-8, -4);
    const tenThousandPart = tenThousandText
        ? (0, printSmall_1.printSmall)(tenThousandText) + "萬"
        : "";
    const hundredMillionText = text.slice(-12, -8);
    const hundredMillionPart = hundredMillionText
        ? (0, printSmall_1.printSmall)(hundredMillionText) + "億"
        : "";
    const trillionText = text.slice(-16, -12);
    const trillionPart = trillionText ? (0, printSmall_1.printSmall)(trillionText) + "兆" : "";
    const output = `${trillionPart}${hundredMillionPart}${tenThousandPart}${unitPart}`;
    const replaced = output.replace(/(零[萬億兆]?)+/, "零").replace(/零+$/, "");
    return replaced || "零";
}
exports.printBig = printBig;
//# sourceMappingURL=printBig.js.map