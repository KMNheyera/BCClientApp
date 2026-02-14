import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { IClient } from 'src/app/interfaces/client';
import { IContact } from 'src/app/interfaces/contact';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-unlink-client',
  templateUrl: './unlink-client.component.html',
  styleUrls: ['./unlink-client.component.scss']
})
export class UnlinkClientComponent {
@Input() modalData: any;
  title: any;
  clientId: number = 0;

  isCreated: boolean = true;

  message: string = "";
  clientName: any;
  contactId: number = 0;

  contacts$: Observable<IContact[]> = new Observable<IContact[]>();

  constructor(
       public modal: NgbActiveModal,
       private symService : ServiceService
     ) { }
      ngOnInit(): void {
       
      }
  
      setDialogProps(properties: any){
        this.title = properties.title
        this.clientId = properties.clientId
        this.clientName = properties.clientName

        this.contacts$ = this.symService.GetContactsByClientId(this.clientId).pipe(
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
