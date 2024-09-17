import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchcase2Component } from './switchcase2.component';

describe('Switchcase2Component', () => {
  let component: Switchcase2Component;
  let fixture: ComponentFixture<Switchcase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchcase2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchcase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
