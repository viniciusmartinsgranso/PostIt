import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavbarEnum } from '../../models/enum/navbar.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent   {

  constructor(
    private readonly router: Router,
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        console.log(route);

        if (route.url.includes('/feed'))
          this.currentNavbar = NavbarEnum.FEED;

        if (route.url.includes('/home'))
          this.currentNavbar = NavbarEnum.HOME;

        if (route.url.includes('/profile'))
          this.currentNavbar = NavbarEnum.PROFILE;

        console.log(this.currentNavbar);
      });
  }

  public navbarEnum: typeof NavbarEnum = NavbarEnum;

  public routeSubscription: Subscription;

  public currentNavbar: NavbarEnum = NavbarEnum.HOME;


}
