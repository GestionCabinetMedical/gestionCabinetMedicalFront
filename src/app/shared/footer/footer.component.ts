import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  test: Date = new Date();
  constructor(public location: Location) { }

  ngOnInit(): void {
  }

  isLogin() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '#/login') {
      return true;
    }
    else {
      return false;
    }
  }

}

