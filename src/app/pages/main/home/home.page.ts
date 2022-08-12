import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostItModalComponent } from '../../../components/modals/post-it-modal/post-it-modal.component';
import { PostItColorEnum } from '../../../models/enums/post-it-color.enum';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';
import { HelperService } from '../../../services/helper.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(
    private readonly modalController: ModalController,
    private readonly note: NoteService,
    private readonly helper: HelperService,
  ) { }

  public postItList: PostItProxy[] = [];

  public colorEnum: typeof PostItColorEnum = PostItColorEnum;

  public isLoading: boolean = false;

  public async ionViewDidEnter(): Promise<void> {
    await this.loadMyNotes();
  }

  public async loadMyNotes(): Promise<void> {
    this.isLoading = true;
    const [notes, errorMessage] = await this.note.getMyNotes();
    this.isLoading = false;

    if (errorMessage) return this.helper.showToast(errorMessage, 5_000);

    this.postItList = notes;
  }

  public printOutput(event: PostItProxy): void {
    console.log('printout');
  }

  public async openPostItModal(postIt: PostItProxy): Promise<void> {
    const modal = await this.modalController.create({
      component: PostItModalComponent,
      cssClass: 'background-modal',
      backdropDismiss: true,
      componentProps: {
        postIt,
      },
    });

    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      if (data.isDeleted) {
        this.postItList = this.postItList.filter(
          (post) => post.id !== data.postit.id,
        );
      }
    });
  }

  public async openNewPostItModal(color: string): Promise<void> {
    const modal = await this.modalController.create({
      mode: 'ios',
      component: PostItModalComponent,
      componentProps: { color, create: true },
      cssClass: 'background-modal',
      backdropDismiss: true,
    });
    await modal.present();

    modal.onDidDismiss().then(async ({ data }) => {
      if (data.postIt) {
        this.postItList.push(data.postIt);
      }
    });
  }
}
