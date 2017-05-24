import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBrakeParallaxComponent } from './image-brake-parallax.component';

describe('ImageBrakeParallaxComponent', () => {
  let component: ImageBrakeParallaxComponent;
  let fixture: ComponentFixture<ImageBrakeParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBrakeParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBrakeParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
