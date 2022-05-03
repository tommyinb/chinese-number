"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printBig = void 0;
const parseBig_1 = require("../parse/parseBig");
const printSmall_1 = require("./printSmall");
const script_1 = require("./script");
const style_1 = require("./style");
const printUnits = [
    ...parseBig_1.units,
    { traditional: "萬", simplified: "万", power: 4 },
];
function printBig(text, style = style_1.Style.Small, script = script_1.Script.Traditional) {
    if (text.length > 24) {
        throw new Error(`cannot convert to Chinese as value ${text} is too big`);
    }
    const tailText = text.slice(-4);
    const tailPart = tailText ? (0, printSmall_1.printSmall)(tailText, style, script) : "";
    const unitParts = printUnits.map(({ traditional, simplified, power }) => {
        const part = text.slice(-power - 4, -power);
        if (!part) {
            return "";
        }
        const value = (0, printSmall_1.printSmall)(part, style, script);
        const unit = script === script_1.Script.Traditional ? traditional : simplified;
        return `${value}${unit}`;
    });
    const output = `${unitParts.join("")}${tailPart}`;
    const unitPatterns = printUnits.map(({ traditional, simplified }) => `${traditional}${simplified}`);
    const zeroRegExp = new RegExp(`(零[${unitPatterns.join("")}]?)+`);
    const zeroReplaced = output.replace(zeroRegExp, "零").replace(/零+$/, "");
    return zeroReplaced || "零";
}
exports.printBig = printBig;
//# sourceMappingURL=printBig.js.map