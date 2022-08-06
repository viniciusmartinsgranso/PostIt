import { Component, Input, OnInit } from '@angular/core';
import { FeedPostItProxy } from '../../models/proxies/feed-post-it.proxy';
import { HelperService } from '../../services/helper.service';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent {

  constructor(
    private readonly helper: HelperService,
    private readonly note: NoteService,
  ) { }

  @Input()
  public postIt: FeedPostItProxy;

  public isLoading: boolean = false;

  public async setLikeToPostIt(): Promise<void> {
    this.isLoading = true;
    const [, errorMessage] = await this.note.setLikeOnPostit(this.postIt);
    this.isLoading = false;

    if (errorMessage)
      return this.helper.showToast(errorMessage, 5_000);

    this.postIt.hasLiked = !this.postIt.hasLiked;
  }

}
