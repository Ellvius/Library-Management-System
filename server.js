import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {bookRoutes} from "./routes/bookRoutes.js";
import {authRoutes} from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
