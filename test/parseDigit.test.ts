import { expect } from "chai";
import { parseDigit } from "../src/parseDigit";

describe("parseDigit", () => {
  it("parse single digit correctly", () => {
    expect(parseDigit("一")).to.equal(1);
    expect(parseDigit("二")).to.equal(2);
    expect(parseDigit("三")).to.equal(3);
    expect(parseDigit("四")).to.equal(4);
    expect(parseDigit("五")).to.equal(5);
    expect(parseDigit("六")).to.equal(6);
    expect(parseDigit("七")).to.equal(7);
    expect(parseDigit("八")).to.equal(8);
    expect(parseDigit("九")).to.equal(9);
    expect(parseDigit("零")).to.equal(0);
  });

  it("parse multiple digits correctly", () => {
    expect(parseDigit("一二三")).to.equal(123);
    expect(parseDigit("八三一")).to.equal(831);
  });
});
