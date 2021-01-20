import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { IUser } from 'src/app/ViewModels/iuser';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user: IUser;
  users:IUser[]=[];
  public id: Guid | any;
  constructor(
    private userService: AuthenticationService,
    private router: Router
  ) {
    this.user = { Name: '', Password: '' };
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);
    this.userService.login(this.user.Name, this.user.Password)
      .subscribe(
        
        (res) => {
          console.log(res);
          this.id = Guid.create();
          console.log(this.id);
          localStorage.setItem('UserToken', this.id);
          this.router.navigate(['/Products']);
        },
        (err) => { 
          alert("Not Authorized access");
          console.log(err); }
      );
  }

}
