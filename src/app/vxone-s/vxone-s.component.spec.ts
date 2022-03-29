import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VxoneSComponent } from './vxone-s.component';

describe('VxoneSComponent', () => {
  let component: VxoneSComponent;
  let fixture: ComponentFixture<VxoneSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VxoneSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VxoneSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
