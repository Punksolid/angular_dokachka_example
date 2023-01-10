import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InsertCommonHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Intercepted request');
    const headers = new HttpHeaders({
      'X-USER-TOKEN': '1234567890'
    });
    const newRequest = request.clone({
      headers
    });
    return next.handle(newRequest);
  }

  // errorHandler(error: HttpErrorResponse) {
  //   console.log('Error handler');
  //   console.log(error);
  //
  //   return throwError('Personalized error message');
  // }
}
