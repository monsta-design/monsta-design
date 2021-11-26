import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDemo1Component } from './demo1.component';

describe('Demo1Component', () => {
  let component: DropdownDemo1Component;
  let fixture: ComponentFixture<DropdownDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownDemo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
