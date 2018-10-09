import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsConfirmationComponent } from './buttons-confirmation.component';

describe('ButtonsConfirmationComponent', () => {
  let component: ButtonsConfirmationComponent;
  let fixture: ComponentFixture<ButtonsConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
