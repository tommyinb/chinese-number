import { parseNumber } from "./parse/parseNumber";

export function parseChineseNumber(text: string) {
  return text !== undefined || text !== null
    ? parseNumber(`${text}`)
    : undefined;
}
