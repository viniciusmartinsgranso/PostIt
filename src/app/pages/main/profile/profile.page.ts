import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileModalComponent } from '../../../components/profile-modal/profile-modal.component';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';
import { AuthService } from '../../../services/auth.service';
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
    private readonly auth: AuthService,
  ) { }

  public postItList: PostItProxy[];

  public user: UserProxy;

  public isLoading: boolean = false;

  public async ngOnInit(): Promise<void> {
  }

  public async ionViewDidEnter(): Promise<void> {
    this.isLoading = true;
    const [note, message] = await this.noteService.getMyNotes();

    const [user, messageGetMe] = await this.auth.getMe();
    this.user = user;

    if (!this.user) {
      await this.helper.showToast('Erro ao carregar usuário.');
    }

    if (!note) {
      return void await this.helper.showToast('Hello');
    }

    this.postItList = note;
    // this.user = success;
    this.isLoading = false;
  }

  public async openProfileModal(): Promise<void> {
    const modal = await this.modalController.create({
      mode: 'md',
      component: ProfileModalComponent,
      cssClass: 'background-profile-modal',
      componentProps: { user: this.user }
    });
    await modal.present();
  }

  public async getUserProfile(): Promise<void> {
  }

}
