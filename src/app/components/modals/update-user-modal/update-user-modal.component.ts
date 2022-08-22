import { Component, OnInit } from '@angular/core';
import { UpdateUserPayload } from '../../../models/payloads/update-user.payload';

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.scss'],
})
export class UpdateUserModalComponent implements OnInit {

  constructor(
  ) { }

  public user: UpdateUserPayload;

  ngOnInit() {}

}
