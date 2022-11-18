import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(
  ) {}

  ngOnInit() {}

  loginWithRedirect() {
    //this.auth.loginWithRedirect();
  }

  logout() {
    //this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
