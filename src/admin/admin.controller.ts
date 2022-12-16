import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreatorAdminGuard } from 'src/guards/admin-creator.guard';
import { AdminGuard } from 'src/guards/admin.guard';
import { OnlyAdminGuards } from 'src/guards/all-admins.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginDto } from './dto/login-auth.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Admin qo'shish" })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(CreatorAdminGuard)
  @Post()
  create(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.create(createAdminDto, res);
  }

  @ApiOperation({ summary: 'Admin login' })
  @ApiResponse({ status: 201, type: Admin })
  @Post('login')
  login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.adminService.signin(loginDto, res);
  }

  @ApiOperation({ summary: 'Admin logout qilish' })
  @ApiResponse({ status: 201, type: 'true' })
  @UseGuards(AdminGuard)
  @Post('logout/:id')
  @HttpCode(HttpStatus.OK)
  logout(
    @Param() id: number,
    @Res({ passthrough: true }) res,
  ): Promise<boolean> {
    console.log();
    res.clearCookie('refresh_token');
    return this.adminService.logout(+id['id']);
  }

  @ApiOperation({ summary: "Admin active qilish" })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(CreatorAdminGuard)
  @Post('activate')
  ActivateAdmin(id:number) {
    return this.adminService.ActivateAdmin(id);
  }

  @ApiOperation({ summary: "Admin ro'yxati" })
  @ApiResponse({ status: 201, type: [Admin] })
  @UseGuards(CreatorAdminGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "Admin id bo'yicha olish" })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(AdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: "Admin ma'lumotlarini o'zgartirish" })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "Admin o'chirish" })
  @ApiResponse({ status: 201, type: Admin })
  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
