import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLabelsStandaloneComponent } from './floating-labels-standalone.component';

describe('FloatingLabelsStandaloneComponent', () => {
  let component: FloatingLabelsStandaloneComponent;
  let fixture: ComponentFixture<FloatingLabelsStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FloatingLabelsStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingLabelsStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
