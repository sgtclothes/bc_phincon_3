const API_URL = import.meta.env.VITE_API_URL;

export const getAllProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) throw new Error("Failed to fetch products");
        const json = await response.json();
        return json?.data?.products;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

export const createProduct = async (product) => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) throw new Error("Failed to create product");
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

export const updateProduct = async (id, product) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) throw new Error("Failed to update product");
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete product");
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};
