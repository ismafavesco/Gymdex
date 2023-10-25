require('dotenv').config({ path: __dirname + '/.env' });


const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();

const corsOptions = {
    origin: function (origin, callback) {
        const whitelist = [
            'http://localhost:3000',  // Allow localhost during development
            'https://github.com/ismafavesco/gymdex'  // Replace with your actual deployed frontend URL
        ];
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};


app.use(cors(corsOptions));
app.use(express.json());

// Sample route to fetch all exercises (modify as per your data model)
app.get('/exercises', async (req, res) => {
    try {
        const exercises = await prisma.exercise.findMany();
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching exercises." });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const fetch = require('node-fetch');

// Route for exercisedb API
app.get('/api/exercisedb', async (req, res) => {
    const apiUrl = 'YOUR_EXERCISEDB_API_ENDPOINT'; // Replace with your endpoint
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.RAPID_API_KEY,
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
    });
    const data = await response.json();
    res.json(data);
});

// Route for YouTube search API
app.get('/api/youtube-search', async (req, res) => {
    const apiUrl = 'YOUR_YOUTUBE_API_ENDPOINT'; // Replace with your endpoint
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.YOUTUBE_API_KEY,
            "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        },
    });
    const data = await response.json();
    res.json(data);
});
