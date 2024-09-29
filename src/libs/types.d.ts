declare global {
  namespace Express {
    interface User {
      id: number
      username: string
      hash: string
    }
  }
  interface SubmittedLoginCredential {
    username: string
    password: string
  }
}

export {}
