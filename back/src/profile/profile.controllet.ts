import { Controller, Patch, Get, Body, UseGuards } from '@nestjs/common';
import { EditProfileDto, ProfileDto } from './dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { SessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('profile')
@UseGuards(AuthGuard)
export class ProfileController {
	constructor(private profileService: ProfileService){}
    
    @Get()
	@ApiOkResponse({
		type: ProfileDto,
	})
	async getProfile(@SessionInfo() session: SessionInfoDto) {
        return await this.profileService.getProfile(session.id)
    }

	@Patch()
    @ApiOkResponse({
        type: ProfileDto
    })
	async editProfile(@Body() body: EditProfileDto, @SessionInfo() session: SessionInfoDto) {
		return await this.profileService.editProfile(session.id, body)
    }
}
