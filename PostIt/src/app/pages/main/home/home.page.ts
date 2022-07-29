import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostItModalComponent } from '../../../components/modals/post-it-modal/post-it-modal.component';
import { PostItColorEnum } from '../../../models/enum/post-it-color.enum';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private readonly modalController: ModalController,
  ) { }

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

  public colorEnum: typeof PostItColorEnum = PostItColorEnum;

  public ngOnInit(): void {
    console.log(this.colorEnum);
  }

  public printOutput(event: PostItProxy): void {
    console.log('printout');
  }

  public async openNewPostItModal(color: string): Promise<void> {
    const modal = await this.modalController.create({
      mode: 'ios',
      component: PostItModalComponent,
      componentProps: { color, create: true },
      cssClass: 'background-modal',
      showBackdrop: false,
    });
    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      if (data.postIt) {
        this.postItList.push(data.postIt);
      }
    });
  }

  public async openPostItModal(postIt: PostItProxy): Promise<void> {
    const modal = await this.modalController.create({
      component: PostItModalComponent,
      cssClass: 'background-modal',
      componentProps: {
        postIt,
      },
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      console.log(data);
      if (data.isDeleted) {
        this.postItList = this.postItList.filter(post => post.id !== data.postIt.id);
      }
    });
  }

}
