/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { ProductStore, ProductDTO } from "../types/product";
import { productServiceAPI } from "../services/api/product.api";

export const useProductStore = create<ProductStore>((set, get) => ({
    products: [],
    mode: "create",
    isLoading: false,
    status: null,
    message: null,
    error: null,
    getAllProducts: async () => {
        set({ isLoading: true });
        try {
            const response = await productServiceAPI.getAllProducts();
            set({ products: response.data });
        } catch (err: any) {
            console.error("Error fetching products:", err);
            set({ error: err.message });
        } finally {
            set({ isLoading: false });
        }
    },
    createProduct: async (product: ProductDTO) => {
        set({ isLoading: true });
        try {
            const response = await productServiceAPI.createProduct(product);
            set({ status: response.status, message: response.message });
            await get().getAllProducts();
        } catch (err: any) {
            console.error(err);
            set({ error: err.message });
        } finally {
            set({ isLoading: false });
        }
    },
    updateProduct: (id: string, product: ProductDTO) => {},
    deleteProduct: (id: string) => {},
}));
