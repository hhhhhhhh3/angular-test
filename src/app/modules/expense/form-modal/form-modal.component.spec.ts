import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form-modal.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should return invalid form`, () => {
    const fixture = TestBed.createComponent(FormComponent);
    const formComponent = fixture.componentInstance;
    const description = formComponent.expenseForm.controls['description'];
    description.setValue('Juan')
    expect(formComponent.expenseForm.invalid).toBeTrue();
  });

  it(`should return valid form`, () => {
    const fixture = TestBed.createComponent(FormComponent);
    const formComponent = fixture.componentInstance;
    const description = formComponent.expenseForm.controls['description'];
    const idFriend = formComponent.expenseForm.controls['idFriend'];
    const amount = formComponent.expenseForm.controls['amount'];
    const date = formComponent.expenseForm.controls['date'];
    description.setValue('Juan');
    idFriend.setValue(1);
    amount.setValue(20);
    date.setValue(new Date());
    expect(formComponent.expenseForm.valid).toBeTrue();
  });

});
