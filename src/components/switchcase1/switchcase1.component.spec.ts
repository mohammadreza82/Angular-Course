import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchcase1Component } from './switchcase1.component';

describe('Switchcase1Component', () => {
  let component: Switchcase1Component;
  let fixture: ComponentFixture<Switchcase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchcase1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchcase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
