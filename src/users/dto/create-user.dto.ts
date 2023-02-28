import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'novelier@gmail.com',
    description: '이메일',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1234',
    description: '비밀번호',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
