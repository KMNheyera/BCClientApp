import { Component, ViewChild } from '@angular/core';
import { ServiceService } from './service/service.service';
import { map, Observable, of } from 'rxjs';
import { DialogService } from './service/dialog.service';
import { IClient } from './interfaces/client';
import { IContact } from './interfaces/contact';
import { IResponseObject } from './interfaces/response-object';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client Manager Application';

  clients$: Observable<IClient[]>= new Observable<IClient[]>();
  contacts$: Observable<IContact[]>= new Observable<IContact[]>();
  

  message: string = "";
  IsSuccessMessage: boolean = false;
  sampleData$: Observable<IResponseObject<IClient[]>>;

  clientRowCount: number = 5;
  contactRowCount: number = 5;

  clientPageNumber: number = 1;
  contactPageNumber: number = 1;

  totalClientRows$: Observable<number | null>= of(50);
  totalContactRows$: Observable<number | null>= of(50);

  constructor(
    private symService: ServiceService,
    private dialogService: DialogService
  ) {
    this.sampleData$ = this.symService.GetClients().pipe(
      map(res => res)
    );
    
    this.initialiseData();
}

initialiseData(){
  this.clients$ = this.symService.GetClients(this.clientPageNumber, this.clientRowCount).pipe(
      map(res => res.payload)
    );
  this.contacts$ = this.symService.GetContacts(this.contactPageNumber, this.contactRowCount).pipe(
      map(res => res.payload)
    );


  this.totalContactRows$ = this.symService.GetContactsCount().pipe(
      map(res => res.payload)
    );

  this.totalClientRows$ = this.symService.GetClientsCount().pipe(
      map(res => res.payload)
    );

}


linkClient(){
    let dialogRef = this.dialogService.openDialogLinkContact({
      title: "Link Contact to Client"
    });
    dialogRef.then((result: any) => {
      this.showMessage("Contact linked to client successfully!");
     this.initialiseData();
    });
}

unlinkClient(client: IClient){
    let dialogRef = this.dialogService.openDialogUnlinkClient({
      title: "Unlink Client",
      clientId: client.clientId,
      clientName: client.name
    });

    dialogRef.then((result: any) => {
      this.showMessage("Client unlinked from contact successfully!");
      this.initialiseData();
    });
}

unlinkContact(contact: IContact){
  let dialogRef = this.dialogService.openDialogUnlinkContact({
      title: "Unlink Contact",
      contactId: contact.contactId,
      contactName: contact.name
    });

    dialogRef.then((result: any) => {
      this.showMessage("Contact unlinked from client successfully!");
      this.initialiseData();
    });
}

AddNewContact(){
     let dialogRef = this.dialogService.openDialogNewContact({
      title: "Add New Contact",
    });

      dialogRef.then((result: any) => {
        this.showMessage("Contact added successfully!");
         this.initialiseData();
    });
}

AddNewClient(){
     let dialogRef = this.dialogService.openDialogNewClient({
      title: "Add New Client",
    });

      dialogRef.then((result: any) => {
        this.showMessage("Client added successfully!");
        this.initialiseData();
    });
}

  showMessage(message: string) {
    this.IsSuccessMessage = true;
    this.message = message;
    setTimeout(() => {
      this.message = '';
      this.IsSuccessMessage = false;
    }, 3000); // 3 seconds
  }

  onRowCountChangeClient() {
    this.clients$ = this.symService.GetClients(1, this.clientRowCount).pipe(
      map(res => res.payload)
    );
  }
  
  onRowCountChangeContact() {
    this.contacts$ = this.symService.GetContacts(1, this.contactRowCount).pipe(
      map(res => res.payload)
    );
  }


 

  loadClientPage(page: number) {
    this.clientPageNumber = page;
    this.clients$ = this.symService.GetClients(page, this.clientRowCount).pipe(
        map(res => res.payload)
      );
  }

  loadContactPage(page: number) {
    this.contactPageNumber = page;
    this.contacts$ = this.symService.GetContacts(page, this.contactRowCount)
    .pipe(
        map(res => res.payload)
      );
  }

  onSerchClient(searchText: string) {
    this.clientPageNumber = 1;
    if(searchText === ""){
      this.initialiseData();
      return;
    }
    this.clients$ = this.symService.GetClients(this.clientPageNumber, this.clientRowCount, searchText)
    .pipe(
        map(res => res.payload)
    );

     this.totalClientRows$ = this.symService.GetClientsCount(searchText).pipe(
      map(res => res.payload)
    );
  }
  
  onSearchContact(searchText: string) {
    this.contactPageNumber = 1;
    if(searchText === ""){
      this.initialiseData();
      return;
    }
    this.contacts$ = this.symService.GetContacts(this.contactPageNumber, this.contactRowCount, searchText)
    .pipe(
        map(res => res.payload)
    );
    this.totalContactRows$ = this.symService.GetContactsCount(searchText).pipe(
      map(res => res.payload)
    );
  }
}
