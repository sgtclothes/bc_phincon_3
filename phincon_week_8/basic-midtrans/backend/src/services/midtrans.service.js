const axios = require("axios");

const serverKey = process.env.MIDTRANS_SERVER_KEY;
const baseUrl = process.env.MIDTRANS_BASE_URL;
const snapUrl = process.env.MIDTRANS_SNAP_URL;

module.exports = {
    midtransCreateSnapTransaction: async (transactionDetails) => {
        try {
            const response = await axios.post(`${snapUrl}/transactions`, transactionDetails, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Basic ${Buffer.from(serverKey + ":").toString("base64")}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error(error.response.data.error_messages);
            throw new Error(error.response.data.error_messages || "Failed to create snap transaction");
        }
    },
};
