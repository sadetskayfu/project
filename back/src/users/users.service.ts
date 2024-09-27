import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class UserService {
  constructor(private db: DbService, private profileService: ProfileService) {}

  async findByEmail(email: string) {
    return await this.db.user.findFirst({ where: { email } });
  }

  async create(email: string, hash: string, salt: string) {
    const newUser = await this.db.user.create({ data: { email, hash, salt } });

    await this.profileService.createProfile(newUser.id)
    
    return newUser
  }
}
