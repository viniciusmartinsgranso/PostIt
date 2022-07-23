import { Component, OnInit } from '@angular/core';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  public postItList: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do Post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: '#FEF496',
    },
    {
      id: 1,
      title: 'Título do Post1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: '#FEB196',
    },
    {
      id: 2,
      title: 'Título do Post2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: '#D7DF6B',
    },
    {
      id: 3,
      title: 'Título do Post3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: '#F77D60',
    },
    {
      id: 4,
      title: 'Título do Post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: '#C390BC',
    },
    {
      id: 5,
      title: 'Título do Post5',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: '#F77D60',
    },
  ];

  ngOnInit() {
  }

}
