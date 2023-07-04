import { merge } from '../merge';

describe("Merge function", () => {
    it("should return a merged array of sorted array", () => {
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = merge([1, 3 ,5, 7, 9],[2, 4, 6, 8, 10]);
        expect(result).toEqual(expectedResult);
    });
})

