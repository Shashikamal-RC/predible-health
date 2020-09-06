import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowAttenuationAnalysisComponent } from './low-attenuation-analysis.component';

describe('LowAttenuationAnalysisComponent', () => {
  let component: LowAttenuationAnalysisComponent;
  let fixture: ComponentFixture<LowAttenuationAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowAttenuationAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowAttenuationAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
