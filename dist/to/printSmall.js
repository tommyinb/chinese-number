"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSmall = void 0;
const printDigit_1 = require("./printDigit");
function printSmall(text) {
    if (text.length > 4) {
        throw new Error(`cannot convert to Chinese as value ${text} is too big`);
    }
    const reversed = [...text].reverse();
    const parts = reversed
        .map((character, index) => {
        if (character === "0") {
            return "零";
        }
        const digit = (0, printDigit_1.printDigit)(character);
        switch (index) {
            case 0:
                return digit;
            case 1:
                return digit + "十";
            case 2:
                return digit + "百";
            case 3:
                return digit + "千";
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