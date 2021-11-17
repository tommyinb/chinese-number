"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDigit = void 0;
const script_1 = require("./script");
const style_1 = require("./style");
function printDigit(character, style = style_1.Style.Small, script = script_1.Script.Traditional) {
    switch (character) {
        case "1":
            return style === style_1.Style.Big ? "壹" : "一";
        case "2":
            return style === style_1.Style.Big
                ? script === script_1.Script.Traditional
                    ? "貳"
                    : "贰"
                : "二";
        case "3":
            return style === style_1.Style.Big ? "參" : "三";
        case "4":
            return style === style_1.Style.Big ? "肆" : "四";
        case "5":
            return style === style_1.Style.Big ? "伍" : "五";
        case "6":
            return style === style_1.Style.Big
                ? script === script_1.Script.Traditional
                    ? "陸"
                    : "陆"
                : "六";
        case "7":
            return style === style_1.Style.Big ? "柒" : "七";
        case "8":
            return style === style_1.Style.Big ? "捌" : "八";
        case "9":
            return style === style_1.Style.Big ? "玖" : "九";
        case "0":
            return "零";
        default:
            return "";
    }
}
exports.printDigit = printDigit;
//# sourceMappingURL=printDigit.js.map