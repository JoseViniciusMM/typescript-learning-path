import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const dbPromise = open({
    filename: "database.sqlite",
    driver: sqlite3.Database
});

export async function initDB() {
    const db = await dbPromise;

    await db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL 
        );
    `);
    
}