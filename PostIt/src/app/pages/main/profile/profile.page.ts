import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileModalComponent } from '../../../components/profile-modal/profile-modal.component';
import { PostItColorEnum } from '../../../models/enum/post-it-color.enum';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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

  public user = {
    photoUrl: 'assets/images/user/vini.jpg',
    name: 'Vini',
    job: 'Developer'
  };

  ngOnInit() {
  }

  public async openProfileModal(): Promise<void> {
    const modal = await this.modalController.create({
      mode: 'md',
      component: ProfileModalComponent,
      cssClass: 'background-modal',
    });
    await modal.present();
  }

}
