import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AdminGuard } from 'src/guards/admin.guard';
import { ForAdmins } from 'src/guards/all-admins.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginDto } from './dto/login-auth.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto, @Res({passthrough: true}) res: Response ) {
    return this.adminService.create(createAdminDto, res);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto, @Res({passthrough: true}) res: Response){
    return this.adminService.signin(loginDto, res)
  }

  @UseGuards(AdminGuard)
  @Post('logout/:id')
  @HttpCode(HttpStatus.OK)
  logout(
    @Param() id: number,
    @Res({ passthrough: true }) res,
  ): Promise<boolean> {
    console.log();
    res.clearCookie('refresh_token');
    return this.adminService.logout(+id["id"]);
  }

  @UseGuards(ForAdmins)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(AdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
