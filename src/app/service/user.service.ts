import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';


const apiUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})




export class UserService {



  constructor(
    private http: HttpClient
  ) { }


  getUser():Observable<User[]>{
    return this.http.get<User[]>(apiUrl)
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${apiUrl}/${id}`)
  }


  



}
