import { mapDigit } from "./mapDigit";

export function parseDigit(text: string) {
  const mapped = mapDigit(text);

  if (mapped === undefined) {
    return undefined;
  }

  return parseInt(mapped);
}
