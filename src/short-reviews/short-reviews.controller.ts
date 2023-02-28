import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShortReviewsService } from './short-reviews.service';
import { CreateShortReviewDto } from './dto/create-short-review.dto';
import { UpdateShortReviewDto } from './dto/update-short-review.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('short-reviews')
@Controller('short-reviews')
export class ShortReviewsController {
  constructor(private readonly shortReviewsService: ShortReviewsService) {}

  @ApiProperty({
    deprecated: true,
  })
  @Post()
  create(@Body() createShortReviewDto: CreateShortReviewDto) {
    return this.shortReviewsService.create(createShortReviewDto);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Get()
  findAll() {
    return this.shortReviewsService.findAll();
  }

  @ApiProperty({
    deprecated: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortReviewsService.findOne(+id);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShortReviewDto: UpdateShortReviewDto,
  ) {
    return this.shortReviewsService.update(+id, updateShortReviewDto);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortReviewsService.remove(+id);
  }
}
