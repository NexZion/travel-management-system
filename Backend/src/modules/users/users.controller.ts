import { Controller, Get, Patch, Body, UseGuards, Param, Query, } from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard'
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UsersService } from './users.service';
import { UpdateProfileDto }from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';
import { GetUsersDto } from './dto/get-users.dto';

@Controller('users')
export class UsersController {


  constructor( private usersService: UsersService, ){}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(
  @CurrentUser() user,
  ){
    console.log("CURRENT USER:", user);
    return this.usersService.getProfile(
      user.id ?? user.sub
  );
  }

  @Patch('profile')
  @UseGuards(JwtAuthGuard)
  updateProfile(
  @CurrentUser() user,
  @Body() dto:UpdateProfileDto,
  ){
  return this.usersService.updateProfile(
    user.id,
    dto
  );
  }

  @Patch('change-password')
  @UseGuards(JwtAuthGuard)
  changePassword(
  @CurrentUser() user,
  @Body() dto:ChangePasswordDto,
  ){
  return this.usersService.changePassword(
    user.id,
    dto
  );
  }

  @Patch(':id/status')
  @UseGuards(
  JwtAuthGuard,
  RolesGuard
  )
  @Roles('ADMIN')
  updateStatus(

  @Param('id') id:string,

  @Body() dto:UpdateUserStatusDto,

  ){

  return this.usersService.updateStatus(
    id,
    dto.status
  );

  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  getAllUsers(
    @Query() query: GetUsersDto,
  ) {
    return this.usersService.findAll(query);
  }
}