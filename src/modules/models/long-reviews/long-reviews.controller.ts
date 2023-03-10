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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('long-reviews')
@Controller('long-reviews')
export class LongReviewsController {
  constructor(private readonly longReviewsService: LongReviewsService) {}

  @ApiOperation({
    deprecated: true,
  })
  @Post()
  create(@Body() createLongReviewDto: CreateLongReviewDto) {
    return this.longReviewsService.create(createLongReviewDto);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Get()
  findAll() {
    return this.longReviewsService.findAll();
  }

  @ApiOperation({
    deprecated: true,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.longReviewsService.findOne(+id);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLongReviewDto: UpdateLongReviewDto,
  ) {
    return this.longReviewsService.update(+id, updateLongReviewDto);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.longReviewsService.remove(+id);
  }
}
