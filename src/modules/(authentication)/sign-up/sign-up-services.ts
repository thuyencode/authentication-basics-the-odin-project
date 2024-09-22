import { insertUser } from '@/db/users.db'
import type { CreateNewUserArgs } from '@/libs/types'

export async function createNewUser(newUser: CreateNewUserArgs) {
  await insertUser(newUser)
}
