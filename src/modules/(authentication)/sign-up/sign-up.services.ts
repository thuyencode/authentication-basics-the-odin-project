import { insertUser } from '@/db/users.db'

export async function createNewUser(newUser: Omit<Express.User, 'id'>) {
  await insertUser(newUser)
}
