import { useState } from "react";
import InputEmail from "../components/inputs/InputEmail";
import InputPassword from "../components/inputs/InputPassword";
import SubmitButton from "../components/buttons/SubmitButton";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/products");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <InputEmail email={email} setEmail={setEmail} />
                <InputPassword password={password} setPassword={setPassword} />
                <SubmitButton error={error} />
            </form>
        </div>
    );
}
