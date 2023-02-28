import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginAuthDto) {
    console.log('data', data);
    const existedAccount = await this.usersService.findOneByEmail(data.email);
    console.log('1');
    const validatePassword: boolean = await bcrypt.compare(
      data.password,
      existedAccount.password,
    );
    console.log('2');
    console.log('himan', existedAccount, validatePassword);
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
