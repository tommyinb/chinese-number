import { parseNumber } from "./parse/parseNumber";
import { toChinese } from "./to/toChinese";

export function parseChineseNumber(text: string) {
  if (!text) {
    return undefined;
  }

  return parseNumber(`${text}`);
}

export function toChineseNumber(value: number) {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return undefined;
  }

  const number = Number(value);

  if (isNaN(number)) {
    return undefined;
  }

  return toChinese(number);
}
