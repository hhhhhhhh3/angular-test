import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupComponent } from './group.component';

describe('FriendEexpenseComponent', () => {
  let component: GroupComponent;
  let fixture: ComponentFixture<GroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GroupComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
