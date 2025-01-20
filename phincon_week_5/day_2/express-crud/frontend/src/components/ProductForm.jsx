/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import Modal from "react-modal";
import { createProduct, getAllProducts, updateProduct } from "../services/api";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
    },
};

Modal.setAppElement("#root");

export default function ProductForm({ mode, modalIsOpen, setModalIsOpen, setProducts, data, setData }) {
    function closeModal() {
        setModalIsOpen(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let response;
        if (data.name === "" || data.price === "" || data.stock === "" || data.category === "") {
            toast.error("Please fill all the fields");
            return;
        }
        const product = { name: data.name, price: data.price, stock: data.stock, category: data.category };
        if (mode === "create") {
            response = await createProduct(product);
        } else if (mode === "update") {
            response = await updateProduct(data.id, product);
        }
        if (response.success) {
            const products = await getAllProducts();
            setProducts(products);
            toast.success(response.message);
        }
        setModalIsOpen(false);
    }
    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h1 className="text-xl font-bold">{mode === "create" ? "Create" : "Update"} Product</h1>
                    <button
                        onClick={closeModal}
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            borderRadius: "2px",
                        }}
                    >
                        &times;
                    </button>
                </div>
                <form className="space-y-4 mt-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="mt-1 p-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={data.price}
                            onChange={(e) => setData({ ...data, price: e.target.value })}
                            className="mt-1 block w-full p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter product price"
                        />
                    </div>
                    <div>
                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                            Stock
                        </label>
                        <input
                            type="number"
                            id="stock"
                            value={data.stock}
                            onChange={(e) => setData({ ...data, stock: e.target.value })}
                            className="mt-1 block w-full p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter product stock"
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            id="category"
                            className="mt-1 block w-full p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            value={data.category}
                            onChange={(e) => setData({ ...data, category: e.target.value })}
                        >
                            <option value="">Select category</option>
                            <option value="dekorasi">Dekorasi</option>
                            <option value="elektronik">Elektronik</option>
                            <option value="perlengkapan">Perlengkapan</option>
                        </select>
                    </div>
                    <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
    );
}
