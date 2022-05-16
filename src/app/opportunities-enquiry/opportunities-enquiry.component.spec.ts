import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesEnquiryComponent } from './opportunities-enquiry.component';

describe('OpportunitiesEnquiryComponent', () => {
  let component: OpportunitiesEnquiryComponent;
  let fixture: ComponentFixture<OpportunitiesEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitiesEnquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
