"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toChinese = void 0;
const printBig_1 = require("./printBig");
const printDigit_1 = require("./printDigit");
const script_1 = require("./script");
const style_1 = require("./style");
const toArabic_1 = require("./toArabic");
function toChinese(value, style = style_1.Style.Small, script = script_1.Script.Traditional) {
    const text = (0, toArabic_1.toArabic)(value);
    const match = /(-?)(\d+)(?:\.(\d+))?/.exec(text);
    if (!match) {
        throw new Error("should match anyways");
    }
    const signText = match[1];
    const signPart = signText
        ? script === script_1.Script.Traditional
            ? "負"
            : "负"
        : "";
    const integerText = match[2];
    const integerPart = (0, printBig_1.printBig)(integerText, style, script);
    const decimalText = match[3] || "";
    const decimalDigits = [...decimalText]
        .map((t) => (0, printDigit_1.printDigit)(t, style, script))
        .join("");
    const decimalPart = decimalDigits
        ? (script === script_1.Script.Traditional ? "點" : "点") + decimalDigits
        : "";
    return `${signPart}${integerPart}${decimalPart}`;
}
exports.toChinese = toChinese;
//# sourceMappingURL=toChinese.js.map