import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuizsService } from './quizs.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('quizs')
@Controller('quizs')
export class QuizsController {
  constructor(private readonly quizsService: QuizsService) {}

  @ApiProperty({
    deprecated: true,
  })
  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizsService.create(createQuizDto);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Get()
  findAll() {
    return this.quizsService.findAll();
  }

  @ApiProperty({
    deprecated: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizsService.findOne(+id);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizsService.update(+id, updateQuizDto);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizsService.remove(+id);
  }
}
