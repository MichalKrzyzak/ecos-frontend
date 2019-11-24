import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosAddComponent } from './fos-add.component';

describe('FosAddComponent', () => {
  let component: FosAddComponent;
  let fixture: ComponentFixture<FosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
