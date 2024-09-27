import { Module } from "@nestjs/common";
import { UserService } from "./users.service";
import { DbModule } from "src/db/db.module";
import { ProfileModule } from "src/profile/profile.module";

@Module({
    imports: [DbModule, ProfileModule],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule {}