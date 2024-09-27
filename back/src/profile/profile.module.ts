import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controllet";
import { ProfileService } from "./profile.service";
import { DbModule } from "src/db/db.module";

@Module({
    imports: [DbModule],
    controllers: [ProfileController],
    providers: [ProfileService],
    exports: [ProfileService]
})

export class ProfileModule {}