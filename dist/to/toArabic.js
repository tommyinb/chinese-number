"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArabic = void 0;
function toArabic(value) {
    const text = value.toString();
    const match = /(-?)(\d+)(?:\.(\d+))?e([+-])(\d+)/.exec(text);
    if (!match) {
        return text;
    }
    const valueSign = match[1];
    const integerText = match[2];
    const decimalText = match[3] || "";
    const exponentialSign = match[4];
    const exponentialText = match[5];
    const exponentialValue = parseInt(exponentialText);
    if (exponentialSign === "+") {
        const raisingText = "0".repeat(exponentialValue);
        const raisedText = `${decimalText}${raisingText}`.substring(0, exponentialValue);
        const leftText = `${decimalText}`.substring(exponentialValue);
        if (leftText) {
            return `${valueSign}${integerText}${raisedText}.${leftText}`;
        }
        else {
            return `${valueSign}${integerText}${raisedText}`;
        }
    }
    else {
        const droppingText = "0".repeat(exponentialValue - 1);
        return `${valueSign}0.${droppingText}${integerText}${decimalText}`;
    }
}
exports.toArabic = toArabic;
//# sourceMappingURL=toArabic.js.map