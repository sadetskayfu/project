export interface Error {
	error?: string 
	massage?: string | string[]
	statusCode?: number
}

export interface AuthSchema {
    email: string
    password: string
    isLoading: boolean
    error?: Error
}