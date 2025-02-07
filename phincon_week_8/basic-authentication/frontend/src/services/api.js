const API_URL = "http://localhost:8080";

export const login = async (data) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        if (json.status === "failed") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};

export const register = async (data) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        if (json.status === "failed") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};

export const forgotPassword = async (data) => {
    try {
        const response = await fetch(`${API_URL}/auth/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        if (json.status === "failed") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};

export const resetPassword = async (data) => {
    try {
        const response = await fetch(`${API_URL}/auth/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json();
        if (json.status === "failed") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};
