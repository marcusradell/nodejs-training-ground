import assert from "assert";
import { getAge } from "./index.mjs";

describe("age calculator", () => {
  it("someone born 1972 is 50 2022", () => {
    const result = getAge(1972, 2022);
    assert.equal(result, 50);
  });

  it("someone born 2021 is 1 2022", () => {
    const result = getAge(2021, 2022);
    assert.equal(result, 1);
  });
});
