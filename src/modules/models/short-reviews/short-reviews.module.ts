import { Module } from '@nestjs/common';
import { ShortReviewsService } from './short-reviews.service';
import { ShortReviewsController } from './short-reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortReview } from './entities/short-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShortReview])],
  controllers: [ShortReviewsController],
  providers: [ShortReviewsService],
})
export class ShortReviewsModule {}
