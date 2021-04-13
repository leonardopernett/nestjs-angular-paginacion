import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise'

@Injectable()
export class DatabaseService {

  private pool = mysql.createPool({
      host:'localhost',
      database:'pagination',
      user:'root',
      password:'',
  })
   
    getConnection(){
      return this.pool
    }
}
