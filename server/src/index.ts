import express from 'express';
import authRoutes from './routes/auth';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


mongoose
    .connect(
        process.env.MONGO_URI as string)
    .then(() => {
        console.log('Connected to mongo db');

        const app = express();
        app.use(express.json());
        app.use('/auth', authRoutes);

        app.listen(8080, () => {

            console.log(`Now listening to port 8080`);
        });
    })
    .catch((error) => {
        console.log({error})
        throw new Error(error);
    })
