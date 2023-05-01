import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userList: User[] = [] ;
  loading = false
  headArray =  [
    {'Head': 'Names', 'FieldName': 'name',compare: (a: any, b: any) => a.name.localeCompare(b.name) ,},
    {'Head': 'Username', 'FieldName': 'username', compare: (a: any, b: any) => a.name.localeCompare(b.username),  width: '25%'},
    {'Head': 'Email', 'FieldName': 'email', compare: (a: any, b: any) => a.name.localeCompare(b.email),  width: '20%'}  ,
    {'Head': 'Phone', 'FieldName': 'phone', compare: (a: any, b: any) => a.name.localeCompare(b.phone), width: '20%' },
    {'Head': '', 'FieldName': '' ,  width: '15%'}
  ]
  constructor(
    private http: HttpClient,
    private userService: UserService, 
    private router: Router
    ) {}

  ngOnInit() {
    this.loadUsers();
  }



  loadUsers() {
    this.loading = true;
    this.userService.getUser().subscribe(
      (response: any) => {
        this.loading = false;
        this.userList = response.map((user: User) => ({
          ...user, 
         // canEdit: (user.name === 'Chelsey Dietrich'),
          canDelete: (user.id % 2 === 0),
        }));
  
      
      }
    )
  }
  
  onDelete(item:any){
    console.log(item);
  }

  Edit(item: any) {
    item.showSpinner = true;
    this.router.navigate(['user-detail/' + item.id]);
     item.showSpinner = false; 
  }

  Delete(item: any) {
    console.log(item);
  }

}


