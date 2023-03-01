import { IsEmail } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { Novel } from './entities/novel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../profiles/entities/profile.entity';
import { ProfilesService } from '../profiles/profiles.service';

@Injectable()
export class NovelsService {
  constructor(
    @InjectRepository(Novel) private novelsRepository: Repository<Novel>,
    @InjectRepository(Profile) private profilesRepository: Repository<Profile>,
    private readonly profilesService: ProfilesService,
  ) {}
  async create(createNovelDto: CreateNovelDto, email: string): Promise<any> {
    const newNovel = await this.novelsRepository.create(createNovelDto);
    const authorProfile = await this.profilesService.getByEmail(email);
    newNovel.authorProfile = authorProfile;
    await this.novelsRepository.save(newNovel);
    await this.profilesRepository.save(authorProfile);
    return newNovel;
  }

  async findAll(): Promise<Novel[]> {
    return this.novelsRepository.find();
  }

  findOne(id: number) {
    return this.novelsRepository.find({ where: { id: id } });
  }

  update(id: number, updateNovelDto: UpdateNovelDto) {
    return `This action updates a #${id} novel`;
  }

  remove(id: number) {
    return this.novelsRepository.delete(id);
  }
}
