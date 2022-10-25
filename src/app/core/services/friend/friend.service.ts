import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from '../../models/friend.model';
import { FriendAdapter } from '../../models/friendAdapter';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private apiURL: String = 'http://localhost:8080/friend/';

  constructor(private http: HttpClient) { }

  addFriend(friend: Friend) {
    return this.http.post<Friend>(`${this.apiURL}`, friend);
  }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>('http://localhost:8080/friends/');
  }

  getFriendById(idFriend: number): Observable<Friend> {
    return this.http.get<Friend>(`${this.apiURL}${idFriend}`);
  }

  setPayOfFriendTransaction(friend: Friend) {
    return this.http.post<Friend>(`${this.apiURL}`, friend);
  }

  getFriendBalance() {
    return this.http.get<FriendAdapter[]>(`${this.apiURL}balance`)
  }

}
