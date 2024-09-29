import pool from './pool'

export async function selectUserByUsername(
  username: string
): Promise<Express.User | undefined> {
  const { rows } = await pool.query<Express.User>(
    'SELECT * FROM users WHERE username = $1',
    [username]
  )

  return rows[0]
}

export async function selectUserById(
  id: number
): Promise<Express.User | undefined> {
  const { rows } = await pool.query<Express.User>(
    'SELECT * FROM users WHERE id = $1',
    [id]
  )

  return rows[0]
}

export async function insertUser({ username, hash }: Omit<Express.User, 'id'>) {
  await pool.query('INSERT INTO users (username, hash) VALUES ($1, $2)', [
    username,
    hash
  ])
}
