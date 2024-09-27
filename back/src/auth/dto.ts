import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class SignUpBodyDto {
	@ApiProperty({
		example: 'goblin_1444@mail.ru',
	})
    @IsEmail()
	email: string;

	@ApiProperty({
		example: 'men123AAA',
	})
    @IsNotEmpty()
    @Length(10, 25)
	password: string;
}

export class SignInBodyDto {
	@ApiProperty({
		example: 'goblin_1444@mail.ru',
	})
    @IsEmail()
	email: string;

	@ApiProperty({
		example: 'men123AAA',
	})
    @IsNotEmpty()
    @Length(10, 25)
	password: string;
}

export class SessionInfoDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    email: string

    @ApiProperty()
    iat: number

    @ApiProperty()
    exp: number
}