import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICreateContactDto } from 'src/app/interfaces/createContactDto';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() modalData: any;

  title: any;
  clientName: string = "";

  isCreated: boolean = true;
  message: string = "";

  contact: ICreateContactDto = {
    name: '',
    surname: '',
    email: ''
  }

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
        console.log('create contact', this.clientName);
        this.symService.AddContact(this.contact).subscribe((client:any)=>{
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
