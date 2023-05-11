import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeStandaloneComponent } from './range-standalone.component';

describe('RangeStandaloneComponent', () => {
  let component: RangeStandaloneComponent;
  let fixture: ComponentFixture<RangeStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RangeStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
