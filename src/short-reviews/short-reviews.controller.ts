import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortReviewsService } from './short-reviews.service';
import { CreateShortReviewDto } from './dto/create-short-review.dto';
import { UpdateShortReviewDto } from './dto/update-short-review.dto';

@Controller('short-reviews')
export class ShortReviewsController {
  constructor(private readonly shortReviewsService: ShortReviewsService) {}

  @Post()
  create(@Body() createShortReviewDto: CreateShortReviewDto) {
    return this.shortReviewsService.create(createShortReviewDto);
  }

  @Get()
  findAll() {
    return this.shortReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortReviewDto: UpdateShortReviewDto) {
    return this.shortReviewsService.update(+id, updateShortReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortReviewsService.remove(+id);
  }
}
