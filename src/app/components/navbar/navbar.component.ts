import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public sideNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openSide(){
    this.sideNav = !this.sideNav;
  }
}
