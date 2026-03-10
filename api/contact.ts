import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req: any, res: any) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    const { name, email, message } = req.body;

    await pool.query(
      "INSERT INTO contact_messages(name,email,message) VALUES ($1,$2,$3)",
      [name, email, message]
    );

    res.status(201).json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Database error",
    });

  }

}