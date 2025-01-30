import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { logout } from "./services/api";
import CourseDetail from "./pages/CourseDetail";
import Header from "./components/Header";

function App() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("isAuthenticated")) {
            setIsAuthenticated(true);
            setUsername(localStorage.getItem("course-app-username"));
        }
    }, []);

    const handleLogout = async () => {
        await logout();
        localStorage.clear();
        setUsername(null);
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <>
            <Header isAuthenticated={isAuthenticated} username={username} handleLogout={handleLogout} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <LandingPage
                            isAuthenticated={isAuthenticated}
                            username={username}
                            handleLogout={handleLogout}
                            loading={loading}
                            error={error}
                            setLoading={setLoading}
                            setError={setError}
                        />
                    }
                />
                {!isAuthenticated ? (
                    <Route
                        path="/login"
                        element={
                            <Login
                                setIsAuthenticated={setIsAuthenticated}
                                loading={loading}
                                error={error}
                                setLoading={setLoading}
                                setError={setError}
                                setUsername={setUsername}
                            />
                        }
                    />
                ) : (
                    <Route path="/login" element={<Navigate to="/" />} />
                )}
                {!isAuthenticated ? (
                    <Route path="/register" element={<Register />} />
                ) : (
                    <Route path="/register" element={<Navigate to="/" />} />
                )}
                <Route
                    path="course-detail/:id"
                    element={
                        <CourseDetail isAuthenticated={isAuthenticated} loading={loading} error={error} setLoading={setLoading} setError={setError} />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
