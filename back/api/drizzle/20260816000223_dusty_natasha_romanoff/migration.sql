CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE
);
--> statement-breakpoint
ALTER TABLE "lessons" ADD COLUMN "userId" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_userId_users_id_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id");