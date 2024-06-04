const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
