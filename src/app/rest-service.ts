import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
  export class RestapiService {
    constructor(private http: HttpClient) { }

    fetchTableData(): Observable<any> {
        return this.http.get('');
    }

  }
