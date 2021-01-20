import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ICategory } from '../ViewModels/icategory';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private CategoryList: ICategory[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable <ICategory[]>
  {
    return this.http.get<ICategory[]>(`${environment.API_URL}/categories`);
  }

}
