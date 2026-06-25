import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteboxComponent } from './routebox.component';

describe('RouteboxComponent', () => {
  let component: RouteboxComponent;
  let fixture: ComponentFixture<RouteboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
