const { midtransCreateSnapTransaction } = require("../services/midtrans.service");

module.exports = {
    createSnapTransaction: async (req, res) => {
        try {
            const transactionDetails = req.body;
            const snapTransaction = await midtransCreateSnapTransaction(transactionDetails);
            res.status(200).json({
                status: "success",
                data: snapTransaction,
                message: "Snap transaction created successfully",
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({
                error: error.message,
                status: "failed",
                message: "Failed to create snap transaction",
            });
        }
    },
};
