import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

test("should render Button correctly", () => {
    const tree = renderer.create(<Button label="Click Me" />).toJSON();
    expect(tree).toMatchSnapshot();
});

const request = require("supertest");
const app = require("../app"); // Import aplikasi Express

test("GET /users harus mengembalikan status 200", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
});
