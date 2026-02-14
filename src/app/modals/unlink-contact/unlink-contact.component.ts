import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { IClient } from 'src/app/interfaces/client';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-unlink-contact',
  templateUrl: './unlink-contact.component.html',
  styleUrls: ['./unlink-contact.component.scss']
})
export class UnlinkContactComponent {
  @Input() modalData: any;
    title: any;
    clientId: number = 0;
  
    isCreated: boolean = true;
  
    message: string = "";
    contactId: number = 0;
  
    clients$: Observable<IClient[]> = new Observable<IClient[]>();
  contactName: any;
  
    constructor(
         public modal: NgbActiveModal,
         private symService : ServiceService
       ) { }
        ngOnInit(): void {
         
        }
    
        setDialogProps(properties: any){
          this.title = properties.title
          this.contactId = properties.contactId
          this.contactName = properties.contactName
  
          this.clients$ = this.symService.GetClientsByContactId(this.contactId).pipe(
                map(res => res.payload)
              );
        }

          Unlink() {
        this.symService.UnlinkClient(this.contactId, this.clientId).subscribe((client:any)=>{
          
          if(!client.success){
            this.isCreated = false;
            this.message = client.message || "Failed to unlink client";
            return;
          }
          
          if(client){
            this.modal.close(client);
          }
        })
      } 

}
