import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {

  constructor() { }

  @Input()
  public src: string = '';

  @Input()
  public full: boolean = false;

  @Output()
  public onClick: EventEmitter<boolean> = new EventEmitter();

  public sendEvent(): void {
    this.onClick.emit(true);
  }

}
