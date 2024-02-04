import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    await fetch("https://kevinfunck.de/send%20me/send_mail.php",
      {
        method: 'Post',
        body: fd
      }
    );
    this.clearValue();
    this.disabledInput();
  }

  clearValue() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
    document.getElementById('btn')?.classList.add('d-none');
    document.getElementById('thanksMail')?.classList.remove('d-none');
  }

  disabledInput() {
    this.nameField.nativeElement.disable = true;
    this.emailField.nativeElement.disable = true;
    this.messageField.nativeElement.disable = true;
  }








}



