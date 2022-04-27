import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClycleComponent } from './live-clycle.component';

describe('LiveClycleComponent', () => {
  let component: LiveClycleComponent;
  let fixture: ComponentFixture<LiveClycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveClycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveClycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
