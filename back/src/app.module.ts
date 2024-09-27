import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { ProfileModule } from './profile/profile.module';

@Module({
	imports: [UserModule, AuthModule, ProfileModule, DbModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
