import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePageDto {
  @ApiProperty({
    name: '그 작품의 몇화인지',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  page_number: number;

  @ApiProperty({
    name: '각화의 제목',
    example: '섣부른 시작',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  page_title: string;

  @ApiProperty({
    name: '각화의 내용',
    example: '그 시작은 ...',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  page_content: string;

  @ApiProperty({
    name: '소설 id',
    example: 2,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  novel_id: number;
}
