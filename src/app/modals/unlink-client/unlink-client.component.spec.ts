import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlinkClientComponent } from './unlink-client.component';

describe('UnlinkClientComponent', () => {
  let component: UnlinkClientComponent;
  let fixture: ComponentFixture<UnlinkClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnlinkClientComponent]
    });
    fixture = TestBed.createComponent(UnlinkClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
