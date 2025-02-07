const { calculator } = require("../src/math");

describe("Math functions", () => {
    test("add() should return the sum of two numbers", () => {
        expect(calculator("add", 2, 3)).toBe(5);
    });
    test("subtract() should return the difference of two numbers", () => {
        expect(calculator("subtract", 5, 3)).toBe(2);
    });
    test("multiply() should return the product of two numbers", () => {
        expect(calculator("multiply", 2, 3)).toBe(6);
    });
    test("divide() should return the quotient of two numbers", () => {
        expect(calculator("divide", 10, 2)).toBe(5);
    });
    test("should return undefined if math is invalid", () => {
        expect(calculator("", 2, 3)).toBe(5);
    });
});

describe("Async Function", () => {
    it("Should return 'hello world'", () => {
        const dummyFunction = jest.fn(() => "hello world");
        expect(dummyFunction()).toBe("hello world");
    });
    test("Should return 'data' when resolved, mock simulation", async () => {
        const mockFunction = jest.fn(() => Promise.resolve("data"));
        const data = await mockFunction();
        expect(data).toBe("data");
    });
});
