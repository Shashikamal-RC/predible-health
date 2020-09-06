import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoduleAnalysisComponent } from './nodule-analysis.component';

describe('NoduleAnalysisComponent', () => {
  let component: NoduleAnalysisComponent;
  let fixture: ComponentFixture<NoduleAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoduleAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoduleAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
