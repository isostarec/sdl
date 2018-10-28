import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewserverComponent } from './newserver.component';

describe('NewserverComponent', () => {
  let component: NewserverComponent;
  let fixture: ComponentFixture<NewserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
