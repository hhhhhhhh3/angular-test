import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Friend } from 'src/app/core/models/friend.model';
import { FriendService } from 'src/app/core/services/friend/friend.service';

@Component({
  selector: 'app-friend-modal',
  templateUrl: './friend-modal.component.html',
  styleUrls: ['./friend-modal.component.css']
})

export class FriendModalComponent implements OnInit {

  @Output("onClose")
  onClose = new EventEmitter<boolean>;

  @Output("onSave")
  onSave = new EventEmitter<boolean>;

  friendForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });;
  friends: Friend[] = [];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {

  }

  saveFriend() {
    this.friendService.addFriend(this.friendForm.getRawValue()).subscribe(() => {
      this.onSave.emit(true);
    });
  }

  getFriends() {
    this.friendService.getFriends().subscribe(res => {
      this.friends = res;
    });
  }

  getFriend(idFriend: number) {
    this.friendService.getFriendById(idFriend).subscribe(res => { console.log(res) })
  }

  closeModal() {
    this.onClose.emit(true);
  }
}
