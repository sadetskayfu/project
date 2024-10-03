import type { StateSchema } from "@/app/providers/store";

export const getUserAuthInfo = (state: StateSchema) => state.user.authInfo
export const getUserEmail = (state: StateSchema) => state.user.authInfo?.email