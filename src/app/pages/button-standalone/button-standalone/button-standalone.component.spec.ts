import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStandaloneComponent } from './button-standalone.component';

describe('ButtonStandaloneComponent', () => {
  let component: ButtonStandaloneComponent;
  let fixture: ComponentFixture<ButtonStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
