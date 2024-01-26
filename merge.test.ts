import { merge } from "./merge";

describe("Merge function", () => {
  it("merge with sorted arrays", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("merge with same sorted arrays", () => {
    const collection_1 = [0, 5, 6];
    const collection_2 = [0, 5, 6];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual([0, 0, 5, 5, 6, 6]);
  });

  it("merge with different array lengths", () => {
    const collection_1 = [0, 5, 6, 7, 8];
    const collection_2 = [1, 2, 4];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual([0, 1, 2, 4, 5, 6, 7, 8]);
  });

  it("merge with duplicated number in list", () => {
    const collection_1 = [2, 6, 8, 9];
    const collection_2 = [0, 1, 4, 4, 4];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual([0, 1, 2, 4, 4, 4, 6, 8, 9]);
  });

  it("merge with arrays containing negative numbers", () => {
    const collection_1 = [-3, -1, 0];
    const collection_2 = [-2, -1, 1];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual([-3, -2, -1, -1, 0, 1]);
  });
});
