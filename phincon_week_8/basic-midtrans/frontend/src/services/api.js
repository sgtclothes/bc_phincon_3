const API_URL="http://localhost:8080";

export const createSnapTransaction = async (transactionDetails) => {
    try {
        const response = await fetch(`${API_URL}/payment/snap-transaction`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(transactionDetails),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create snap transaction");
    }
};
