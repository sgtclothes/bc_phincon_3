export const login = async (data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
        });
        const json = await response.json();
        if (json.status === "error") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};

export const logout = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
            method: "POST",
            credentials: "include",
        });
        const json = await response.json();
        if (json.status === "error") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};

export const getAllCourses = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/courses`);
        const json = await response.json();
        if (json.status === "error") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

export const getCourseById = async (id) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/courses/${id}`);
        const json = await response.json();
        if (json.status === "error") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};

export const registerCourse = async (data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users-courses/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
        });
        const json = await response.json();
        if (json.status === "error") {
            throw new Error(json.message);
        }
        return json;
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
};
