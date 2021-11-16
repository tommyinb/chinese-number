import { expect } from "chai";
import { toArabic } from "../../src/to/toArabic";

describe("toArabic", () => {
  it("convert simple value correctly", () => {
    expect(toArabic(1)).to.eq("1");

    expect(toArabic(12345)).to.eq("12345");
    expect(toArabic(-12345)).to.eq("-12345");

    expect(toArabic(123.45)).to.eq("123.45");
    expect(toArabic(-123.45)).to.eq("-123.45");
  });

  it("convert big value correctly", () => {
    expect(toArabic(Number(123456789012345678n))).to.eq("123456789012345680");
    expect(toArabic(Number(-123456789012345678n))).to.eq("-123456789012345680");

    expect(toArabic(23_000_000_000 * 45_000_000_000)).to.eq(
      "1035000000000000000000"
    );
    expect(toArabic(-23_000_000_000 * 45_000_000_000)).to.eq(
      "-1035000000000000000000"
    );
  });

  it("convert small value correctly", () => {
    expect(toArabic(0.0000000000000000000001)).to.eq(
      "0.0000000000000000000001"
    );
    expect(toArabic(0.000000000000123456789012345678)).to.eq(
      "0.0000000000001234567890123457"
    );

    expect(toArabic(-0.0000000000000000000001)).to.eq(
      "-0.0000000000000000000001"
    );
    expect(toArabic(-0.000000000000123456789012345678)).to.eq(
      "-0.0000000000001234567890123457"
    );
  });
});
