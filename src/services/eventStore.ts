import Database from "better-sqlite3";

const db = new Database("events.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    eventType TEXT,
    payload TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export function storeEvent(eventType: string, payload: any) {
  const stmt = db.prepare("INSERT INTO events (eventType, payload) VALUES (?, ?)");
  const result = stmt.run(eventType, JSON.stringify(payload));
  return result.lastInsertRowid;
}