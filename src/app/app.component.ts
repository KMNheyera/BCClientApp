import { Component, ViewChild } from '@angular/core';
import { ServiceService } from './service/service.service';
import { map, Observable } from 'rxjs';
import { DialogService } from './service/dialog.service';
import { IClient } from './interfaces/client';
import { IContact } from './interfaces/contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client Manager Application';

  clients$: Observable<IClient[]>;
  contacts$: Observable<IContact[]>;

  constructor(
    private symService: ServiceService,
    private dialogService: DialogService
  ) {
    this.clients$ = this.symService.GetClients().pipe(
      map(res => res.payload)
    );

    this.contacts$ = this.symService.GetContacts().pipe(
      map(res => res.payload)
    );
}

linkClient(){
    let dialogRef = this.dialogService.openDialogLinkContact({
      title: "Link Contact to Client"
    });

    dialogRef.then((result: any) => {
      this.clients$ = this.symService.GetClients().pipe(
      map(res => res.payload)
    );
      this.contacts$ = this.symService.GetContacts().pipe(
      map(res => res.payload)
    );
    });
}

unlinkClient(client: IClient){
    let dialogRef = this.dialogService.openDialogUnlinkClient({
      title: "Unlink Client",
      clientId: client.clientId,
      clientName: client.name
    });

    dialogRef.then((result: any) => {
      this.clients$ = this.symService.GetClients().pipe(
      map(res => res.payload)
    );


    });
}

unlinkContact(contact: IContact){
  let dialogRef = this.dialogService.openDialogUnlinkContact({
      title: "Unlink Contact",
      contactId: contact.contactId,
      contactName: contact.name
    });

    dialogRef.then((result: any) => {
      this.contacts$ = this.symService.GetContacts().pipe(
        map(res => res.payload)
      );
      this.contacts$ = this.symService.GetContacts().pipe(
        map(res => res.payload)
      );
    });
}

AddNewContact(){
     let dialogRef = this.dialogService.openDialogNewContact({
      title: "Add New Contact",
    });

      dialogRef.then((result: any) => {
          this.contacts$ = this.symService.GetContacts().pipe(
            map(res => res.payload)
          );
    });
}

AddNewClient(){
     let dialogRef = this.dialogService.openDialogNewClient({
      title: "Add New Client",
    });

      dialogRef.then((result: any) => {
         this.clients$ = this.symService.GetClients().pipe(
      map(res => res.payload)
    );
    });
}
}
