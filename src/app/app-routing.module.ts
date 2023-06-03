import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
      {
        path: '',
        pathMatch: 'full',
        component: UsersComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
  {

    path: 'user-detail/:id',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
