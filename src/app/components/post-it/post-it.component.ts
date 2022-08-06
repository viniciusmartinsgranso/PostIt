import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostItProxy } from '../../models/proxies/post-it.proxy';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss'],
})
export class PostItComponent {

  constructor() { }

  @Input()
  public postIt: PostItProxy;

  @Output()
  public postItSelected: EventEmitter<PostItProxy> = new EventEmitter<PostItProxy>();

  public onClickCard(): void {
    this.postItSelected.emit(this.postIt);
  }
}
