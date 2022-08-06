import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavbarEnum } from '../../models/enums/navbar.enum';
import { NavbarItemInterface } from '../../models/interfaces/navbar-item.interface';

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

  public navbarList: NavbarItemInterface[] = [
    {
      type: NavbarEnum.FEED,
      link: '/feed',
      icon: 'assets/images/navbar-feed.svg',
      iconActivated: 'assets/images/navbar-feed-selected.svg',
    },
    {
      type: NavbarEnum.HOME,
      link: '/home',
      icon: 'assets/images/navbar-home.svg',
      iconActivated: 'assets/images/navbar-home-selected.svg',
    },
    {
      type: NavbarEnum.PROFILE,
      link: '/profile',
      icon: 'assets/images/navbar-profile.svg',
      iconActivated: 'assets/images/navbar-profile-selected.svg',
    }
  ];


}
