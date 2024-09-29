export interface StoredUser {
  id: number
  username: string
  hash: string
}

export interface SubmittedLoginCredential {
  username: string
  password: string
}
