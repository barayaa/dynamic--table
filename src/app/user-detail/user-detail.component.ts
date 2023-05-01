import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  userId!: number;
  userDetail! : User;
  constructor(private route: ActivatedRoute,
     private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      console.log(this.userId); 
    });
    this.userService.getUserById(this.userId).subscribe(user => {
      this.userDetail = user;
      console.log(this.userDetail.company?.name);
      
    });
  }




}
