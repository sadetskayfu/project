import type { StateSchema } from "@/app/providers/store";

export const getPassword = (state: StateSchema) => state.auth.password
export const getEmail = (state: StateSchema) => state.auth.email
