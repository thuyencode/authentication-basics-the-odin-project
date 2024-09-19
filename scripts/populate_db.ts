import pg from 'pg'

const SQL = `
CREATE TABLE IF NOT EXISTS
    messages (
        id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(255) NOT NULL,
        text VARCHAR(255) NOT NULL,
        added TIMESTAMP
    );`

async function main() {
  console.log('Seeding...')

  const client = new pg.Client()

  await client.connect()
  await client.query(SQL)
  await client.end()

  console.log('Done')
}

main()
