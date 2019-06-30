import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuststableComponent } from './custstable.component';

describe('CuststableComponent', () => {
  let component: CuststableComponent;
  let fixture: ComponentFixture<CuststableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuststableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuststableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
