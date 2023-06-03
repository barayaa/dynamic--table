import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(
    private http: HttpClient,
  
    private router: Router,
    private httpService: HttpService,
    private fb: FormBuilder
    ) {}

  userList: User[] = [] ;
  loading = false
  isVisible = false;
  addUserForm!: FormGroup;
  headArray =  [
    {'Head': 'Nom', 'FieldName': 'nom',compare: (a: any, b: any) => a.name.localeCompare(b.name) ,},
    {'Head': 'Prenom', 'FieldName': 'prenom', compare: (a: any, b: any) => a.name.localeCompare(b.username),  width: '25%'},
    {'Head': 'Email', 'FieldName': 'email', compare: (a: any, b: any) => a.name.localeCompare(b.email),  width: '20%'}  ,
    {'Head': 'Telephone', 'FieldName': 'telephone', compare: (a: any, b: any) => a.name.localeCompare(b.phone), width: '20%' },
    {'Head': '', 'FieldName': '' ,  width: '15%'}
  ]
  
  url = 'http://localhost:3000/user';
  ngOnInit() {
    this.loadUsers();

    this.addUserForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],      
    })
  }



  loadUsers() {
    this.loading = true;
    this.httpService.get<User[]>(this.url).subscribe(
      (response: any) => {
        this.loading = false;
        console.log(response);
        this.userList = response.map((user: User) => ({
          ...user,
          // canEdit: (user.name === 'Chelsey Dietrich'),
          //  canDelete: (user.id == 7),
        }));
      }
    )
  }
  
  onDelete(item:any){
    this.httpService.delete<User>(`${this.url}/${item.id}`).subscribe(
      (response: any) => { 
        console.log(response);
        this.loadUsers();
      })
  }

  Edit(item: any) {
    item.showSpinner = true;
    this.router.navigate(['user-detail/' + item.id]);
     item.showSpinner = false; 
  }

  add() {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }
}


