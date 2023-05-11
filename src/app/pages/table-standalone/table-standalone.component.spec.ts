import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStandaloneComponent } from './table-standalone.component';

describe('TableStandaloneComponent', () => {
  let component: TableStandaloneComponent;
  let fixture: ComponentFixture<TableStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
