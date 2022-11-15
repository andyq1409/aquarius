import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  username: String = '';
  password: String = '';
  roles: string[] = [];
  operation: String | undefined;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('page login ngOnInit');
    this.isLoggedIn = this.tokenStorage.isLoggedIn();
    if (this.isLoggedIn) {
      console.log('page login redirect to home');
      this.router.navigate(['/aqua']);
    }
    this.operation = this.route.snapshot.data['oper'];
    console.log(this.route.snapshot);
  }

  onSubmit(): void {
    console.log('on Submit call');
    this.authService.login2(this.username, this.password).subscribe({
      next: (data) => {
        console.log(data);
        if (data.status == 200) {
          console.log('Authorization' + data.headers.get('X-Authorization'));
          this.tokenStorage.saveToken(data.headers.get('X-Authorization'));
          this.tokenStorage.saveUser(this.username);
          this.tokenStorage.saveUserName(data.body.imie + ' ' + data.body.nazwisko);
          this.roles = data.body.roles;
          this.router.navigate(['/aqua']);
        }
      },
      error: (err) => {
        console.log('error');
        console.log(err);
        if (err.status == 401 && err.error.message.includes("account expired")) {
          console.log('account expired')
          this.router.navigate(['/chgpasswd']);
        }
      },
    });
  }

  printModel(title: NgModel) {
    console.log(title)
  }
}
