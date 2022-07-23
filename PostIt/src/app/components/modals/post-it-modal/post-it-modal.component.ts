import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostItColorEnum } from '../../../models/enum/post-it-color.enum';
import { PostItPayload } from '../../../models/payloads/post-it.payload';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';

@Component({
  selector: 'app-post-it-modal',
  templateUrl: './post-it-modal.component.html',
  styleUrls: ['./post-it-modal.component.scss'],
})
export class PostItModalComponent implements OnInit {

  constructor(
    private readonly modalController: ModalController,
  ) { }

  @Input()
  public color: PostItColorEnum;

  @Input()
  public create: boolean = false;

  @Input()
  public postIt: PostItPayload = {
    id: 6,
    title: '',
    annotation: '',
    color: PostItColorEnum.BLUE
  };

  public ngOnInit() {
    if (!this.color)
      this.color = this.postIt.color;
    console.log(this.postIt);
  }

  public async sendPostIt(): Promise<void> {
    console.log(this.postIt);
    this.postIt.color = this.color;
    await this.modalController.dismiss(this.postIt);
  }

}
