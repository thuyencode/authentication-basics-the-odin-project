import pg from 'pg'

const SQL_QUERY = `
CREATE TABLE IF NOT EXISTS
  users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    password VARCHAR(255)
);`

async function main() {
  console.log('Seeding...')

  const client = new pg.Client()

  await client.connect()
  await client.query(SQL_QUERY)
  await client.end()

  console.log('Done')
}

main()
