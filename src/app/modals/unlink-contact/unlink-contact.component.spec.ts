import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlinkContactComponent } from './unlink-contact.component';

describe('UnlinkContactComponent', () => {
  let component: UnlinkContactComponent;
  let fixture: ComponentFixture<UnlinkContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnlinkContactComponent]
    });
    fixture = TestBed.createComponent(UnlinkContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
