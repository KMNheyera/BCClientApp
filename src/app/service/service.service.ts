import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { IPayment } from '../interfaces/payment';
import { IUser } from '../interfaces/user';
import { ICreateContactDto } from '../interfaces/createContactDto';
import { IResponseObject } from '../interfaces/response-object';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "http://localhost:8080/api"
  constructor(
      private http: HttpClient,
  ) { }

  GetClients(PageNumber: number = 1, PageSize: number = 5, SearchText?: string): Observable<any> {
    let url = `${this.url}/Client/get-clients?PageNumber=${PageNumber}&PageSize=${PageSize}`;
    if (SearchText) {
      url += `&SearchCriteria=${SearchText}`;
    }
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  GetClientsCount(SearchText?: string): Observable<any> {
    let url = `${this.url}/Client/get-clients-count`;
    if (SearchText) {
      url += `?SearchCriteria=${SearchText}`;
    }
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  
  GetContacts(PageNumber: number = 1, PageSize: number = 5, SearchText?: string): Observable<any> {
    let url = `${this.url}/Contact/get-contacts?PageNumber=${PageNumber}&PageSize=${PageSize}`;
    if (SearchText) {
      url += `&SearchCriteria=${SearchText}`;
    }
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  GetContactsCount(SearchText?: string): Observable<any> {
    let url = `${this.url}/Contact/get-contacts-count`;
    if (SearchText) {
      url += `?SearchCriteria=${SearchText}`;
    }
    return this.http.get(url).pipe(
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


  handleError(error: HttpErrorResponse): Observable<IResponseObject<any>>  {
  console.log('error.status', error.status);
  console.log('error.message', error.message);
  let message = 'An unknown error occurred';

  debugger

  // Customize message based on error type
  if (error.error instanceof ErrorEvent) {
    // Client-side or network error
    message = `Client-side error: ${error.error.message}`;
  } else {
    // Server-side error
    message = `Server Error`;
  }

  return of({
    payload: null,
    message,
    success: false,
  });
}
}
