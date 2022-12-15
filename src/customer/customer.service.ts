import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginDto } from './dto/login-auth.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerRepository: typeof Customer,
    private readonly jwtService: JwtService,
  ) {}
////////////////////////////<<<<<<<<<<<<<<<<<CREATED>>>>>>>>>>>>>>>>////////////////
  async create(createCustomerDto: CreateCustomerDto, res: Response) {
    const candidate = await this.customerRepository.findOne({
      where: { email: createCustomerDto.email },
    });
    if (candidate) {
      throw new HttpException(
        'Bunday fordalanuvchi allaqachon mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPAssword = await bcrypt.hash(createCustomerDto.password, 7);
    const customer = await this.customerRepository.create({
      ...createCustomerDto,
      password: hashedPAssword,
    });

    const token = await this.getTokens(customer.id, customer.email);
    await this.updateRefreshTokenHash(customer.id, token.refresh_token)
    
    res.cookie('refresh_token', token.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return {
      id: customer.id,
      message: "Customer created!",
      access_token: token.access_token,
      refresh_token: token.refresh_token
    }
  }

/////////////////////<<<<<<<<<<<SIGNIN>>>>>>>>>>>>>//////////////////
  async signin(loginDto: LoginDto, res: Response) {
    const {email, password} = loginDto
    const customer = await this.customerRepository.findOne({
        where: {email}
    })

    if(!customer){
        throw new ForbiddenException("Access Denide")
    }

    const passwordMatches = await bcrypt.compare(password, customer.password)
    if(!passwordMatches) throw new ForbiddenException("Access Denide")

    const tokens = await this.getTokens(customer.id, customer.email)
    await this.updateRefreshTokenHash(customer.id, tokens.refresh_token)

    res.cookie("refresh_token", tokens.refresh_token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    })
    return {
      id: customer.id,
      message: "Customer sign in",
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token
    }
  }


  async logout(id: number) {
    try {
      const customer = await this.customerRepository.findByPk(id)
      if(!customer){
        throw new HttpException('Malumot topilmadi', HttpStatus.NOT_FOUND)
      }
      const user = await this.customerRepository.update({
        hashed_refresh_token: null
      },{ where: {id:+id}})
      if(!user) throw new ForbiddenException('Access denide')
      return true
    } catch (error) {
      console.log(error);
      throw new ForbiddenException('Serverda xatolik')
    }
  }


  
  findAll() {
    return this.customerRepository.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.customerRepository.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.customerRepository.destroy({ where: { id } });
  }

  async getTokens(id: number, email: string) {
    const jwtPayload = {
      sub: id,
      email: email,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }


  async updateRefreshTokenHash(
    id: number,
    refreshToken: string,
  ): Promise<void> {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7)
    await this.customerRepository.update({
      hashed_refresh_token: hashedRefreshToken
    }, {where: {id},returning: true})
  }


}
