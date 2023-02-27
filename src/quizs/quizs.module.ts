import { Module } from '@nestjs/common';
import { QuizsService } from './quizs.service';
import { QuizsController } from './quizs.controller';
import { Quiz } from './entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Novel } from 'src/novels/entities/novel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Novel])],
  controllers: [QuizsController],
  providers: [QuizsService],
})
export class QuizsModule {}
