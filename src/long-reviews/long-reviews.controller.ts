import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LongReviewsService } from './long-reviews.service';
import { CreateLongReviewDto } from './dto/create-long-review.dto';
import { UpdateLongReviewDto } from './dto/update-long-review.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('long-reviews')
@Controller('long-reviews')
export class LongReviewsController {
  constructor(private readonly longReviewsService: LongReviewsService) {}

  @ApiProperty({
    deprecated: true,
  })
  @Post()
  create(@Body() createLongReviewDto: CreateLongReviewDto) {
    return this.longReviewsService.create(createLongReviewDto);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Get()
  findAll() {
    return this.longReviewsService.findAll();
  }

  @ApiProperty({
    deprecated: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.longReviewsService.findOne(+id);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLongReviewDto: UpdateLongReviewDto,
  ) {
    return this.longReviewsService.update(+id, updateLongReviewDto);
  }

  @ApiProperty({
    deprecated: true,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.longReviewsService.remove(+id);
  }
}
