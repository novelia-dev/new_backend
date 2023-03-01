import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateAndJoinUserDto } from './dto/create-and-join-user.dto';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<Profile>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private usersService: UsersService,
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

  async create(data: CreateAndJoinUserDto) {
    const newProfile = await this.profilesRepository.create(data);
    const userForThisProfile = await this.usersService.findOneByEmail(
      data.email,
    );
    userForThisProfile.profile = newProfile;
    // newProfile.account = userForThisProfile;
    await this.profilesRepository.save(newProfile);
    await this.usersRepository.save(userForThisProfile);
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
