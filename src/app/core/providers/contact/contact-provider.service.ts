import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ContactProviderService {
  constructor(private httpService: HttpService) {}

  public postContact(contact: Contact): Observable<Contact> {
    return this.httpService.post('/contact', contact);
  }

  public getContacts(): Observable<Contact[]> {
    return this.httpService.get<Contact[]>('/contact');
  }

  public getContactById(id: string): Observable<Contact> {
    return this.httpService.get<Contact>('/contact/' + id);
  }

  public async deleteContactById(id: string): Promise<any> {
    await this.httpService.delete('/contact/' + id).toPromise();
  }

  public async patchContact(id: string, newContact: Contact): Promise<any> {
    await this.httpService
      .patch<Contact>('/contact/' + id, newContact)
      .toPromise();
  }
}
