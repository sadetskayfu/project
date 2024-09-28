import axios from 'axios'
import { z } from 'zod'

const baseUrl = 'http://localhost:3000'

export interface AuthData {
    email: string
    password: string
}

const SessionInfoSchema = z.object({
    id: z.number(),
    email: z.string(),
    iat: z.number(),
    exp: z.number()
})

export const authApi = {
    signUp: (body: AuthData) => {
        return axios.post(`${baseUrl}/auth/sign-up`, body, {
            withCredentials: true,

        })
    },
    signIn: (body: AuthData) => {
        return axios.post(`${baseUrl}/auth/sign-in`, body)
    },
    signOut: () => {
        return axios.get(`${baseUrl}/auth/sign-out`, {
            withCredentials: true,
        })
    },
    getSessionInfo: () => {
        return axios.get(`${baseUrl}/auth/session`, {
            withCredentials: true,
 

        }).then((res) => {
            return SessionInfoSchema.parse(res.data)
        })
    }
}