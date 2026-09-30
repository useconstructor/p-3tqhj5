import { db } from "@/lib/db";

export async function GET() {
  await db.execute(`CREATE TABLE IF NOT EXISTS menu_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL,
    volume TEXT,
    category TEXT DEFAULT 'drinks',
    created_at TEXT DEFAULT (datetime('now'))
  )`);

  const { rows } = await db.execute("SELECT * FROM menu_items ORDER BY category, name");

  if (rows.length === 0) {
    const defaultItems = [
      { name: "Café Negro", description: "Double espresso, rich crema", price: 4.00, volume: "4oz", category: "espresso" },
      { name: "Cortado Tostado", description: "Espresso + warm milk, balanced", price: 5.00, volume: "8oz", category: "espresso" },
      { name: "Filtro de Especialidad", description: "Pour over, highlighting bean origin", price: 6.00, volume: "12oz", category: "filter" },
      { name: "Oat Milk Cappuccino", description: "Espresso + steamed oat milk, vegan", price: 6.50, volume: "10oz", category: "espresso" },
      { name: "Cascara Tea", description: "Cold brew + coffee cherry extract, refreshing", price: 5.50, volume: "12oz", category: "cold" },
      { name: "Affogato Clásico", description: "Vanilla gelato + hot espresso, dessert", price: 7.00, volume: "6oz", category: "dessert" },
    ];

    for (const item of defaultItems) {
      await db.execute({
        sql: "INSERT INTO menu_items (name, description, price, volume, category) VALUES (?, ?, ?, ?, ?)",
        args: [item.name, item.description, item.price, item.volume, item.category],
      });
    }

    const { rows: newRows } = await db.execute("SELECT * FROM menu_items ORDER BY category, name");
    return Response.json(newRows);
  }

  return Response.json(rows);
}

export async function POST(req: Request) {
  const body = await req.json();
  await db.execute({
    sql: "INSERT INTO menu_items (name, description, price, volume, category) VALUES (?, ?, ?, ?, ?)",
    args: [body.name, body.description ?? null, body.price ?? null, body.volume ?? null, body.category ?? "drinks"],
  });
  return Response.json({ ok: true });
}
