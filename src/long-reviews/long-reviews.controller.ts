import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LongReviewsService } from './long-reviews.service';
import { CreateLongReviewDto } from './dto/create-long-review.dto';
import { UpdateLongReviewDto } from './dto/update-long-review.dto';

@Controller('long-reviews')
export class LongReviewsController {
  constructor(private readonly longReviewsService: LongReviewsService) {}

  @Post()
  create(@Body() createLongReviewDto: CreateLongReviewDto) {
    return this.longReviewsService.create(createLongReviewDto);
  }

  @Get()
  findAll() {
    return this.longReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.longReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLongReviewDto: UpdateLongReviewDto) {
    return this.longReviewsService.update(+id, updateLongReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.longReviewsService.remove(+id);
  }
}
