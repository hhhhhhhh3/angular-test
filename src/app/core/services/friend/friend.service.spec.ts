import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Friend } from '../../models/friend.model';

import { FriendService } from './friend.service';

describe('FriendService', () => {
  let service: FriendService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FriendService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return friend from idFriend', () => {

    const expectedResponse: Friend =
    {
      "id": 1,
      "name": "Juan Pedro"
    }
      ;

    const responseObject =
    {
      "id": 1,
      "name": "Juan Pedro"
    }
      ;
    service.getFriendById(71).subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne("http://localhost:8080/friend/71");
    req.flush(responseObject);
  })

  it('should be return array of all friend', () => {

    const expectedResponse: Friend[] = [
      {
        "id": 1,
        "name": "Juan Pedro"
      },
      {
        "id": 2,
        "name": "Ignacio"
      }
    ];

    const responseObject: Friend[] = [
      {
        "id": 1,
        "name": "Juan Pedro"
      },
      {
        "id": 2,
        "name": "Ignacio"
      }
    ];

    service.getFriends().subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne("http://localhost:8080/friends/");
    req.flush(responseObject);
  })
});
