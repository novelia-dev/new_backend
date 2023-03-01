import { Test, TestingModule } from '@nestjs/testing';
import { ShortReviewsService } from './short-reviews.service';

describe('ShortReviewsService', () => {
  let service: ShortReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortReviewsService],
    }).compile();

    service = module.get<ShortReviewsService>(ShortReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
