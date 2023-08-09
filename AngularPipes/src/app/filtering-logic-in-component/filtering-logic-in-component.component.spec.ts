import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringLogicInComponentComponent } from './filtering-logic-in-component.component';

describe('FilteringLogicInComponentComponent', () => {
  let component: FilteringLogicInComponentComponent;
  let fixture: ComponentFixture<FilteringLogicInComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringLogicInComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteringLogicInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
