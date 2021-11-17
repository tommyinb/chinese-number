import { Script } from "./script";
import { Style } from "./style";

export function printDigit(
  character: string,
  style: Style = Style.Small,
  script: Script = Script.Traditional
) {
  switch (character) {
    case "1":
      return style === Style.Big ? "壹" : "一";

    case "2":
      return style === Style.Big
        ? script === Script.Traditional
          ? "貳"
          : "贰"
        : "二";

    case "3":
      return style === Style.Big ? "參" : "三";

    case "4":
      return style === Style.Big ? "肆" : "四";

    case "5":
      return style === Style.Big ? "伍" : "五";

    case "6":
      return style === Style.Big
        ? script === Script.Traditional
          ? "陸"
          : "陆"
        : "六";

    case "7":
      return style === Style.Big ? "柒" : "七";

    case "8":
      return style === Style.Big ? "捌" : "八";

    case "9":
      return style === Style.Big ? "玖" : "九";

    case "0":
      return "零";

    default:
      return "";
  }
}
