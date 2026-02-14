import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  @Input() modalData: any;
  title: any;
  clientName: string = "";

  isCreated: boolean = true;
  message: string = "";

  constructor(
     public modal: NgbActiveModal,
     private symService : ServiceService
   ) { }
    ngOnInit(): void {
     
    }

    setDialogProps(properties: any){
      this.title = properties.title
    }

    Create() {
      this.symService.AddClient({ clientName: this.clientName }).subscribe((client:any)=>{
        if(!client.success){
          this.isCreated = false;
          this.message = client.message || "Failed to create client";
          return;
        }

        if(client){
          this.modal.close(client);
        }
      })
    } 
}
