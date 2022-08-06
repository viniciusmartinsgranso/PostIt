import { Component, OnInit } from '@angular/core';
import { FeedPostItProxy } from '../../../models/proxies/feed-post-it.proxy';
import { PostItProxy } from '../../../models/proxies/post-it.proxy';
import { HttpAsyncService } from '../../../modules/http-async/services/http-async.service';
import { HelperService } from '../../../services/helper.service';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {

  constructor(
    private readonly note: NoteService,
    private readonly helper: HelperService,
  ) {
  }

  public postItList: FeedPostItProxy[] = [];

  public isLoading: boolean = false;

  public async ionViewDidEnter(): Promise<void> {
    await this.loadFeedNotes();
  }

  public async loadFeedNotes(): Promise<void> {
    this.isLoading = true;
    const [postits, message] = await this.note.getFeedNotes();
    this.isLoading = false;

    if (message) return this.helper.showToast(message, 5_000);

    this.postItList = postits;
  }

}
