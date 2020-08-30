import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiritoriComponent } from './shiritori.component';

describe('ShiritoriComponent', () => {
  let component: ShiritoriComponent;
  let fixture: ComponentFixture<ShiritoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiritoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiritoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
