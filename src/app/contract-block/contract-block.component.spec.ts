import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractBlockComponent } from './contract-block.component';

describe('ContractBlockComponent', () => {
  let component: ContractBlockComponent;
  let fixture: ComponentFixture<ContractBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
