import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { NovelsModule } from './novels/novels.module';
import { TagsModule } from './tags/tags.module';
import { GenresModule } from './genres/genres.module';
import { QuizsModule } from './quizs/quizs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genres/entities/genre.entity';
import { Novel } from './novels/entities/novel.entity';
import { Quiz } from './quizs/entities/quiz.entity';
import { Tag } from './tags/entities/tag.entity';
import { User } from './users/entities/user.entity';
import { ProfilesModule } from './profiles/profiles.module';
import { Profile } from './profiles/entities/profile.entity';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
