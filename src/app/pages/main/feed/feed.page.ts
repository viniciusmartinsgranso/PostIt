import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiRoutes } from '../../../../environments/api-routes';
import { PostItColorEnum } from '../../../models/enums/post-it-color.enum';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';
import { HttpAsyncService } from '../../../modules/http-async/services/http-async.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(
    private readonly http: HttpAsyncService,
  ) {
    this.http.get(apiRoutes.notes.me).then(console.log);
  }

  public postItList: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do Post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.YELLOW,
    },
    {
      id: 1,
      title: 'Título do Post1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.ROSE,
    },
    {
      id: 2,
      title: 'Título do Post2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.GREEN,
    },
    {
      id: 3,
      title: 'Título do Post3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.YELLOW,
    },
    {
      id: 4,
      title: 'Título do Post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.BLUE,
    },
    {
      id: 5,
      title: 'Título do Post5',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.PURPLE,
    },
  ];


  ngOnInit() {
  }

}
