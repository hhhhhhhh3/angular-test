import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendModalComponent } from './friend-modal.component';

describe('FriendModalComponent', () => {
  let component: FriendModalComponent;
  let fixture: ComponentFixture<FriendModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FriendModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FriendModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should return invalid friendForm`, () => {
    const fixture = TestBed.createComponent(FriendModalComponent);
    const friendModalComponent = fixture.componentInstance;
    const name = friendModalComponent.friendForm.controls['name'];
    name.setValue("");
    expect(friendModalComponent.friendForm.invalid).toBeTrue();
  });

  it(`should return valid friendForm`, () => {
    const fixture = TestBed.createComponent(FriendModalComponent);
    const friendModalComponent = fixture.componentInstance;
    const name = friendModalComponent.friendForm.controls['name'];
    name.setValue("Pepe");
    expect(friendModalComponent.friendForm.valid).toBeTrue();
  });
});
