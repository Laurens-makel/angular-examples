import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupFieldComponent } from './form-group-field.component';

describe('FormGroupFieldComponent', () => {
  let component: FormGroupFieldComponent;
  let fixture: ComponentFixture<FormGroupFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
