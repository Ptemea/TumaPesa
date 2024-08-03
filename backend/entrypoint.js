const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

const prisma = new PrismaClient(); 


app.post('/users', async (req, res) => {
    const { email, name } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
            },
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'User creation failed' });
    }
});


app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});