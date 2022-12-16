import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginDto } from './dto/login-auth.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({summary: 'Foydalanuvchi qoshish'})
  @ApiResponse({status: 201, type: Customer})
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto,@Res({ passthrough: true })res: Response) {
    return this.customerService.create(createCustomerDto,res);
  }

  @ApiOperation({summary: 'Foydalanuvchi qoshish'})
  @ApiResponse({status: 201, type: Customer})
  @Post('login')
  login(@Body() loginDto: LoginDto, @Res({passthrough: true}) res: Response){
    return this.customerService.signin(loginDto, res)
  }

  @ApiOperation({summary: 'Foydalanuvchi qoshish'})
  @ApiResponse({status: 201, type: Customer})
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('logout/:id')
  logout(
    @Param() id: number,
    @Res({ passthrough: true }) res,
  ): Promise<boolean> {
    console.log();
    res.clearCookie('refresh_token');
    return this.customerService.logout(+id["id"]);
  }


  @ApiOperation({summary: 'Foydalanuvchlar royxati'})
  @ApiResponse({status: 201, type: [Customer]})
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({summary: 'Foydalanuvchi id boyichch bittasini olish'})
  @ApiResponse({status: 201, type: Customer})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({summary: 'Foydalanuvchi mamulomotlarini ozgartirish'})
  @ApiResponse({status: 201, type: Customer})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({summary: 'Foydalanuvchini ochirish'})
  @ApiResponse({status: 201, type: Customer})
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
