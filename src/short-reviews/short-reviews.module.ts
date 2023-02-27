import { Module } from '@nestjs/common';
import { ShortReviewsService } from './short-reviews.service';
import { ShortReviewsController } from './short-reviews.controller';

@Module({
  controllers: [ShortReviewsController],
  providers: [ShortReviewsService]
})
export class ShortReviewsModule {}
