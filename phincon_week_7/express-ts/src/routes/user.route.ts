import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    res.send(`User ID: ${id}`);
});

export default router;
