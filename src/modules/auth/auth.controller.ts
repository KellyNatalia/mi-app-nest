import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDTO } from 'src/dto/login.dto';

@Controller('auth')
export class AuthController {
    //  constructor(private readonly authService: UsersService) {}
    
    //  @Post('login')
    //  login(@Body() data: LoginDTO) {
    //     return this.authService.login(data);
    // }

}
     

