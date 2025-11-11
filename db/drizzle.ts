import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

if (!process.env.NEON_DATABASE_URL) {
  throw new Error("Missing NEON_DATABASE_URL environment variable");
}

console.log("DB URL:", process.env.NEON_DATABASE_URL);

const sql = neon(process.env.NEON_DATABASE_URL!);
const db = drizzle(sql);

export default db;