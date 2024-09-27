import { Injectable } from "@nestjs/common";
import { DbService } from "src/db/db.service";
import { EditProfileDto } from "./dto";

@Injectable()
export class ProfileService {
    constructor(private db: DbService){}

    async createProfile(userId: number) {
        await this.db.profile.create({
            data: {
                userId,
            }
        })
    }

    async getProfile(userId: number) {
        return await this.db.profile.findUniqueOrThrow({
            where: {
                userId
            }
        })
    }

    async editProfile(userId: number, body: EditProfileDto) {
        return await this.db.profile.update({
            where: {
               userId 
            },
            data: {
                ...body
            }
        })
    }
}