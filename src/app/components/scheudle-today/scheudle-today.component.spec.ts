import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheudleTodayComponent } from './scheudle-today.component';

describe('ScheudleTodayComponent', () => {
  let component: ScheudleTodayComponent;
  let fixture: ComponentFixture<ScheudleTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheudleTodayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheudleTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
