import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/roles/role.enum';
import { ObjectIdValidation } from 'src/pipes/object-id-validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id', ObjectIdValidation) id: string) {
    return this.usersService.findOne({ id });
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(
    @Param('id', ObjectIdValidation) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', ObjectIdValidation) id: string, @Req() req: any) {
    const { sub, role } = req.user;
    if (id === sub || role === Role.Admin) {
      return this.usersService.remove(id);
    } else {
      throw new UnauthorizedException();
    }
  }
}
