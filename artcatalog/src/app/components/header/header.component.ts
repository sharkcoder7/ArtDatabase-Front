import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../shared';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.authService.isAuthorized().subscribe(val => {
      this.isUserLoggedIn = val;
    });
  }

}
