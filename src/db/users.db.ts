import type { CreateNewUserArgs } from '@/libs/types'
import pool from './pool'

export interface User {
  id: number
  username: string
  password: string
}

export async function selectUserByUsername(
  username: string
): Promise<User | undefined> {
  const { rows } = await pool.query<User>(
    'SELECT * FROM users WHERE username = $1',
    [username]
  )

  return rows[0]
}

export async function selectUserById(id: number): Promise<User | undefined> {
  const { rows } = await pool.query<User>('SELECT * FROM users WHERE id = $1', [
    id
  ])

  return rows[0]
}

export async function insertUser({
  username,
  hashedPassword
}: CreateNewUserArgs) {
  await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
    username,
    hashedPassword
  ])
}
