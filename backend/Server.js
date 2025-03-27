const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const axios = require("axios");

app.use(bodyParser.json());
app.use(cors());

const Student = require('./models/student');
const Faculty = require('./models/Faculty');

mongoose.connect("mongodb+srv://vithyflims:5d2rsQAxqHljuJfG@vcet-code.b6avj.mongodb.net/?retryWrites=true&w=majority&appName=vcet-code")
    .then(() => console.log("Connected to DB"))
    .catch(err => console.error("DB Connection Error:", err));

app.get('/', (req, res) => {
    res.send("Server is running on port 5000");
});

app.post('/api/student/login', async (req, res) => {
    const { registernumber, password } = req.body;
  
    try {
      console.log("Received login request:", req.body);
  
      const student = await Student.findOne({ registernumber });
      if (!student) {
        return res.status(400).json({ message: 'Student not found' });
      }
  
      if (student.password !== password) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
            res.json({ message: 'Login successful', userName: student.name });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
app.post('/studentregister', async (req, res) => {
    const { name, registernumber, password } = req.body;

    try {
        const newStudent = new Student({ name, registernumber, password });
        await newStudent.save();

        res.status(201).json({ message: "Student registered successfully!", student: newStudent });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});
app.post("/run", async (req, res) => {
  const { code, language } = req.body;

  try {
      const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
          language: language,
          version: "*",
          files: [{ content: code }]
      });

      res.json({ output: response.data.run.stdout, error: response.data.run.stderr });
  } catch (error) {
      res.status(500).json({ error: "Execution failed" });
  }
});
app.post("/facultylogin", async (req, res) => {
  const { staffid, password } = req.body;

  try {
    console.log("Login Request Received:", req.body);

    const faculty = await Faculty.findOne({ staffid });
    if (!faculty) {
      console.log("Staff ID not found in DB");
      return res.status(400).json({ message: "Invalid staff ID" });
    }

    console.log("DB Password:", faculty.password);
    console.log("Entered Password:", password);

    if (faculty.password !== password) {
      console.log("Password Mismatch!");
      return res.status(400).json({ message: "Invalid password" });
    }

    console.log("Login Successful!");
    res.json({ message: "Login successful", facultyName: faculty.name });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));