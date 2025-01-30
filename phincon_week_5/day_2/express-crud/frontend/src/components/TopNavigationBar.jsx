import { Link } from "react-router-dom";

export default function TopNavigationBar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">BrandName</Link>
                </div>
                <div>
                    <Link to="/products" className="text-gray-300 hover:text-white mx-2">
                        Products
                    </Link>
                    <Link to="/login" className="text-gray-300 hover:text-white mx-2">
                        Login
                    </Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white mx-2">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
