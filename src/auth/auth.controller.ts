import { Controller, Get, Post, Render } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  @Render("./auth/auth.ejs")
  @Get("/login")
  getlogin(){ 
  }

  @Render("./register/registerupdate.ejs")
  @Get("/signup")
  getsignup(){ 
  }

  @Post("/signup")
  postsignup(){
    
  let res = this.authService.postsignup();

  }


  


}
