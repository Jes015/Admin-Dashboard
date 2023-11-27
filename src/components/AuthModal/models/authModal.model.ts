export const authModalType = {
  signIn: 'Sign in',
  signUp: 'Sign up'
} as const

export type AuthModalType = typeof authModalType[keyof typeof authModalType]
