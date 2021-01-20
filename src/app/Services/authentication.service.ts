import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../ViewModels/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(name:string,password:string): Observable <IUser>
  {
    return this.http.get<IUser>(`${environment.API_URL}/users?username=${name}&password=${password}`);
    
    
  }
}
