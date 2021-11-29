import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsSidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: NsSidebarComponent;
  let fixture: ComponentFixture<NsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
