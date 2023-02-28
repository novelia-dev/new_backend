import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
  ) {}

  async getByEmail(email: string) {
    const profile = await this.profilesRepository.findOne({
      where: { email: email },
    });
    if (profile) {
      return profile;
    }
    throw new HttpException(
      '사용자 이메일이 존재하지 않습니다.',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(createProfileDto: CreateProfileDto) {
    const newProfile = await this.profilesRepository.create(createProfileDto);
    await this.profilesRepository.save(newProfile);
    return newProfile;
  }

  async findAll() {
    return this.profilesRepository.find();
  }

  async findOne(id: number) {
    return this.profilesRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profilesRepository.update(id, updateProfileDto);
  }

  remove(id: number) {
    return this.profilesRepository.delete(id);
  }
}
