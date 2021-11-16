import { expect } from "chai";
import { toChinese } from "../../src/to/toChinese";

describe("toChinese", () => {
  it("convert correctly", () => {
    expect(toChinese(1002300450607800)).to.equal(
      "一千零二兆三千零四億五千零六十萬七千八百"
    );

    expect(toChinese(-1234)).to.equal("負一千二百三十四");

    expect(toChinese(0.1234)).to.equal("零點一二三四");
    expect(toChinese(-0.1234)).to.equal("負零點一二三四");

    expect(toChinese(654321.1234)).to.equal("六十五萬四千三百二十一點一二三四");
    expect(toChinese(-654321.1234)).to.equal(
      "負六十五萬四千三百二十一點一二三四"
    );
  });
});
