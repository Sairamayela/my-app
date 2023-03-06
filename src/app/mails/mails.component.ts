import { Component, OnInit } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent {
public mails:any=[];
  constructor(private _mailsService:MailsService) { 
    _mailsService.getMails().subscribe(
      (data:any)=>{
        this.mails = data;
      },
    (err:any)=>{
      alert("Internal server error")
    }
    )
  }

 
}
