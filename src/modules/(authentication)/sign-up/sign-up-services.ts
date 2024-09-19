import pool from '@/db/pool'

interface CreateNewUserArgs {
  username: string
  password: string
}

export async function createNewUser({ username, password }: CreateNewUserArgs) {
  await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
    username,
    password
  ])
}
