import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetestingComponent } from './servicetesting.component';

describe('ServicetestingComponent', () => {
  let component: ServicetestingComponent;
  let fixture: ComponentFixture<ServicetestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicetestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicetestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
