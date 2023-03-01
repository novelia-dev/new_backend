import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';
import { Novel } from './entities/novel.entity';
import { Quiz } from '../quizs/entities/quiz.entity';
import { Profile } from '../profiles/entities/profile.entity';
import { ProfilesModule } from '../profiles/profiles.module';

@Module({
  imports: [TypeOrmModule.forFeature([Novel, Quiz, Profile]), ProfilesModule],
  controllers: [NovelsController],
  providers: [NovelsService],
})
export class NovelsModule {}
