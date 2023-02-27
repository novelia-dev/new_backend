import { Test, TestingModule } from '@nestjs/testing';
import { LongReviewsController } from './long-reviews.controller';
import { LongReviewsService } from './long-reviews.service';

describe('LongReviewsController', () => {
  let controller: LongReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LongReviewsController],
      providers: [LongReviewsService],
    }).compile();

    controller = module.get<LongReviewsController>(LongReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
