import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkContactsClientsComponent } from './link-contacts-clients.component';

describe('LinkContactsClientsComponent', () => {
  let component: LinkContactsClientsComponent;
  let fixture: ComponentFixture<LinkContactsClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkContactsClientsComponent]
    });
    fixture = TestBed.createComponent(LinkContactsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
