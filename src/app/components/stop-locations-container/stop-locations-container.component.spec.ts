import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopLocationsContainerComponent } from './stop-locations-container.component';

describe('StopLocationsContainerComponent', () => {
  let component: StopLocationsContainerComponent;
  let fixture: ComponentFixture<StopLocationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopLocationsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopLocationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
