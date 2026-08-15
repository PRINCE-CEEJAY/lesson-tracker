import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const lessonTable = pgTable('lessons', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: integer().notNull(),
  date: varchar({ length: 255 }),
});
