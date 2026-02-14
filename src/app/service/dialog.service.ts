import { Injectable } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from '../modals/client/client.component';
import { ContactComponent } from '../modals/contact/contact.component';
import { UnlinkClientComponent } from '../modals/unlink-client/unlink-client.component';
import { UnlinkContactComponent } from '../modals/unlink-contact/unlink-contact.component';
import { LinkContactsClientsComponent } from '../modals/link-contacts-clients/link-contacts-clients.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private modalService: NgbModal
  ) { }

    openDialogNewClient(props: any): Promise<any> {
      var modalRef = this.modalService.open(ClientComponent, {size: 'lg', backdrop: 'static'});
      modalRef.componentInstance.setDialogProps(props);

      // return modalRef.result

      return new Promise(resolve => {
        resolve(modalRef.result);
      })
    }

    openDialogNewContact(props: any): Promise<any> {
      var modalRef = this.modalService.open(ContactComponent, {size: 'lg', backdrop: 'static'});
      modalRef.componentInstance.setDialogProps(props);

      // return modalRef.result

      return new Promise(resolve => {
        resolve(modalRef.result);
      })
    }

    openDialogUnlinkClient(props: any): Promise<any> {
      var modalRef = this.modalService.open(UnlinkClientComponent, {size: 'lg', backdrop: 'static'});
      modalRef.componentInstance.setDialogProps(props);
      // return modalRef.result

      return new Promise(resolve => {
        resolve(modalRef.result);
      })
    }

    openDialogUnlinkContact(props: any): Promise<any> {
      var modalRef = this.modalService.open(UnlinkContactComponent, {size: 'lg', backdrop: 'static'});
      modalRef.componentInstance.setDialogProps(props);
      // return modalRef.result

      return new Promise(resolve => {
        resolve(modalRef.result);
      })
    }

    openDialogLinkContact(props: any): Promise<any> {
      var modalRef = this.modalService.open(LinkContactsClientsComponent, {size: 'lg', backdrop: 'static'});
      modalRef.componentInstance.setDialogProps(props);
      // return modalRef.result

      return new Promise(resolve => {
        resolve(modalRef.result);
      })
    }
}

