import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Contact, Reply } from '../components/contact-form-component/contact-form-component.component';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable()

export class ContactService{
  constructor(
    private http: HttpClient
    ){ }

  private readonly urlString = "https://cmeyer.me/api/"

  postContact(contactInfo: Contact){
    return this.http.post<Reply>(this.urlString, contactInfo)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    return throwError('Something went wrong please try again later.');
  }
}

export interface Auth{
  signautre: any;
  plaintext: String;
}
