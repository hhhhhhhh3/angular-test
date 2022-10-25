import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/core/models/expense.model';
import { Friend } from 'src/app/core/models/friend.model';
import { ExpenseService } from 'src/app/core/services/expense/expense.service';
import { FriendService } from 'src/app/core/services/friend/friend.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {


  expenses: Expense[];
  friends: Friend[];
  result: any;

  constructor(private expenseService: ExpenseService, private friendService: FriendService) {
    this.friends = [];
    this.expenses = [];
  }

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe(res => { this.expenses = res });
    this.friendService.getFriends().subscribe(res => { this.friends = res });
  }
}

