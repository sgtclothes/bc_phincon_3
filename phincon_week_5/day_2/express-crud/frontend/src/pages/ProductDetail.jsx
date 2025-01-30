import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const product = await getProductById(id);
            setProduct(product);
        })();
    }, []);

    return (
        <div className="max-w-md mx-auto mt-10">
            Ini halaman product detail
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg font-bold">Rp {product.price}</p>
            <p className="text-lg">Stock: {product.stock}</p>
            <p className="text-lg">Category: {product.category}</p>
        </div>
    );
}
