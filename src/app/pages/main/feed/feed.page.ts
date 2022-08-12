import { Component } from '@angular/core';
import { FeedPostItProxy } from '../../../models/proxies/feed-post-it.proxy';
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
  ) {}

  public postItList: FeedPostItProxy[] = [];

  public isLoading: boolean = false;

  public page: number = 1;

  public async ionViewDidEnter(): Promise<void> {
    await this.loadFeedNotes();
  }

  public async loadFeedNotes(): Promise<void> {
    this.isLoading = true;
    const [postits, message] = await this.note.getFeedNotes(this.page);
    this.isLoading = false;

    if (message) return this.helper.showToast(message, 5_000);

    this.postItList = [...this.postItList, ...postits];
  }

  public async nextPage(): Promise<void> {
    this.page++;
    await this.loadFeedNotes();
  }

}
