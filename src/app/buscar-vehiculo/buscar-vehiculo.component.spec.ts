import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVehiculoComponent } from './buscar-vehiculo.component';

describe('BuscarVehiculoComponent', () => {
  let component: BuscarVehiculoComponent;
  let fixture: ComponentFixture<BuscarVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
