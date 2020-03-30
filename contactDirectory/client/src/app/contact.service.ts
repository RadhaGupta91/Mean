import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:Http) { }

  //Retreiving Contacts Methods
  getContacts()
  {
    return this.http.get('http://localhost:3000/contact')
    .pipe(map((response: any) => response.json()));
  }

  //Add Contacts Methods
  addContacts(newContact)
  {
    var headers = new Headers();
    headers.append('Content-type',"application/json");

    return this.http.post('http://localhost:3000/contact/',newContact,{headers:headers})
    .pipe(map(res=>{ debugger;return res.json()}));
  }

  //deleteContacts
  deleteContacts(id)
  {
    var headers = new Headers();
    headers.append('Content-type',"application/json");

    return this.http.delete('http://localhost:3000/contact/'+id)
    .pipe(map(res=>{ debugger;return res.json()}));
  }
}
