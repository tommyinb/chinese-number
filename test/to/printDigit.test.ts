import { expect } from "chai";
import { printDigit } from "../../src/to/printDigit";

describe("printDigit", () => {
  it("print correctly", () => {
    expect(printDigit("1")).to.equal("一");
    expect(printDigit("2")).to.equal("二");
    expect(printDigit("3")).to.equal("三");
    expect(printDigit("4")).to.equal("四");
    expect(printDigit("5")).to.equal("五");
    expect(printDigit("6")).to.equal("六");
    expect(printDigit("7")).to.equal("七");
    expect(printDigit("8")).to.equal("八");
    expect(printDigit("9")).to.equal("九");
    expect(printDigit("0")).to.equal("零");
  });

  it("return empty for unrecognizable character", () => {
    expect(printDigit("A")).to.equal("");
    expect(printDigit("")).to.equal("");
  });
});
