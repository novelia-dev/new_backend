import { Module } from '@nestjs/common';
import { LongReviewsService } from './long-reviews.service';
import { LongReviewsController } from './long-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LongReview } from './entities/long-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LongReview])],
  controllers: [LongReviewsController],
  providers: [LongReviewsService],
})
export class LongReviewsModule {}
