import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {

    baseUrl="http://Dummy";



  constructor(private http: HttpClient) {}

  uploadFile(file:any){
    return this.http.post(`${this.baseUrl}/UploadFiles`,file);
  }





  post(url: string, params: {} = {}, headers?: {}): Observable<any> {
    const httpOptions = {
      headers,
    };
    return this.http.post<any>(url, params, headers);
  }

  put(url: string, params: {} = {}, headers?: {}): Observable<any> {
    const httpOptions = {
      headers,
    };
    return this.http.put<any>(url, params, httpOptions);
  }

  get(url: string, headers?: any): Observable<any> {
    let httpOptions = {
      headers,
    };
    if (headers) {
      httpOptions = { ...headers, params: headers.queryParams };
    }
    return this.http.get<any>(url, httpOptions);
  }

  delete(url: string, headers?: {}): Observable<any> {
    const httpOptions = {
      headers,
    };
    return this.http.delete<any>(url, httpOptions);
  }

  /**
   * custom request method to handle custom api requests like delete with a body
   * @param method ex delete
   * @param url ex users
   * @param body ex {ids: [5,6,7]}
   * @param headers request headers optional
   * @param params additional params
   * @param responseType change response type
   */

  request(
    method: string,
    url: string,
    body: {} = {},
    headers?: any,
    params?: any,
    responseType?: any
  ): Observable<any> {
    return this.http.request(method, url, {
      body,
      headers,
      params,
      responseType,
    });
  }

  // .pipe(timeout(30000));
}
