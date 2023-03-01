import { PartialType } from '@nestjs/mapped-types';
import { CreateLongReviewDto } from './create-long-review.dto';

export class UpdateLongReviewDto extends PartialType(CreateLongReviewDto) {}
