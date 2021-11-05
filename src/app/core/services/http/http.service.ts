import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl: string;
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: '',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      }),
    };
  }

  public get<type>(path: string): Observable<type> {
    return this.httpClient
      .get<type>(this.baseUrl + path, this.httpOptions)
      .pipe(map((data: any) => data as type));
  } //Obtener datos

  public post<type>(path: string, body: any): Observable<type> {
    return this.httpClient
      .post<type>(this.baseUrl + path, body, this.httpOptions)
      .pipe(
        map((data: any) => {
          return data.message as type;
        })
      );
  } //Crear datos

  public postLogin<type>(path: string, body: any): Observable<type> {
    return this.httpClient
      .post<type>(this.baseUrl + path, body, this.httpOptions)
      .pipe(
        map((data: any) => {
          return data as type;
        })
      );
  } //Crear datos

  public delete<type>(path: string): Observable<type> {
    return this.httpClient
      .delete<type>(this.baseUrl + path, this.httpOptions)
      .pipe(
        map((data: any) => {
          return data.message as type;
        })
      );
  } //Borrar datos

  public patch<type>(path: string, body: any): Observable<type> {
    return this.httpClient
      .patch<type>(this.baseUrl + path, body, this.httpOptions)
      .pipe(map((data: any) => data as type));
  } //Modificar datos
}
