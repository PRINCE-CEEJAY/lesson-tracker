import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { defineRelations } from 'drizzle-orm';

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const lessonsTable = pgTable('lessons', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: integer().notNull(),
  date: varchar({ length: 255 }),
  userId: integer('userId')
    .notNull()
    .references(() => usersTable.id),
});

export const relations = defineRelations({ usersTable, lessonsTable }, (r) => ({
  usersTable: {
    lessons: r.many.lessonsTable(),
  },
  lessonsTable: {
    user: r.one.usersTable({
      from: r.lessonsTable.userId,
      to: r.usersTable.id,
    }),
  },
}));

export type LessonType = typeof lessonsTable;
