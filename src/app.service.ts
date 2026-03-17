import { Injectable, Render, Res } from '@nestjs/common';
import * as express from "express";
@Injectable()
export class AppService {

  getHello() {
    return "Hello World!";
  }
}
  