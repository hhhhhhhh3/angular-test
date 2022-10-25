import { Component, OnInit, ViewChild } from '@angular/core';
import { Expense } from './core/models/expense.model';
import { Friend } from './core/models/friend.model';
import { FriendAdapter } from './core/models/friendAdapter';
import { ExpenseService } from './core/services/expense/expense.service';
import { FriendService } from './core/services/friend/friend.service';
import { FormComponent } from './modules/expense/form-modal/form-modal.component';
import { FriendModalComponent } from './modules/friend/friend-modal/friend-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(FriendModalComponent)
  friendModalComponent!: FriendModalComponent;
  @ViewChild(FormComponent)
  formComponent!: FormComponent;

  expenses: Expense[];
  friendsAdapter: FriendAdapter[];
  isExpenseModalOpen: boolean;
  isFriendModalOpen: boolean;

  constructor(private expenseService: ExpenseService, private friendService: FriendService) {
    this.isExpenseModalOpen = false;
    this.isFriendModalOpen = false;
    this.expenses = [];
    this.friendsAdapter = [];
  }


  ngOnInit(): void {
    this.getExpensesData();
  }


  getExpensesData() {
    this.expenseService.getExpenses().subscribe((response: Expense[]) => {
      this.expenses = response
      this.calculateDebt();
    });
  }

  private calculateDebt() {
    this.friendService.getFriendBalance().subscribe(response => {
      this.friendsAdapter = response;
    })
  }

  showFriendModalToggle(show: boolean) {
    this.isFriendModalOpen = show;
  }

  showExpenseModalToggle(show: boolean) {
    this.isExpenseModalOpen = show;
  }

  public getColor(balance: number): string {
    return balance > 0 ? "green" : "red";
  }

  title = 'splitAuFront';
}
