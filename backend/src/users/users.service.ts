import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {

constructor(private db:DatabaseService){}

async getuser(limit, page){
   const pool = await this.db.getConnection()
   return await pool.query('SELECT * FROM users LIMIT ? OFFSET ?',[limit, page])
}

}
