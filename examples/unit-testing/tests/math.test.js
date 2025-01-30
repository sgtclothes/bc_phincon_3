const axios = require("axios");
jest.mock("axios");

test("Menggunakan mock untuk mempercepat pengujian API", async () => {
    axios.get.mockResolvedValue({ data: { user: "John Doe" } });
    const response = await axios.get("https://api.example.com/user");
    expect(response.data).toEqual({ user: "John Doe" });
});
