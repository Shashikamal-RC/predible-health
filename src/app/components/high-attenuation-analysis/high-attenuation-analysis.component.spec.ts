import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighAttenuationAnalysisComponent } from './high-attenuation-analysis.component';

describe('HighAttenuationAnalysisComponent', () => {
  let component: HighAttenuationAnalysisComponent;
  let fixture: ComponentFixture<HighAttenuationAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighAttenuationAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighAttenuationAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
