import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfouundComponent } from './notfouund.component';

describe('NotfouundComponent', () => {
  let component: NotfouundComponent;
  let fixture: ComponentFixture<NotfouundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfouundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfouundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
