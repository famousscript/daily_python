import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationTableComponent } from './certification-table.component';

describe('AComponentComponent', () => {
  let component: CertificationTableComponent;
  let fixture: ComponentFixture<CertificationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CertificationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
