const express = require("express");
const session = require("express-session");
const svgCaptcha = require("svg-captcha");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(
    session({
        secret: "secret-key", // Ganti dengan secret yang lebih aman
        resave: false,
        saveUninitialized: false, // Pastikan session tidak dibuat kosong
    })
);

app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("Session Middleware Check:", req.session);
    next();
});
// Endpoint untuk generate captcha
app.get("/captcha", (req, res) => {
    const captcha = svgCaptcha.create({
        size: 6,
        noise: 2,
        color: true,
        background: "#f3f3f3",
    });

    req.session.captcha = captcha.text; // Simpan captcha ke session
    console.log("Generated Captcha:", req.session.captcha);

    res.type("svg");
    res.status(200).send(captcha.data);
});

// Endpoint untuk verifikasi captcha
app.post("/verify-captcha", (req, res) => {
    const { captchaInput } = req.body;
    console.log("Stored Captcha:", req.session.captcha);
    console.log("User Input:", captchaInput);

    if (!req.session.captcha) {
        return res.json({ success: false, message: "Captcha tidak ditemukan. Silakan refresh captcha." });
    }

    if (captchaInput.toLowerCase() === req.session.captcha.toLowerCase()) {
        req.session.captcha = null; // Reset captcha setelah verifikasi berhasil
        res.json({ success: true, message: "Captcha benar!" });
    } else {
        res.json({ success: false, message: "Captcha salah!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
