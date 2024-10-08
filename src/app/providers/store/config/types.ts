import type { ProfileSchema } from "@/entities/Profile";
import type { UserSchema } from "@/entities/User";
import type { AuthSchema } from "@/features/auth";

export interface StateSchema {
    auth: AuthSchema
    user: UserSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema


