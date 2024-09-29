import pg from 'pg'

const SQL_QUERY = `
CREATE TABLE IF NOT EXISTS
  users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    hash VARCHAR(500)
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");`

async function main() {
  console.log('Seeding...')

  const client = new pg.Client()

  await client.connect()
  await client.query(SQL_QUERY)
  await client.end()

  console.log('Done')
}

main()
