import { expect } from "chai";
import { parseChineseNumber, toChineseNumber } from "../src/index";

describe("index", () => {
  describe("parseChineseNumber", () => {
    it("run correctly", () => {
      expect(parseChineseNumber("三十七")).to.equal(37);
    });

    it("guard input", () => {
      expect(parseChineseNumber("A")).to.undefined;

      expect(parseChineseNumber(undefined as any)).to.undefined;
      expect(parseChineseNumber(null as any)).to.undefined;
    });
  });

  describe("toChineseNumber", () => {
    it("runs correctly", () => {
      expect(toChineseNumber(123)).to.equal("一百二十三");
    });

    it("guard input", () => {
      expect(toChineseNumber(undefined as any)).to.undefined;
      expect(toChineseNumber(null as any)).to.undefined;
      expect(toChineseNumber(NaN as any)).to.undefined;
    });
  });
});
