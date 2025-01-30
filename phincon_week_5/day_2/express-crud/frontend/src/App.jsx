import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { useEffect, useState } from "react";
import { getAllProducts } from "./services/api";
import TodoApp from "./pages/TodoApp";
import TopNavigationBar from "./components/TopNavigationBar";
import ProductDetail from "./pages/ProductDetail";

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [data, setData] = useState({
        id: "",
        name: "",
        price: "",
        stock: "",
        category: "",
    });
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [mode, setMode] = useState("create");

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             setLoading(true);
    //             const productData = await getAllProducts();
    //             setProducts(productData);
    //         } catch (error) {
    //             console.error(error);
    //             toast.error(error.message);
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     })();
    // }, []);

    return (
        <Router>
            <TopNavigationBar />
            <Routes>
                <Route path="/todo" element={<TodoApp />} />
                <Route
                    path="/products"
                    element={
                        <ProductList
                            setData={setData}
                            setModalIsOpen={setModalIsOpen}
                            products={products}
                            loading={loading}
                            error={error}
                            setMode={setMode}
                            setProducts={setProducts}
                        />
                    }
                />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
            <ProductForm
                mode={mode}
                setData={setData}
                data={data}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                setProducts={setProducts}
            />
            <Toaster position="top-right" />
        </Router>
    );
}

export default App;
