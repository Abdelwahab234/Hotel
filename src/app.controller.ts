import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as express from "express";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Render("./home/home.ejs")
  @Get()
  getHello(@Res() res : express.Response) {

  }
}
