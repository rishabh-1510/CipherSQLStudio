import express from 'express'
import pkg from 'pg'
import cors from 'cors'
import dotenv from "dotenv";
import assignmentRoutes from './Routes/assignment.routes.js';
import sampleRoutes from "./Routes/sample.routes.js";
import hintRoutes from "./Routes/hint.routes.js";


dotenv.config()

const { Pool } = pkg;

const app = express()
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.POSTGRES_URI
});
app.post("/execute-query", async (req, res) => {

    const { query } = req.body;

    try {
        const result = await pool.query(query);
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

});
app.use("/api", assignmentRoutes);
app.use("/api", sampleRoutes);
app.use("/api", hintRoutes);
app.listen(5000, () => {
    console.log("Server running on port 5000");
});