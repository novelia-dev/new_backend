import { Test, TestingModule } from '@nestjs/testing';
import { ShortReviewsController } from './short-reviews.controller';
import { ShortReviewsService } from './short-reviews.service';

describe('ShortReviewsController', () => {
  let controller: ShortReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortReviewsController],
      providers: [ShortReviewsService],
    }).compile();

    controller = module.get<ShortReviewsController>(ShortReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
