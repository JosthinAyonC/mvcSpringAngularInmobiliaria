import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmxInmuebleComponent } from './modal-confirmx-inmueble.component';

describe('ModalConfirmxInmuebleComponent', () => {
  let component: ModalConfirmxInmuebleComponent;
  let fixture: ComponentFixture<ModalConfirmxInmuebleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmxInmuebleComponent]
    });
    fixture = TestBed.createComponent(ModalConfirmxInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
