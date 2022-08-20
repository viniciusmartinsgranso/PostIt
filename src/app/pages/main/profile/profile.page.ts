import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from '../../../../environments/environment';
import { ProfileModalComponent } from '../../../components/profile-modal/profile-modal.component';
import { PostItColorEnum } from '../../../models/enums/post-it-color.enum';
import { FeedPostItProxy } from '../../../models/proxies/feed-post-it.proxy';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';
import { HelperService } from '../../../services/helper.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private readonly modalController: ModalController,
    private readonly helper: HelperService,
    private readonly noteService: NoteService,
  ) { }

  public postItList: FeedPostItProxy[];

  public user: UserProxy;

  public isLoading: boolean = false;

  ngOnInit() {
  }

  public async ionViewDidEnter(): Promise<void> {
    this.isLoading = true;
    const [note, message] = await this.noteService.getMyFeedNotes();

    await this.noteService.getMyNotes();
    const success = JSON.parse(localStorage.getItem(environment.keys.user));
    this.isLoading = false;

    if (!success) {
      await this.helper.showToast('Erro ao carregar usuário.');
    }

    if (!note) {
      return void await this.helper.showToast(message);
    }

    this.postItList = note;
    this.user = success;
  }

  public async openProfileModal(): Promise<void> {
    const modal = await this.modalController.create({
      mode: 'md',
      component: ProfileModalComponent,
      cssClass: 'background-profile-modal',
    });
    await modal.present();
  }

}
