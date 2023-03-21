import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userList: any[]  =[] ;
  loading = false
  headArray =  [
    {'Head': 'Names', 'FieldName': 'name',compare: (a: any, b: any) => a.name.localeCompare(b.name) ,},
    {'Head': 'Username', 'FieldName': 'username', compare: (a: any, b: any) => a.name.localeCompare(b.username),  width: '25%'},
    {'Head': 'Email', 'FieldName': 'email', compare: (a: any, b: any) => a.name.localeCompare(b.email),  width: '20%'}  ,
    {'Head': 'Phone', 'FieldName': 'phone', compare: (a: any, b: any) => a.name.localeCompare(b.phone), width: '20%' },
    {'Head': '', 'FieldName': '' ,  width: '15%'}
  ]
  constructor(private http: HttpClient) {}

  vrai :boolean = true;
  editer: boolean = true;
  city:any
  length:any
  items:any
  ngOnInit() {
    this.loadUsers();
  }



  loadUsers() {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {
        this.loading = false;
        this.userList = response.map((user: any) => ({
          ...user, 
         // canEdit: (user.name === 'Chelsey Dietrich'),
          canDelete: (user.id % 2 === 0),
          
        }));
  
        console.log(this.userList);
      }
    )
  }
  
  onDelete(item:any){
    console.log(item);
  }



  
  



  Edit(item: any) {
    item.showSpinner = true;
    console.log(item);
    item.showSpinner = false;
    
  }

  Delete(item: any) {
    console.log(item);
  }

}


// .map((el => ({
//   ...el, 
//   compare : ,
// })));



// <!-- <app-my-table [HeadArray]="" [Data]="userList"></app-my-table> -->
// <!-- <app-my-table  [HeadArray]="headArray" [Data]="userList"
// *ngIf="vrai != false"
//     (onEdit)="Edit($event) " 
//  (onDelete)="Delete($event)">
// </app-my-table>             -->

// <!-- <app-my-table  
// [HeadArray]="headArray" 
// [Data]="userList" 
// (onEdit)="Edit($event)" 
// (onDelete)="city != 1 ? Delete($event) : ''">
// </app-my-table> -->


  
  // loadUsers() {
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
  //     (response: any) => {
  //       this.userList = response; 
  
  //       for (let i = 0; i < this.userList.length; i++) {
  //         // Ajouter la propriété canDelete pour chaque élément
  //         this.userList[i].canDelete = (this.userList[i].id % 2 === 0); // exemple de condition
  //       }
  
  //       this.length = response.length ;
  //       console.log('length', this.length);
          
  //       this.city = response[0].id;
  //       console.log(this.city);
  //       console.log(this.userList);
  //     }
  //   )
  // }

  // loadUsers() {
  //   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
  //     (response: any) => {
  //      // this.userList = response as any [];
  //       this.userList = response; 
  //       this.length = response.length ;
  //       console.log('length', this.length);
        
  //       this.city = response[0].id;
  //       console.log(this.city);
  //       console.log(this.userList);
  //     }
  //   )


  // }
