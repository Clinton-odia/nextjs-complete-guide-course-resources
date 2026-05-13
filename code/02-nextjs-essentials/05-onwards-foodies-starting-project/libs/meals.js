import { DatabaseSync } from 'node:sqlite';
const db = new DatabaseSync('meals.db');

export function getMeals() {
  db.prepare('SELECT * FROM meals').all();
}
