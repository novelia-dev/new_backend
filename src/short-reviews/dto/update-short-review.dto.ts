import { PartialType } from '@nestjs/mapped-types';
import { CreateShortReviewDto } from './create-short-review.dto';

export class UpdateShortReviewDto extends PartialType(CreateShortReviewDto) {}
