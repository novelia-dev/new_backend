import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { NovelsModule } from './modules/models/novels/novels.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Novel } from './modules/models/novels/entities/novel.entity';
import { LoggerMiddleware } from './commons/common/logger/logger.middleware';
import { AuthModule } from './modules/functions/auth/auth.module';
import { Genre } from './modules/models/genres/entities/genre.entity';
import { Quiz } from './modules/models/quizs/entities/quiz.entity';
import { Tag } from './modules/models/tags/entities/tag.entity';
import { User } from './modules/models/users/entities/user.entity';
import { Profile } from './modules/models/profiles/entities/profile.entity';
import { UsersModule } from './modules/models/users/users.module';
import { TagsModule } from './modules/models/tags/tags.module';
import { GenresModule } from './modules/models/genres/genres.module';
import { QuizsModule } from './modules/models/quizs/quizs.module';
import { ProfilesModule } from './modules/models/profiles/profiles.module';
import { LongReviewsModule } from './modules/models/long-reviews/long-reviews.module';
import { ShortReviewsModule } from './modules/models/short-reviews/short-reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DBNAME,
      entities: [Genre, Novel, Quiz, Tag, User, Profile],
      synchronize: true,
    }),
    NovelsModule,
    UsersModule,
    TagsModule,
    GenresModule,
    QuizsModule,
    ProfilesModule,
    LongReviewsModule,
    ShortReviewsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
