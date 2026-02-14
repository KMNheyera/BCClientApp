import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { ICart } from '../interfaces/cart';
import { IPayment } from '../interfaces/payment';
import { IUser } from '../interfaces/user';
import { ICreateContactDto } from '../interfaces/createContactDto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "https://localhost:44345/api"
  constructor(
      private http: HttpClient,
  ) { }

  GetClients(PageNumber: number = 1, PageSize: number = 5): Observable<any> {
    return this.http.get(`${this.url}/Client/get-clients?PageNumber=${PageNumber}&PageSize=${PageSize}`).pipe(
      catchError(this.handleError)
    );
  }
  
  GetContacts(PageNumber: number = 1, PageSize: number = 5): Observable<any> {
    return this.http.get(`${this.url}/Contact/get-contacts?PageNumber=${PageNumber}&PageSize=${PageSize}`).pipe(
      catchError(this.handleError)
    );
  }

  GetContactsByClientId(clientId: number): Observable<any> {
    return this.http.get(`${this.url}/Client/get-contacts-by-clientid/${clientId}`).pipe(
      catchError(this.handleError)
    );
  }

  GetClientsByContactId(contactId: number): Observable<any> {
    return this.http.get(`${this.url}/Contact/get-clients-by-contact/${contactId}`).pipe(
      catchError(this.handleError)
    );
  }

  AddClient(client: { clientName: string }): Observable<any> {
    return this.http.post(`${this.url}/Client/create-client`, client).pipe(
      catchError(this.handleError)
    );
  }

  AddContact(contact: ICreateContactDto): Observable<any> {
    return this.http.post(`${this.url}/Contact/create-contact`, contact).pipe(
      catchError(this.handleError)
    );
  }

  UnlinkClient(contactId: number, clientId: number): Observable<any> {
    return this.http.post(`${this.url}/Client/unlink-contact`, {clientId: clientId, contactId: contactId}).pipe(
      catchError(this.handleError)
    );
  }
  LinkClientContacts(contactId: number, clientId: number): Observable<any> {
    return this.http.post(`${this.url}/Client/unlink-contact`, {clientId: clientId, contactId: contactId}).pipe(
      catchError(this.handleError)
    );
  }

  linkClient(contactId: number, clientId: number): Observable<any> {
    return this.http.post(`${this.url}/Client/link-contact`, {clientId: clientId, contactId: contactId}).pipe(
      catchError(this.handleError)
    );
  }

  GetPointsSettings(): Observable<any> {
    return this.http.get(`${this.url}/PointsSettings`).pipe(
      catchError(this.handleError)
    );
  }

  GetProducts(): Observable<any> {
    return this.http.get(`${this.url}/Product`).pipe(
      catchError(this.handleError)
    );
  }

   GetUsers(): Observable<any> {
    return this.http.get(`${this.url}/User`).pipe(
      catchError(this.handleError)
    );
  }

  SignIn(email:string): Observable<any> {
    return this.http.get(`${this.url}/User/SignIn/${email}`).pipe(
      catchError(this.handleError)
    );
  }

  GetUser(id: string): Observable<any> {
    return this.http.get(`${this.url}/User/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  AddUser(obj: IUser): Observable<any>{
    return this.http.post(`${this.url}/User`, obj).pipe(
      catchError(this.handleError)
    );
  }

   Payment(obj: IPayment): Observable<any>{
    return this.http.post(`${this.url}/Product/Payment`, obj).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    console.log('error.status', error.status)
    return throwError(error);
  }
}
