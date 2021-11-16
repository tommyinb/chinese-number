"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toChinese = void 0;
const printBig_1 = require("./printBig");
const printDigit_1 = require("./printDigit");
const toArabic_1 = require("./toArabic");
function toChinese(value) {
    const text = (0, toArabic_1.toArabic)(value);
    const match = /(-?)(\d+)(?:\.(\d+))?/.exec(text);
    if (!match) {
        throw new Error("should match anyways");
    }
    const signText = match[1];
    const integerText = match[2];
    const integerPart = (0, printBig_1.printBig)(integerText);
    const decimalText = match[3] || "";
    const decimalPart = [...decimalText].map(printDigit_1.printDigit).join("");
    return `${signText ? "負" : ""}${integerPart}${decimalPart ? `點${decimalPart}` : ""}`;
}
exports.toChinese = toChinese;
//# sourceMappingURL=toChinese.js.map