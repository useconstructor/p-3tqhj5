import { db } from "@/lib/db";

export async function GET() {
  await db.execute(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    party_size INTEGER DEFAULT 1,
    special_requests TEXT,
    status TEXT DEFAULT 'pending',
    created_at TEXT DEFAULT (datetime('now'))
  )`);

  const { rows } = await db.execute("SELECT * FROM reservations ORDER BY date DESC, time DESC");
  return Response.json(rows);
}

export async function POST(req: Request) {
  await db.execute(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    party_size INTEGER DEFAULT 1,
    special_requests TEXT,
    status TEXT DEFAULT 'pending',
    created_at TEXT DEFAULT (datetime('now'))
  )`);

  const body = await req.json();
  await db.execute({
    sql: "INSERT INTO reservations (name, email, date, time, party_size, special_requests) VALUES (?, ?, ?, ?, ?, ?)",
    args: [body.name, body.email, body.date, body.time, body.party_size ?? 1, body.special_requests ?? null],
  });
  return Response.json({ ok: true });
}
