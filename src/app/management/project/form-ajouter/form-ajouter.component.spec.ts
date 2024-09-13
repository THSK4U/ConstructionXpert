import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterComponent } from './form-ajouter.component';

describe('FormAjouterComponent', () => {
  let component: FormAjouterComponent;
  let fixture: ComponentFixture<FormAjouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjouterComponent]
    });
    fixture = TestBed.createComponent(FormAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
