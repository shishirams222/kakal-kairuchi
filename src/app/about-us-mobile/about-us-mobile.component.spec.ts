import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsMobileComponent } from './about-us-mobile.component';

describe('AboutUsMobileComponent', () => {
  let component: AboutUsMobileComponent;
  let fixture: ComponentFixture<AboutUsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
