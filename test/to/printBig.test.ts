import { expect } from "chai";
import { printBig } from "../../src/to/printBig";
import { Script } from "../../src/to/script";
import { Style } from "../../src/to/style";

describe("printBig", () => {
  it("print simple correctly", () => {
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

  it("print big correctly", () => {
    expect(
      printBig("15000000000000000", Style.Small, Script.Traditional)
    ).to.equal("一京五千兆");
    expect(
      printBig("150000000000000000000", Style.Small, Script.Traditional)
    ).to.equal("一垓五千京");

    expect(
      printBig("123456780000000000000000", Style.Small, Script.Traditional)
    ).to.equal("一千二百三十四垓五千六百七十八京");
  });

  it("print variants correctly", () => {
    expect(printBig("150000000", Style.Small, Script.Traditional)).to.equal(
      "一億五千萬"
    );

    expect(printBig("150000000", Style.Big, Script.Traditional)).to.equal(
      "壹億伍仟萬"
    );

    expect(printBig("150000000", Style.Small, Script.Simplified)).to.equal(
      "一亿五千万"
    );

    expect(printBig("150000000", Style.Big, Script.Simplified)).to.equal(
      "壹亿伍仟万"
    );
  });
});
