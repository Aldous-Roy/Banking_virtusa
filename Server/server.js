import express from 'express';
import transporter from '../Server/AutoMail.js';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import User from "./db.js"

dotenv.config();

const app = express();
const PORT = 8000;


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/login");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('MongoDB database connection established successfully');
});

// Create a new user
app.post('/create-user', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});
// find the user by email
app.get('/find-user/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error finding user', error });
    }
});


// Routes
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
