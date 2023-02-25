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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.LIGHTSAIL_DB_ENDPOINT,
      port: 3306,
      username: process.env.LIGHTSAIL_DB_USERNAME,
      password: process.env.LIGHTSAIL_DB_PASSWORD,
      database: process.env.LIGHTSAIL_DB_NAME,
      entities: [],
      synchronize: true,
    }),
    NovelsModule,
    UsersModule,
    TagsModule,
    GenresModule,
    QuizsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
