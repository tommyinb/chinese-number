import { printBig } from "./printBig";
import { printDigit } from "./printDigit";
import { toArabic } from "./toArabic";

export function toChinese(value: number) {
  const text = toArabic(value);

  const match = /(-?)(\d+)(?:\.(\d+))?/.exec(text);
  if (!match) {
    throw new Error("should match anyways");
  }

  const signText = match[1];

  const integerText = match[2];
  const integerPart = printBig(integerText);

  const decimalText = match[3] || "";
  const decimalPart = [...decimalText].map(printDigit).join("");

  return `${signText ? "負" : ""}${integerPart}${
    decimalPart ? `點${decimalPart}` : ""
  }`;
}
