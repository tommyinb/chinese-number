import { expect } from "chai";
import { printDigit } from "../../src/to/printDigit";
import { Script } from "../../src/to/script";
import { Style } from "../../src/to/style";

describe("printDigit", () => {
  it("print in small style correctly", () => {
    for (const script of [Script.Traditional, Script.Simplified]) {
      expect(printDigit("1", Style.Small, script)).to.equal("一");
      expect(printDigit("2", Style.Small, script)).to.equal("二");
      expect(printDigit("3", Style.Small, script)).to.equal("三");
      expect(printDigit("4", Style.Small, script)).to.equal("四");
      expect(printDigit("5", Style.Small, script)).to.equal("五");
      expect(printDigit("6", Style.Small, script)).to.equal("六");
      expect(printDigit("7", Style.Small, script)).to.equal("七");
      expect(printDigit("8", Style.Small, script)).to.equal("八");
      expect(printDigit("9", Style.Small, script)).to.equal("九");
      expect(printDigit("0", Style.Small, script)).to.equal("零");
    }
  });

  it("print big and traditional correctly", () => {
    expect(printDigit("1", Style.Big, Script.Traditional)).to.equal("壹");
    expect(printDigit("2", Style.Big, Script.Traditional)).to.equal("貳");
    expect(printDigit("3", Style.Big, Script.Traditional)).to.equal("參");
    expect(printDigit("4", Style.Big, Script.Traditional)).to.equal("肆");
    expect(printDigit("5", Style.Big, Script.Traditional)).to.equal("伍");
    expect(printDigit("6", Style.Big, Script.Traditional)).to.equal("陸");
    expect(printDigit("7", Style.Big, Script.Traditional)).to.equal("柒");
    expect(printDigit("8", Style.Big, Script.Traditional)).to.equal("捌");
    expect(printDigit("9", Style.Big, Script.Traditional)).to.equal("玖");
    expect(printDigit("0", Style.Big, Script.Traditional)).to.equal("零");
  });

  it("print big and simplified correctly", () => {
    expect(printDigit("1", Style.Big, Script.Simplified)).to.equal("壹");
    expect(printDigit("2", Style.Big, Script.Simplified)).to.equal("贰");
    expect(printDigit("3", Style.Big, Script.Simplified)).to.equal("參");
    expect(printDigit("4", Style.Big, Script.Simplified)).to.equal("肆");
    expect(printDigit("5", Style.Big, Script.Simplified)).to.equal("伍");
    expect(printDigit("6", Style.Big, Script.Simplified)).to.equal("陆");
    expect(printDigit("7", Style.Big, Script.Simplified)).to.equal("柒");
    expect(printDigit("8", Style.Big, Script.Simplified)).to.equal("捌");
    expect(printDigit("9", Style.Big, Script.Simplified)).to.equal("玖");
    expect(printDigit("0", Style.Big, Script.Simplified)).to.equal("零");
  });

  it("return empty for unrecognizable character", () => {
    expect(printDigit("A")).to.equal("");
    expect(printDigit("")).to.equal("");
  });
});
