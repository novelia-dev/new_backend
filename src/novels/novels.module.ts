import { Quiz } from 'src/quizs/entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NovelsService } from './novels.service';
import { NovelsController } from './novels.controller';
import { Novel } from './entities/novel.entity';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { Profile } from 'src/profiles/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Novel, Quiz, Profile]), ProfilesModule],
  controllers: [NovelsController],
  providers: [NovelsService],
})
export class NovelsModule {}
