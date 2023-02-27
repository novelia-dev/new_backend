import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NovelsService } from './novels.service';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

@Controller('novels')
export class NovelsController {
  constructor(private readonly novelsService: NovelsService) {}

  @ApiOperation({
    summary: 'novel 생성',
    description: 'novel 생성하기 api',
  })
  @ApiCreatedResponse({
    description: 'novel 생성하기',
    type: CreateNovelDto,
  })
  @Post()
  create(@Body() createNovelDto: CreateNovelDto) {
    return this.novelsService.create(createNovelDto);
  }

  @ApiOperation({
    summary: 'novel 가져오기',
    description: 'novel 가져오기 api',
  })
  @ApiCreatedResponse({
    description: 'novel 가져오기',
  })
  @Get()
  findAll() {
    return this.novelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNovelDto: UpdateNovelDto) {
    return this.novelsService.update(+id, updateNovelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novelsService.remove(+id);
  }
}
