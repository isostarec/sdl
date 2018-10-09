import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerycardComponent } from './querycard.component';

describe('QuerycardComponent', () => {
  let component: QuerycardComponent;
  let fixture: ComponentFixture<QuerycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
