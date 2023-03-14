import { Injectable } from '@nestjs/common';
import { CreateShortReviewDto } from './dto/create-short-review.dto';
import { UpdateShortReviewDto } from './dto/update-short-review.dto';
import { CreateInServiceDto } from './dto/create-in-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortReview } from './entities/short-review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShortReviewsService {
  constructor(
    @InjectRepository(ShortReview)
    private shortReviewsReposiroty: Repository<ShortReview>,
  ) {}
  async create(data: CreateInServiceDto) {
    return await this.shortReviewsReposiroty.save(data);
  }

  async findAll() {
    return await this.shortReviewsReposiroty.find();
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
