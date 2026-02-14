import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { IClient } from 'src/app/interfaces/client';
import { IContact } from 'src/app/interfaces/contact';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-link-contacts-clients',
  templateUrl: './link-contacts-clients.component.html',
  styleUrls: ['./link-contacts-clients.component.scss']
})
export class LinkContactsClientsComponent {
   @Input() modalData: any;
      title: any;
      clientId: number = 0;
    
      isCreated: boolean = true;
    
      message: string = "";
      contactId: number = 0;
    
      clients$: Observable<IClient[]> = new Observable<IClient[]>();
      contacts$: Observable<IContact[]> = new Observable<IContact[]>();
    contactName: any;
    
      constructor(
           public modal: NgbActiveModal,
           private symService : ServiceService
         ) { }
          ngOnInit(): void {
           
          }
      
          setDialogProps(properties: any){
            this.title = properties.title

            this.contacts$ = this.symService.GetContacts(1, 10).pipe(
              map(res => res.payload)
            );

            this.clients$ = this.symService.GetClients(1, 10).pipe(
                  map(res => res.payload)
                );
          }
  
          link() {
          this.symService.linkClient(this.contactId, this.clientId).subscribe((client:any)=>{
            
            if(!client.success){
              this.isCreated = false;
              this.message = client.message || "Failed to link client";
              return;
            }
            
            if(client){
              this.modal.close(client);
            }
          })
        } 

}
