import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInServiceDto {
  @ApiProperty({
    name: '유저 id 값',
    example: 5,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty({
    name: '소설 id 값',
    example: 5,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  novel_id: number;

  @ApiProperty({
    name: '별점',
    example: 3.5,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  star: number;

  @ApiProperty({
    name: '좋은점 피드백',
    example: '재밌ㄱ어요!',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  good_content: string;

  @ApiProperty({
    name: '나쁜점 피드백',
    example: '재미 없어요!',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  bad_content: string;
}
