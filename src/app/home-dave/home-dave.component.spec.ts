import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDaveComponent } from './home-dave.component';

describe('HomeDaveComponent', () => {
  let component: HomeDaveComponent;
  let fixture: ComponentFixture<HomeDaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
