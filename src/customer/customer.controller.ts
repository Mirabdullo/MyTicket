import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginDto } from './dto/login-auth.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto,@Res({ passthrough: true })res: Response) {
    return this.customerService.create(createCustomerDto,res);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto, @Res({passthrough: true}) res: Response){
    return this.customerService.signin(loginDto, res)
  }

  @Post('logout/:id')
  @HttpCode(HttpStatus.OK)
  logout(
    @Param() id: number,
    @Res({ passthrough: true }) res,
  ): Promise<boolean> {
    console.log();
    res.clearCookie('refresh_token');
    return this.customerService.logout(+id["id"]);
  }


  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
