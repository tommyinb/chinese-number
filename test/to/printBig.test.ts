import { expect } from "chai";
import { printBig } from "../../src/to/printBig";

describe("printBig", () => {
  it("print correctly", () => {
    expect(printBig("1234")).to.equal("一千二百三十四");

    expect(printBig("21234")).to.equal("二萬一千二百三十四");
    expect(printBig("21230")).to.equal("二萬一千二百三十");
    expect(printBig("21200")).to.equal("二萬一千二百");
    expect(printBig("21000")).to.equal("二萬一千");
    expect(printBig("20000")).to.equal("二萬");

    expect(printBig("54321000")).to.equal("五千四百三十二萬一千");
    expect(printBig("4321000")).to.equal("四百三十二萬一千");
    expect(printBig("321000")).to.equal("三十二萬一千");

    expect(printBig("543200001000")).to.equal("五千四百三十二億零一千");
    expect(printBig("43200001000")).to.equal("四百三十二億零一千");
    expect(printBig("3200001000")).to.equal("三十二億零一千");

    expect(printBig("20200")).to.equal("二萬零二百");
    expect(printBig("2000000000200")).to.equal("二兆零二百");
    expect(printBig("2000000020000")).to.equal("二兆零二萬");
    expect(printBig("2000200020000")).to.equal("二兆零二億零二萬");

    expect(printBig("1002300450607800")).to.equal(
      "一千零二兆三千零四億五千零六十萬七千八百"
    );

    expect(printBig("0")).to.equal("零");
  });
});
