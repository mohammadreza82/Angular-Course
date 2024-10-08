import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchcase4Component } from './switchcase4.component';

describe('Switchcase4Component', () => {
  let component: Switchcase4Component;
  let fixture: ComponentFixture<Switchcase4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchcase4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchcase4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
