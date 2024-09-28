import { StateSchema } from "@/app/providers/store";

export const getUserEmail = (state: StateSchema) => state.user.authInfo?.email