import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNovelDto {
  @ApiProperty({
    name: 'title',
    example: '새로운 로맨스',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    name: 'author',
    example: '모이',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty({
    name: 'content',
    example: '우리의 사랑은 그때부터 시작이였다..',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    name: '노출되기 시작하는 날짜',
    example: '2002-08-06',
    required: false,
  })
  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @ApiProperty({
    name: '객관식 답변 수',
    example: '5',
    required: false,
  })
  @IsNotEmpty()
  @IsNumber()
  short_done: number;

  @ApiProperty({
    name: '주관식 답변 수',
    example: '5',
    required: false,
  })
  @IsNotEmpty()
  @IsNumber()
  multiple_done: number;
}
