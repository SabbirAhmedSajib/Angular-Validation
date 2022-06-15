import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfovalidationComponent } from './userinfovalidation.component';

describe('UserinfovalidationComponent', () => {
  let component: UserinfovalidationComponent;
  let fixture: ComponentFixture<UserinfovalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfovalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfovalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
