import express from "express";
import config from "./config";
import morgan from "morgan";

import authRoutes from "./routes/auth";
import indexRoutes from "./routes/index";
import tasksRoutes from "./routes/tasks";
import cors from 'cors';

const app = express();

app.use(cors()) // Use this after the variable declaration
app.set("port", config.port);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers','x-access-token , X-Requested-With, Content-Type, Accept');
    next();
});
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(indexRoutes);
app.use(authRoutes);
app.use(tasksRoutes);

export default app;
