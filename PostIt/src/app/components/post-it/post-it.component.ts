import { Component, Input, OnInit } from '@angular/core';
import { PostItProxy } from '../../models/proxies/post-it.proxy';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss'],
})
export class PostItComponent implements OnInit {

  constructor() { }

  @Input()
  public postIt: PostItProxy;

  ngOnInit() {}

}
