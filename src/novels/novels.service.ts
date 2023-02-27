import { Injectable } from '@nestjs/common';
import { CreateNovelDto } from './dto/create-novel.dto';
import { UpdateNovelDto } from './dto/update-novel.dto';
import { Novel } from './entities/novel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NovelsService {
  constructor(
    @InjectRepository(Novel) private novelsRepository: Repository<Novel>,
  ) {}
  async create(createNovelDto: CreateNovelDto): Promise<any> {
    return this.novelsRepository.save(createNovelDto);
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
