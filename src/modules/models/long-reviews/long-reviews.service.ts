import { Injectable } from '@nestjs/common';
import { CreateLongReviewDto } from './dto/create-long-review.dto';
import { UpdateLongReviewDto } from './dto/update-long-review.dto';
import { CreateInServiceDto } from './dto/create-in-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LongReview } from './entities/long-review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LongReviewsService {
  constructor(
    @InjectRepository(LongReview)
    private longReviewsReposiroty: Repository<LongReview>,
  ) {}

  async create(data: CreateInServiceDto) {
    return await this.longReviewsReposiroty.save(data);
  }

  async findAll() {
    return await this.longReviewsReposiroty.find();
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
