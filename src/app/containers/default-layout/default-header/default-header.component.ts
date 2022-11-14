import { Component, Input } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
//import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = 'sidebar';
  user: String = "";

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  constructor(
    private classToggler: ClassToggleService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
  }

  logout(): void {  
    console.log('call logout()');
    this.tokenStorage.signOut();
    console.log('after logout()');
    this.router.navigate(['']);
  }
}
