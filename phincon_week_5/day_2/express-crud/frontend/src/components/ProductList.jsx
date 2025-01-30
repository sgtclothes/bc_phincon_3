/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import DataTable from "react-data-table-component";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import { deleteProduct, getAllProducts } from "../services/api";
import { useNavigate, Navigate } from "react-router-dom";

export default function ProductList({ setMode, setModalIsOpen, products, loading, error, setData, setProducts }) {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();
    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1,
            sortable: false,
            style: {
                minWidth: "50px",
            },
        },
        {
            name: "Name",
            cell: (row) => (
                <b
                    onClick={() => {
                        navigate(`/products/${row.id}`);
                    }}
                >
                    {row.name}
                </b>
            ),
            sortable: true,
            style: {
                minWidth: "150px",
            },
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true,
            style: {
                minWidth: "150px",
            },
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true,
            style: {
                minWidth: "150px",
            },
        },
        {
            name: "Stock",
            selector: (row) => row.stock,
            sortable: true,
            style: {
                minWidth: "100px",
            },
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="flex space-x-2 items-center">
                    <button
                        className="bg-yellow-500 w-20 h-5 hover:bg-yellow-700 text-white font-bold rounded"
                        onClick={() => {
                            setMode("update");
                            setModalIsOpen(true);
                            console.log("Edit", row);
                            setData(row);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 w-20 h-5 text-white font-bold rounded"
                        onClick={async () => {
                            const response = await deleteProduct(row.id);
                            if (response.success) {
                                const products = await getAllProducts();
                                setProducts(products);
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            style: {
                minWidth: "200px",
            },
        },
    ];

    if (loading) return <Loading />;
    if (error) return <ErrorPage error={error.message} />;

    return (
        <motion.div animate={{ opacity: isVisible ? 1 : 0 }} className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <div className="flex justify-between my-4">
                    <button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            setMode("create");
                            setModalIsOpen(true);
                            setData({
                                id: "",
                                name: "",
                                price: "",
                                stock: "",
                                category: "",
                            });
                        }}
                    >
                        + Create Product
                    </button>
                </div>
                <DataTable
                    columns={columns}
                    data={products}
                    className="table"
                    pagination
                    striped
                    highlightOnHover
                    pointerOnHover
                    responsive
                />
            </div>
        </motion.div>
    );
}
