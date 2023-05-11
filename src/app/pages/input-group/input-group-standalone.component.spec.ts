import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupStandaloneComponent } from './input-group-standalone.component';

describe('InputGroupStandaloneComponent', () => {
  let component: InputGroupStandaloneComponent;
  let fixture: ComponentFixture<InputGroupStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGroupStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGroupStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
