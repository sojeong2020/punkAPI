import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionMoreComponent } from './production-more.component';

describe('ProductionMoreComponent', () => {
  let component: ProductionMoreComponent;
  let fixture: ComponentFixture<ProductionMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
