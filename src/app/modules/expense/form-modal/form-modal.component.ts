import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Friend } from 'src/app/core/models/friend.model';
import { ExpenseService } from 'src/app/core/services/expense/expense.service';
import { FriendService } from 'src/app/core/services/friend/friend.service';

@Component({
  selector: 'app-form',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormComponent implements OnInit {

  @Output("onClose")
  onClose = new EventEmitter<boolean>;

  @Output("onSave")
  onSave = new EventEmitter<boolean>;

  public expenseForm: FormGroup = new FormGroup({
    idFriend: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  });

  public friends: Friend[] = [];

  constructor(private expenseService: ExpenseService, private friendService: FriendService) {
  }

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends() {
    this.friendService.getFriends().subscribe(res => { this.friends = res });
  }

  saveExpense() {
    if (this.expenseForm.valid) {
      this.expenseService.saveExpense(this.getSelectedIdFriend(), this.expenseForm.value)
        .subscribe(() => { this.onSave.emit(true); }
        );
    } else throw new Error("Los campos no están completos");
  }


  private getSelectedIdFriend(): number {
    let idFriend: number = 0;
    this.friends.filter(item => { if (item.id == this.expenseForm.value.idFriend) { idFriend = item.id } })
    return idFriend;
  }

  closeModal() {
    this.onClose.emit(true);
  }
}
