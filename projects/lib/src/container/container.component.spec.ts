import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: NsContainerComponent;
  let fixture: ComponentFixture<NsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
