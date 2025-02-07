import { useEffect, useState } from "react";
import { useCounterStore } from "./stores/useCounterStore";
import { useProductStore } from "./stores/useProductStore";
import { ProductDTO } from "./types/product";

function App() {
    const { count, increment, decrement, clearCounter } = useCounterStore();
    const { products, getAllProducts, isLoading, mode, createProduct } = useProductStore();
    const [isFormCreateProductOpen, setIsFormCreateProductOpen] = useState(false);
    const [product, setProduct] = useState<ProductDTO>({
        id: "",
        name: "",
        price: 0,
        category: "",
        stock: 0,
    });

    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);

    const handleSubmitProduct = async () => {
        try {
            if (mode === "create") {
                await createProduct(product);
            } else if (mode === "update") {
                // await updateProduct(product.id, product);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsFormCreateProductOpen(false);
        }
    };

    if (isLoading) {
      return <p>Loading...</p>;
  }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={clearCounter}>Clear</button>

            <h2>Products</h2>
            <button
                onClick={() => {
                    setIsFormCreateProductOpen(!isFormCreateProductOpen);
                }}
            >
                Create
            </button>
            {isFormCreateProductOpen && (
                <form onSubmit={handleSubmitProduct}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={(e) => {
                                setProduct({ ...product, name: e.target.value });
                            }}
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => {
                                setProduct({ ...product, price: Number(e.target.value) });
                            }}
                            placeholder="Price"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={(e) => {
                                setProduct({ ...product, stock: Number(e.target.value) });
                            }}
                            placeholder="Stock"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="category"
                            value={product.category}
                            onChange={(e) => {
                                setProduct({ ...product, category: e.target.value });
                            }}
                            placeholder="Category"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
