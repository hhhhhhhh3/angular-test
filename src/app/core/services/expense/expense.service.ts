import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../../models/expense.model';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiURL = 'http://localhost:8080/expense';

  constructor(private http: HttpClient) { }

  getExpensesById(id: Number): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiURL}/friend/${id}`);
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.apiURL}`);
  }

  saveExpense(id: number, expense: Expense) {
    return this.http.post<HttpHeaderResponse>(`${this.apiURL}/${id}`, expense);
  }

}

