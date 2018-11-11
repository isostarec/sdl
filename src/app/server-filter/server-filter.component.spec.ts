import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerFilterComponent } from './server-filter.component';

describe('ServerFilterComponent', () => {
  let component: ServerFilterComponent;
  let fixture: ComponentFixture<ServerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
