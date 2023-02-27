import { Module } from '@nestjs/common';
import { LongReviewsService } from './long-reviews.service';
import { LongReviewsController } from './long-reviews.controller';

@Module({
  controllers: [LongReviewsController],
  providers: [LongReviewsService]
})
export class LongReviewsModule {}
