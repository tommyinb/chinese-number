import { parseNumber } from "./parse/parseNumber";
import { Script } from "./to/script";
import { Style } from "./to/style";
import { toChinese } from "./to/toChinese";

export function parseChineseNumber(text: string) {
  if (!text) {
    return undefined;
  }

  return parseNumber(`${text}`);
}

export function toChineseNumber(value: number, style?: Style, script?: Script) {
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

  return toChinese(number, style || Style.Small, script || Script.Traditional);
}

export { Style };
export { Script };
