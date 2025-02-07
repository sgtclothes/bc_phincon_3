module.exports = {
    calculator: (math, a, b) => {
        if (math === "subtract") {
            return a - b;
        } else if (math === "multiply") {
            return a * b;
        } else if (math === "divide") {
            return a / b;
        }
        return a + b;
    },
};
