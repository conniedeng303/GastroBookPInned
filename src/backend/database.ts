import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

export async function connectDB() {
    try {
        const pool = new Pool({
            user: process.env.PGUSER,
            password: process.env.PGPWD,
            host: process.env.PGHOST,
            database: process.env.PGDB,
            port: Number(process.env.PGPORT),
        });
        await pool.connect();
        const res = await pool.query('SELECT * FROM some_table');
        console.log(res);
        await pool.end();
    } catch (error) {
        console.log(error);
    }
}