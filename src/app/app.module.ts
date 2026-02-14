import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NoClientExistModule } from './pipes/no-client-exist.pipe';
import { NoContactExistModule } from './pipes/no-contact-exist.pipe';
import { ContactComponent } from './modals/contact/contact.component';
import { ClientComponent } from './modals/client/client.component';
import { UnlinkClientComponent } from './modals/unlink-client/unlink-client.component';
import { UnlinkContactComponent } from './modals/unlink-contact/unlink-contact.component';
import { LinkContactsClientsComponent } from './modals/link-contacts-clients/link-contacts-clients.component';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    ClientComponent,
    UnlinkClientComponent,
    UnlinkContactComponent,
    LinkContactsClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NoClientExistModule,
    NoContactExistModule,
    TabsModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
