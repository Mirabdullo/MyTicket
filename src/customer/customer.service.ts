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

    const token = this.getTokens(customer.id, customer.email);

    const hashedRefreshToken = await bcrypt.hash(
      (
        await token
      ).refresh_token,
      7,
    );
    const newCustomer = await this.customerRepository.update(
      {
        hashed_refresh_token: hashedRefreshToken,
      },
      { where: { id: customer.id }, returning: true },
    );
      const refresh = (await token).refresh_token
      console.log(refresh);
    res.cookie('refresh_token', refresh, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    console.log(newCustomer[1][0]);
    return {
      ...newCustomer[1][0].dataValues,
      access_token: (await token).access_token,
      refresh_token: (await token).refresh_token
    }
  }


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
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
    const newCustomer = await this.customerRepository.update({
      hashed_refresh_token: hashed_refresh_token
    }, {where: {id: customer.id}, returning: true})
    res.cookie("refresh_token", tokens.refresh_token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    })
    return {
      ...newCustomer[1][0].dataValues,
      access_token: (await tokens).access_token,
      refresh_token: (await tokens).refresh_token
    }
  }


  async logout(id: number) {
    try {
      console.log(id);
      const customer = await this.customerRepository.findByPk(id)
      console.log(customer);
      if(!customer){
        throw new HttpException('Malumot topilmadi', HttpStatus.NOT_FOUND)
      }
      const user = await this.customerRepository.update({
        hashed_refresh_token: ""
      },{ where: {id:+id}})
      console.log(user);
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


  // private async validatecustomer(loginDto: LoginDto) {
  //   const customer = await this.customerRepository.findOne({where: {email:loginDto.email}});
  //   if (!customer) {
  //     throw new UnauthorizedException('emil yoki password xato');
  //   }
  //   const validPassword = await bcrypt.compare(
  //     loginDto.password,
  //     customer.password,
  //   );
  //   if (customer && validPassword) {
  //     return customer;
  //   }
  //   throw new UnauthorizedException('Email yoki password xato');
  // }



}
