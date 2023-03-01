import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/modules/models/users/users.service';
import { CreateUserDto } from 'src/modules/models/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginAuthDto) {
    const existedAccount = await this.usersService.findOneByEmail(data.email);
    const validatePassword: boolean = await bcrypt.compare(
      data.password,
      existedAccount.password,
    );
    if (!existedAccount || !validatePassword) {
      throw new UnauthorizedException();
    }
    const payload = { email: data.email, sub: existedAccount.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async jwtRegister(data: CreateUserDto) {
    const existedAccount = await this.usersService.findOneByEmail(data.email);

    if (existedAccount) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    data.password = await bcrypt.hash(data.password, 10);
    await this.usersService.create(data);
  }
}
