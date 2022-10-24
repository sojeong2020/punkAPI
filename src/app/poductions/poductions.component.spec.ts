import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductionsComponent } from './poductions.component';

describe('PoductionsComponent', () => {
  let component: PoductionsComponent;
  let fixture: ComponentFixture<PoductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
