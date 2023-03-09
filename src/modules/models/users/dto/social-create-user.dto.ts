import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SocialCreateUserDto {
  @ApiProperty({
    example: 'novelist0001@gmail.com',
    description: '이메일',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '노벨리어',
    description: '이름',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
