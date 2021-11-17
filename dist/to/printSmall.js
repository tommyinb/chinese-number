"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSmall = void 0;
const printDigit_1 = require("./printDigit");
const script_1 = require("./script");
const style_1 = require("./style");
function printSmall(text, style = style_1.Style.Small, script = script_1.Script.Traditional) {
    if (text.length > 4) {
        throw new Error(`cannot convert to Chinese as value ${text} is too big`);
    }
    const reversed = [...text].reverse();
    const parts = reversed
        .map((character, index) => {
        if (character === "0") {
            return "零";
        }
        const digit = (0, printDigit_1.printDigit)(character, style, script);
        switch (index) {
            case 0:
                return digit;
            case 1:
                return digit + (style === style_1.Style.Big ? "拾" : "十");
            case 2:
                return digit + (style === style_1.Style.Big ? "佰" : "百");
            case 3:
                return digit + (style === style_1.Style.Big ? "仟" : "千");
            default:
                throw new Error();
        }
    })
        .reverse();
    if (parts.every((t) => t === "零")) {
        return "零";
    }
    return parts.join("").replace(/零+/, "零").replace(/零+$/, "");
}
exports.printSmall = printSmall;
//# sourceMappingURL=printSmall.js.map