import { Controller, Post, Req } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { AuthService } from './auth.services';
 
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
    login() {
        return this.authService.login()
    }

  @Post('register')
  register(@Req() req: Request) {
    console.log(req);
    
        return this.authService.register()
  }
}
