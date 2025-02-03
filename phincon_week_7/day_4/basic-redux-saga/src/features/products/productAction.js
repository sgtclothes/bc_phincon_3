const API_URL = "http://localhost:8080";

export const getAllProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/api/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};
