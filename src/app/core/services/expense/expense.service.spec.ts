import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Expense } from '../../models/expense.model';

import { ExpenseService } from './expense.service';

describe('ExpenseService', () => {
  let service: ExpenseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ExpenseService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return Expenses from idFriend', () => {

    const expectedResponse: Expense[] = [
      {
        "name": "Juan Pedro",
        "description": "hola",
        "amount": 3.0,
        "date": new Date("2022-09-04T22:00:00.000+00:00"),
        "friend": {
          id: 1,
          name: "hola"
        }
      }
    ];

    const responseObject = [{

      "name": "Juan Pedro",
      "description": "hola",
      "amount": 3.0,
      "date": new Date("2022-09-04T22:00:00.000+00:00"),
      "friend": {
        id: 1,
        name: "hola"
      }
    }];
    service.getExpensesById(71).subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne("http://localhost:8080/expense/friend/71");
    req.flush(responseObject);
  })

  it('should be return array of all Expenses', () => {

    const expectedResponse: Expense[] = [
      {
        "name": "Juan Pedro",
        "description": "hola",
        "amount": 3.0,
        "date": new Date("2022-09-04T22:00:00.000+00:00"),
        "friend": {
          id: 1,
          name: "hola"
        }
      }
    ];

    const responseObject = [{

      "name": "Juan Pedro",
      "description": "hola",
      "amount": 3.0,
      "date": new Date("2022-09-04T22:00:00.000+00:00"),
      "friend": {
        id: 1,
        name: "hola"
      }
    }];
    service.getExpenses().subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne("http://localhost:8080/expense");
    req.flush(responseObject);
  })

});

