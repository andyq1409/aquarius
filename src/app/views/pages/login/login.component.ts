import { Component, OnInit } from '@angular/core';
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

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log("page login ngOnInit");
    this.isLoggedIn = this.tokenStorage.isLoggedIn();
    if (this.isLoggedIn) {
      console.log("page login redirect to home");
      this.router.navigate(['/aqua']);
    }
  }

  onSubmit(): void {
    console.log('on Submit call');
  /*  this.authService
      .login2(this.username, this.password)
      .subscribe((response) => {
        console.log(response.status);
        console.log(response.headers.get('X-Authorization'));
        console.log(response.body.firstname);
        console.log(response.body.lastname);
      });*/
    
    this.authService.login2(this.username, this.password).subscribe({
      next: (data) => {
        console.log(data);
        console.log("Authorization" + data.headers.get('X-Authorization'));
        this.tokenStorage.saveToken( data.headers.get('X-Authorization') );
        this.tokenStorage.saveUser( data.body.imie + " " + data.body.nazwisko);

        this.roles = data.body.roles;
        this.router.navigate(['/aqua']);
      },
      error: (err) => {
        console.log("error");
        console.log(err);
      },
    });
  }
}
