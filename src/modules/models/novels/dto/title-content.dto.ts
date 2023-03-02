import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { genreTypes } from 'src/commons/types/genres.type';

export class TitleContentDto {
  @ApiProperty({
    name: 'title',
    example: '새로운 로맨스',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    name: 'content',
    example: '우리의 사랑은 그때부터 시작이였다..',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    name: 'genre',
    example: '로맨스',
    required: true,
    // type: () => genreTypes,
  })
  genre: genreTypes;
}
