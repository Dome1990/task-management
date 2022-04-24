import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodolistDialogComponent } from './add-todolist-dialog.component';

describe('AddTodolistDialogComponent', () => {
  let component: AddTodolistDialogComponent;
  let fixture: ComponentFixture<AddTodolistDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodolistDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodolistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
