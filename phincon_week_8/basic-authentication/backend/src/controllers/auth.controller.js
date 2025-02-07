import db from "../models/index.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const register = async (req, res) => {
    try {
        console.log(req.body);
        /** Check if user available or not **/
        const user = await db.User.findOne({ where: { email: req.body.email } });
        if (user) {
            return res.status(400).json({ status: "failed", message: "Can't process registration" });
        }
        /** End of Check if user available or not **/

        /** Create token for email verification **/
        const token = jwt.sign(
            {
                email: req.body.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        /** End of Create token for email verification **/

        /** Send email to user **/
        const transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_APP_PASSWORD,
            },
        });
        const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../templates/emailVerification.hbs"), "utf8");
        const template = handlebars.compile(emailTemplateSource);
        const htmlToSend = template({
            logoUrl: `https://media.licdn.com/dms/image/v2/D560BAQG99Xf8yTVZAw/company-logo_200_200/company-logo_200_200/0/1702864298171?e=2147483647&v=beta&t=vlV9cqla3qLOcRU7NetWjY3dL39FConfn5WO9uQwgxU`,
            name: req.body.name,
            verificationLink: `http://localhost:8080/auth/verify-email?token=${token}`,
        });
        const mailOptions = {
            from: "admin@phinconacademy.com",
            to: req.body.email,
            subject: "Phincon Academy Email Verification",
            html: htmlToSend,
        };
        await transporter.sendMail(mailOptions);
        /** End of Send email to user **/
        /** Register user **/
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await db.User.create(req.body);
        /** End of Register user **/
        return res.status(200).json({ status: "success", message: "Successfully register user!" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            return res
                .status(400)
                .json({ status: "failed", message: "Invalid username or password or user activation" });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword || !user.isActive) {
            return res
                .status(400)
                .json({ status: "failed", message: "Invalid username or password or user activation" });
        }
        return res.status(200).json({ status: "success", message: "Login successful" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
};

export const verifyEmail = async (req, res) => {
    const { token } = req.query;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { email } = decoded;
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ status: "failed", message: "Email verification failed" });
        }
        user.isActive = true;
        await user.save();
        return res.status(200).json({ status: "success", message: "Email verification successful" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
};

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ status: "failed", message: "Forget password failed" });
        }
        const token = jwt.sign(
            {
                email: req.body.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        const transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_APP_PASSWORD,
            },
        });
        const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../templates/forgotPassword.hbs"), "utf8");
        const template = handlebars.compile(emailTemplateSource);
        const htmlToSend = template({
            logoUrl: `https://media.licdn.com/dms/image/v2/D560BAQG99Xf8yTVZAw/company-logo_200_200/company-logo_200_200/0/1702864298171?e=2147483647&v=beta&t=vlV9cqla3qLOcRU7NetWjY3dL39FConfn5WO9uQwgxU`,
            name: req.body.name,
            verificationLink: `http://localhost:5173/reset-password?token=${token}`,
        });
        const mailOptions = {
            from: "admin@phinconacademy.com",
            to: req.body.email,
            subject: "Phincon Academy Reset Password",
            html: htmlToSend,
        };
        await transporter.sendMail(mailOptions);
        return res
            .status(200)
            .json({
                status: "success",
                message: "Reset Password request send to email, please check yout email inbox",
            });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
};

export const resetPassword = async (req, res) => {
    const { password, token } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { email } = decoded;
        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ status: "failed", message: "Reset password failed" });
        }
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        return res.status(200).json({ status: "success", message: "Reset password successful" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
    }
};