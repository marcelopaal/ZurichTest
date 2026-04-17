import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root',
})
export class Apiauth { 
  
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    const body = {
      username: username,
      password: password
    };

   return this.http.post(`${this.apiUrl}/login`, body, {
      responseType: 'text'
    });
  
  }
}
