import { Injectable } from '@nestjs/common';
import {Pool} from "pg";

var pool = new Pool({ 
  user: 'postgres',
  host: 'localhost',
  database: 'hotel',
  password: '12345',
});
@Injectable()
export class AuthService {

postsignup(){ 





}

}
