import express from 'express';
import transporter from '../Server/AutoMail.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get("/", (req, res) => {
    res.send("Server is working");
});

app.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;
    const destination = process.env.EMAIL_USER;
    const mailOptions = {
        to: destination,
        subject: `Message from ${name} <${email}>`, 
        html: message,
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
