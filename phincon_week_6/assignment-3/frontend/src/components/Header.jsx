/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Header = ({ isAuthenticated, username, handleLogout }) => {
    const navigate = useNavigate();
    return (
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl font-bold">EduTech</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#features" className="hover:underline">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:underline">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                        {isAuthenticated ? (
                            <>
                                <li>{username}</li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <button
                                        onClick={() => {
                                            navigate("/register");
                                        }}
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        Register
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            navigate("/login");
                                        }}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        Login
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
