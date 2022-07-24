import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostItColorEnum } from '../../../models/enum/post-it-color.enum';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.page.html',
  styleUrls: ['./feed-detail.page.scss'],
})
export class FeedDetailPage implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.postItId = +this.activatedRoute.snapshot.params.id;
  }

  public postItList: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do Post',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.YELLOW,
      comments: [
        {
          comment:'Ótimas dicas Ana. Você faz o uso de algum app de controle financeiro da sua rotina. Já ouviu falar sobre o \'\'Mobills\'\'.Esse aplicativo de controle financeiro funciona de uma maneira simples, funcional e intuitiva. Com ele, você consegue organizar todos seus ganhos e gastos divididos por categorias.',
        },
        {
          comment:'Ótimas dicas Ana. Você faz o uso de algum app de controle financeiro da sua rotina. Já ouviu falar sobre o \'\'Mobills\'\'.Esse aplicativo de controle financeiro funciona de uma maneira simples, funcional e intuitiva. Com ele, você consegue organizar todos seus ganhos e gastos divididos por categorias.',
        },
      ],
    },
    {
      id: 1,
      title: 'Título do Post1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.ROSE,
      comments: [
        {
          comment:'Ótimas dicas Ana. Você faz o uso de algum app de controle financeiro da sua rotina. Já ouviu falar sobre o \'\'Mobills\'\'.Esse aplicativo de controle financeiro funciona de uma maneira simples, funcional e intuitiva. Com ele, você consegue organizar todos seus ganhos e gastos divididos por categorias.',
        },
        {
          comment:'wfuhwe8yfwheufhwef',
        },
      ],
    },
    {
      id: 2,
      title: 'Título do Post2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.GREEN,
      comments: [],
    },
    {
      id: 3,
      title: 'Título do Post3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.YELLOW,
      comments: [],
    },
    {
      id: 4,
      title: 'Título do Post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.BLUE,
      comments: [],
    },
    {
      id: 5,
      title: 'Título do Post5',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex faucibus, semper ipsum non, posuere erat. In ultricies a odio sed laoreet. . Aenean sagittis, magna id rutrum fermentum, orci velit molestie urna, id auctor sem eros vitae tortor.',
      color: PostItColorEnum.PURPLE,
      comments: [],
    },
  ];

  public postIt: PostItProxy;

  public isLiked: boolean = false;

  private postItId: number = 0;

  public ngOnInit(): void {
    this.getPostIt();
  }

  public getPostIt(): void {
    this.postIt = this.postItList.find(post => post.id === this.postItId);
  }

  public async backToFeed(): Promise<void> {
    await this.router.navigate(['/feed']);
  }

}
