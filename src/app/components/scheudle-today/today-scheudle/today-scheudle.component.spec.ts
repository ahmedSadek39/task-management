import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayScheudleComponent } from './today-scheudle.component';

describe('TodayScheudleComponent', () => {
  let component: TodayScheudleComponent;
  let fixture: ComponentFixture<TodayScheudleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayScheudleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayScheudleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
