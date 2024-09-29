import { insertUser } from '@/db/users.db'
import type { StoredUser } from '@/libs/types'

export async function createNewUser(newUser: Omit<StoredUser, 'id'>) {
  await insertUser(newUser)
}
