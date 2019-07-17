import { Component, OnInit, HostListener } from '@angular/core';
import { ContactService, Auth } from '../../services/contact.service';
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
  public innerWidth: any;
  constructor(
    private contactService: ContactService,
    private flashMessageService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.resizeForm();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.resizeForm();
  }

  resizeForm(){
    let element = document.getElementById('contact-form');
    if(this.innerWidth < 750){
      element.className = 'container-contact-sm'
    }else{
      element.className = 'container-contact-lrg'
    }
  }

  sendRequest(){
    let currentMessageTime = new Date();
    //Checks for message sending delay
    if(this.previousMessageTime != null && currentMessageTime.getTime() -  this.previousMessageTime.getTime() < 60000){
      this.flashMessageService.show('Message may only be sent once every miniute to avoid spam.', { cssClass: 'alert-warning', timeout: 5000 });
      return;
    }
    //Validates required fields
    if(this.subject == "" || this.body == ""){
      this.flashMessageService.show('All fields are required to send a message.', { cssClass: 'alert-danger', timeout: 5000 });
      return;
    }
    //Sets Reply object
    this.contact.subject = this.subject;
    this.contact.body = this.body;
    //Sends a post request
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
    //Resets field values
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
