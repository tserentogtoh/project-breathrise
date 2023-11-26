import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post('register')
    @ApiOperation({})
    async register(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }
}
