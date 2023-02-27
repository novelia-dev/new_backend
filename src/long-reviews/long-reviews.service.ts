import { Injectable } from '@nestjs/common';
import { CreateLongReviewDto } from './dto/create-long-review.dto';
import { UpdateLongReviewDto } from './dto/update-long-review.dto';

@Injectable()
export class LongReviewsService {
  create(createLongReviewDto: CreateLongReviewDto) {
    return 'This action adds a new longReview';
  }

  findAll() {
    return `This action returns all longReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} longReview`;
  }

  update(id: number, updateLongReviewDto: UpdateLongReviewDto) {
    return `This action updates a #${id} longReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} longReview`;
  }
}
