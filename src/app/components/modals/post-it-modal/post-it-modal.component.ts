import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostItColorEnum } from '../../../models/enums/post-it-color.enum';
import { PostItPayload } from '../../../models/payloads/post-it.payload';
import { HelperService } from '../../../services/helper.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-post-it-modal',
  templateUrl: './post-it-modal.component.html',
  styleUrls: ['./post-it-modal.component.scss'],
})
export class PostItModalComponent implements OnInit {
  constructor(
    private readonly modalController: ModalController,
    private readonly note: NoteService,
    private readonly helper: HelperService
  ) {}

  @Input()
  public color: PostItColorEnum;

  @Input()
  public create: boolean = false;

  @Input()
  public postIt: PostItPayload = {
    id: 0,
    title: '',
    annotation: '',
    color: PostItColorEnum.BLUE,
    isPublic: false,
  };

  public isLoading: boolean = false;

  ngOnInit() {
    if (!this.color) {
      this.color = this.postIt.color;
    }
  }

  public async savePostIt(): Promise<void> {
    this.postIt.color = this.color;

    this.isLoading = true;

    const [postit, message] = this.postIt.id
      ? await this.note.update(this.postIt)
      : await this.note.create(this.postIt);

    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    await this.modalController.dismiss({ postit });
  }

  public async deletePostIt(): Promise<void> {
    this.isLoading = true;
    const [, message] = await this.note.delete(this.postIt.id);
    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    await this.modalController.dismiss({ postit: this.postIt, isDeleted: true });
  }

  public async publishPostIt(): Promise<void> {
    this.isLoading = true;
    const [, message] = await this.note.publish(this.postIt);
    this.isLoading = false;

    if (message) {
      return this.helper.showToast(message, 5_000);
    }

    this.postIt.isPublic = true;

    await this.modalController.dismiss({ postit: this.postIt });
  }

  public closeModal(): void {
    this.modalController.dismiss({ isDeleted: false });
  }
}
