import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsSidebarBasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: NsSidebarBasicComponent;
  let fixture: ComponentFixture<NsSidebarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsSidebarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsSidebarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
