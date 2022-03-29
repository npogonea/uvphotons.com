import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgImgLampsComponent } from './bg-img-lamps.component';

describe('BgImgLampsComponent', () => {
  let component: BgImgLampsComponent;
  let fixture: ComponentFixture<BgImgLampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgImgLampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgImgLampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
