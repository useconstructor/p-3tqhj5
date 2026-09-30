import { db } from "@/lib/db";

export async function GET() {
  await db.execute(`CREATE TABLE IF NOT EXISTS beans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    region TEXT,
    roast_level TEXT,
    tasting_notes TEXT,
    price REAL,
    weight TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )`);

  const { rows } = await db.execute("SELECT * FROM beans ORDER BY created_at DESC");

  if (rows.length === 0) {
    const defaultBeans = [
      { name: "Finca La Esperanza", region: "Huila", roast_level: "medium", tasting_notes: "Chocolate, cherry", price: 16.00, weight: "250g" },
      { name: "Geisha Varietal", region: "Geisha Cooperative", roast_level: "light", tasting_notes: "Floral, citrus", price: 24.00, weight: "250g" },
      { name: "Robusta Blend", region: "Río Magdalena", roast_level: "dark", tasting_notes: "Bold, earthy, espresso forward", price: 18.00, weight: "1kg" },
    ];

    for (const bean of defaultBeans) {
      await db.execute({
        sql: "INSERT INTO beans (name, region, roast_level, tasting_notes, price, weight) VALUES (?, ?, ?, ?, ?, ?)",
        args: [bean.name, bean.region, bean.roast_level, bean.tasting_notes, bean.price, bean.weight],
      });
    }

    const { rows: newRows } = await db.execute("SELECT * FROM beans ORDER BY created_at DESC");
    return Response.json(newRows);
  }

  return Response.json(rows);
}

export async function POST(req: Request) {
  const body = await req.json();
  await db.execute({
    sql: "INSERT INTO beans (name, region, roast_level, tasting_notes, price, weight) VALUES (?, ?, ?, ?, ?, ?)",
    args: [body.name, body.region ?? null, body.roast_level ?? null, body.tasting_notes ?? null, body.price ?? null, body.weight ?? null],
  });
  return Response.json({ ok: true });
}
