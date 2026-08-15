import { Router } from 'express';
import express from 'express';
import lessonRoute from "./routes/lessonRoute"
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my API homepage' });
});

app.use('/api/lessons', lessonRoute)

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
