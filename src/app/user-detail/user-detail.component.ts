import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  userId!: number;
  userDetail! : User;
  constructor(private route: ActivatedRoute,private router : Router,
    private httpService: HttpService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      console.log(this.userId); 
    });
    this.httpService.get<User>('http://localhost:3000/user/'+this.userId).subscribe(
      (response: any) => {
        console.log(response);
        this.userDetail = response;
      }
    )
  }


  bcakToUserList(){
    this.router.navigate(['/users']);
  }




}
