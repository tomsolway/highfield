import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserColoursComponent } from './user-colours.component';

describe('UserColoursComponent', () => {
  let component: UserColoursComponent;
  let fixture: ComponentFixture<UserColoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserColoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
