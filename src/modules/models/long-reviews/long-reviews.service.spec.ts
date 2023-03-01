import { Test, TestingModule } from '@nestjs/testing';
import { LongReviewsService } from './long-reviews.service';

describe('LongReviewsService', () => {
  let service: LongReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LongReviewsService],
    }).compile();

    service = module.get<LongReviewsService>(LongReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
