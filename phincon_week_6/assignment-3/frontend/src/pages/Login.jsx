/* eslint-disable react/prop-types */
import { useState } from "react";
import { login } from "../services/api";
import { jwtDecode } from "jwt-decode";

const Login = ({ setIsAuthenticated, loading, error, setLoading, setError, setUsername }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setLoading(true);
                const response = await login({ email, password });
                if (response.status === "success") {
                    const { username } = jwtDecode(response.data);
                    setIsAuthenticated(true);
                    localStorage.setItem("isAuthenticated", true);
                    localStorage.setItem("course-app-username", username);
                    setUsername(username);
                }
            } catch (error) {
                console.error(error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const validateForm = () => {
        if (!email) {
            alert("Email is required");
            return false;
        }
        if (!password) {
            alert("Password is required");
            return false;
        }
        return true;
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={loading}
                >
                    {loading ? "Signing In..." : "Sign In"}
                </button>
            </div>
        </form>
    );
};

export default Login;
