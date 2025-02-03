export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}

export type ProductDTO = Omit<Product, "createdAt" | "updatedAt">;

export interface ProductStore {
    products: Product[];
    mode: string;
    isLoading: boolean;
    status: string | null;
    message: string | null;
    error: string | null;
    getAllProducts: () => Promise<void>;
    createProduct: (product: ProductDTO) => Promise<void>;
    updateProduct: (id: string, product: ProductDTO) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
}
