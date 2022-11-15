import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent  implements OnInit {
  isLoggedIn = false;
  operation: String | undefined;
  tittle: String = "Register";
  descr: String = "Create your account";
  btnLabel: String = "Create Account";

  oldPasswd: String = '';
  newPasswd: String = '';
  repPasswd: String = '';
  userName: String = '';
  email: String = '';

  constructor(
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
    console.log(this.route.snapshot);
    this.operation = this.route.snapshot.data['oper'];
    if (this.operation == "chgpasswd") {
      this.tittle = "Wymagana zmiana wygasłego hasła";
      this.descr = "";
      this.btnLabel = "Zmień hasło";
    }
  }

  visOfReg(): boolean {
    return this.operation == "register";
  }
  
  onSubmit(): void {
    console.log('on Submit call');
  }

  printModel(title: NgForm, field: NgModel) {
    console.log(title);
    console.log(field);
  }
}
