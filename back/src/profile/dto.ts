import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class ProfileDto {
    @ApiProperty()
	id: number;

    @ApiProperty()
	userId: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
	firstName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
	lastName?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
	age?: number;
}


export class EditProfileDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
	firstName?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
	lastName?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
	age?: number;
}