import { Injectable } from '@nestjs/common';
import { CreateShortReviewDto } from './dto/create-short-review.dto';
import { UpdateShortReviewDto } from './dto/update-short-review.dto';

@Injectable()
export class ShortReviewsService {
  create(createShortReviewDto: CreateShortReviewDto) {
    return 'This action adds a new shortReview';
  }

  findAll() {
    return `This action returns all shortReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortReview`;
  }

  update(id: number, updateShortReviewDto: UpdateShortReviewDto) {
    return `This action updates a #${id} shortReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortReview`;
  }
}
