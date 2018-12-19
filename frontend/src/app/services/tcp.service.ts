import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../core/config';
import { Tcp } from '../clasificadores/models/tcp.interface';
import { TcpShow } from '../clasificadores/models/tcp_show';

@Injectable({
  providedIn: 'root'
})
export class TcpService {

  constructor(private http: HttpClient) { }

  getTcp():Observable<TcpShow>
  {
    let url = API_URL + 'tcp';
    return this.http.get<TcpShow>(url).pipe(catchError(this.handleError));
  }
  getTcpById(id:number):Observable<Tcp>
  {
    let url = API_URL + 'tcp/byId/' + id;
    return this.http.get<Tcp>(url).pipe(catchError(this.handleError));
  }
  createTcp(tcp: Tcp):Observable<string>
  {
    let url = API_URL + 'tcp';
    return this.http.post<string>(url,tcp).pipe(catchError(this.handleError));
  }
  updateteTcp(tcp: Tcp):Observable<string>
  {
    let url = API_URL + 'tcp/' + tcp.id;
    return this.http.put<string>(url,tcp).pipe(catchError(this.handleError));
  }
  deleteTcp(id: number):Observable<string>
  {
    let url = API_URL + 'tcp/' + id;
    return this.http.delete<string>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {      
      console.error('An error occurred:', error.error.message);
    } else {     
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }   
    return throwError(
      'Something bad happened; please try again later.');
  };
}
