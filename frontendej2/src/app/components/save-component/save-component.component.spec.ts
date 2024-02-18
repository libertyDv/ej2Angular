import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveComponentComponent } from './save-component.component';

describe('SaveComponentComponent', () => {
  let component: SaveComponentComponent;
  let fixture: ComponentFixture<SaveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
