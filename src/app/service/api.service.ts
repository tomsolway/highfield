import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  public getData() {
    const data = this.httpClient.get(`https://recruitment.highfieldqualifications.com/api/test`);
    console.log(data);

    return this.httpClient.get(`https://recruitment.highfieldqualifications.com/api/test`);
  }
}

