import { ProductDTO } from "../../types/product";

const API_URL = "http://localhost:8080";

export const productServiceAPI = {
    getAllProducts: async () => {
        const response = await fetch(`${API_URL}/api/products`);
        const data = await response.json();
        return data;
    },
    createProduct: async (product: ProductDTO) => {
        const response = await fetch(`${API_URL}/api/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        return data;
    },
};
