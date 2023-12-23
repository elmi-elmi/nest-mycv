import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private services: UsersService){}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto){
        console.log('UserController::CreateUser - body: ',body)
        this.services.create(body.email, body.password)
    }
}
