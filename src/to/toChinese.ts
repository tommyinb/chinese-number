import { printBig } from "./printBig";
import { printDigit } from "./printDigit";
import { Script } from "./script";
import { Style } from "./style";
import { toArabic } from "./toArabic";

export function toChinese(
  value: number,
  style: Style = Style.Small,
  script: Script = Script.Traditional
) {
  const text = toArabic(value);

  const match = /(-?)(\d+)(?:\.(\d+))?/.exec(text);
  if (!match) {
    throw new Error("should match anyways");
  }

  const signText = match[1];
  const signPart = signText
    ? script === Script.Traditional
      ? "負"
      : "负"
    : "";

  const integerText = match[2];
  const integerPart = printBig(integerText, style, script);

  const decimalText = match[3] || "";
  const decimalDigits = [...decimalText]
    .map((t) => printDigit(t, style, script))
    .join("");
  const decimalPart = decimalDigits
    ? (script === Script.Traditional ? "點" : "点") + decimalDigits
    : "";

  return `${signPart}${integerPart}${decimalPart}`;
}
