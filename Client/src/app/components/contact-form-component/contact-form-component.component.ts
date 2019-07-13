import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact-form-component',
  templateUrl: './contact-form-component.component.html',
  styleUrls: ['./contact-form-component.component.scss']
})
export class ContactFormComponentComponent implements OnInit {

  contact: Contact = {
    subject: "",
    body:""
  };
  subject: String = "";
  body: String = "";
  previousMessageTime: Date = null;

  constructor(
    private contactService: ContactService,
    private flashMessageService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  sendRequest(){
    let currentMessageTime = new Date();
    if(this.previousMessageTime != null && this.previousMessageTime.getTime() - currentMessageTime.getTime() < 60000){
      this.flashMessageService.show('Message may only be sent once every miniute to avoid spam.', { cssClass: 'alert-warning', timeout: 5000 });
      return;
    }

    if(this.subject == "" || this.body == ""){
      this.flashMessageService.show('All fields are required to send a message.', { cssClass: 'alert-danger', timeout: 5000 });
      return;
    }
    this.contact.subject = this.subject;
    this.contact.body = this.body;
    this.contactService.postContact(this.contact)
    .subscribe((data: Reply) => {
      if(data.success){
        this.previousMessageTime = new Date();
        this.flashMessageService.show('Message sent!', { cssClass: 'alert-success', timeout: 2000 });
      }
      else
        this.flashMessageService.show('Inbox not available, please try again later!', { cssClass: 'alert-danger', timeout: 5000 });
    }, (error) => {
      this.flashMessageService.show('Contact attempt failed, please try again!', { cssClass: 'alert-danger', timeout: 5000 });
    })
    this.subject = "";
    this.body = "";
  }

}

export interface Reply{
  success: boolean;
}

export interface Contact{
  subject: String;
  body: String;
}
