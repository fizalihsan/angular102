import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {tap, catchError} from 'rxjs/operators'


@Injectable()
export class StockAuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.authToken){
            const authReq = req.clone({
                headers: req.headers.set('Authorization', this.authService.authToken)
            });
            req = authReq;
            console.log('Making an authorized request to ', req.url);
        }
        return next.handle(req)
                .pipe(
                    tap(
                        event => {this.handleResponse(req, event)}
                    ),
                    catchError((error: HttpErrorResponse) => {
                        let errorMessage = '';
                        if (error.error instanceof ErrorEvent) {
                            // client-side error
                            errorMessage = `Error: ${error.error.message}`;
                        } else {
                            // server-side error
                            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                        }
                        // window.alert(errorMessage);
                        return throwError(errorMessage);
                    })
                );
    }

    handleResponse(req: HttpRequest<any>, event: HttpEvent<any>){
        console.log('Handling response for ', req.url, event);
        if (event instanceof HttpResponse) {
            console.log('Request for ', req.url,
                ' Response Status ', event.status,
                ' With body ', event.body);
        }
    }
}