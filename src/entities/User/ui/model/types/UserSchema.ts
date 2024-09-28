export interface UserAuthInfo {
    email: string
}

export interface UserSchema {
    authInfo: UserAuthInfo | null
}