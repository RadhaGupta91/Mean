import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts : Contact[];
  contact : Contact;
  name: string;
  description:string
  
  constructor(private ContactService:ContactService) { }

  addContact(){
    const newContact ={
      name: this.name,
      contact: this.contact,
      description: this.description,
    }
    this.ContactService.addContacts(newContact)
    .subscribe(contact =>{
      this.contacts.push(contact);
    });
  }

  deleteContact(id:any)
  {
    var contacts = this.contacts;
    this.ContactService.deleteContacts(id)
    .subscribe(data=>{
       if(data.status)
       {
         for(var i=0;i<contacts.length;i++)
         {
           if(contacts[i]._id  == id)
            contacts.splice(i,1);
         }
         this.ngOnInit();
       }

    })
  }
  ngOnInit() {
    this.ContactService.getContacts()
    .subscribe(contacts=> this.contacts = contacts);
  }

}
