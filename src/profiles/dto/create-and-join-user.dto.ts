import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAndJoinUserDto {
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

  @ApiProperty({
    example: '남자',
    description: '성별',
    required: true,
  })
  sex: string;

  @ApiProperty({
    example: '20대',
    description: '나이대',
    required: true,
  })
  ages: string;
}
