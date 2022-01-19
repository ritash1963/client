import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarkItemVM } from '../_models/markItemVM';
import { RepositoryVM } from '../_models/repositoryVM';


@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // https://localhost:5001/api/repository/mongoid
  getRepositories(name: string) {
      return this.http.get<RepositoryVM[]>(this.baseUrl + 'repository/' + name);
  }

  // https://localhost:5001/api/repository
  getAllRepositories() {
     return this.http.get<RepositoryVM[]>(this.baseUrl + 'repository');
 }

 // https://localhost:5001/api/repository/mark
  addBookmark(markItemVM: MarkItemVM) {
    return this.http.post(this.baseUrl + 'repository/mark', markItemVM);
  }
  
}
