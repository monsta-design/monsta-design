import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsCollapseBasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: NsCollapseBasicComponent;
  let fixture: ComponentFixture<NsCollapseBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsCollapseBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsCollapseBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
