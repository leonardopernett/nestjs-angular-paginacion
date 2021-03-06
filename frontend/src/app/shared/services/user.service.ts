import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http:HttpClient) { }

   getUsers(page){
     return this.http.get(`http://localhost:3000/users?page=${page}`)
   }

}
