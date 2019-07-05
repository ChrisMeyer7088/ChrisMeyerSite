import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Contact, Reply } from '../components/contact-form-component/contact-form-component.component';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable()

export class ContactService{
  constructor(private http: HttpClient){ }

  private readonly urlString = "http://localhost:3000/api/contact"

  postContact(contactInfo: Contact){
    return this.http.post<Reply>(this.urlString, contactInfo)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    return throwError('Something bad happened; please try again later.');
  }
}
