import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomizeComponent } from './coustomize.component';

describe('CoustomizeComponent', () => {
  let component: CoustomizeComponent;
  let fixture: ComponentFixture<CoustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
