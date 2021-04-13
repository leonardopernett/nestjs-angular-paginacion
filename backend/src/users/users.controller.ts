import { Controller, Get, Query, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import {Response} from 'express'

@Controller('users')
export class UsersController {

 constructor(private UsersService:UsersService){}

 @Get('/')
 async getAllUser(@Query('page') page, @Res() res:Response){
   const limit  = 5
   const offset = (page - 1) * limit
   const users = await this.UsersService.getuser(limit, offset)
   return res.json(users[0])
 }

}
