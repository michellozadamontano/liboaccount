import { Injectable }                   from '@angular/core';
import { Actions, Effect, ofType }      from '@ngrx/effects';
import { Observable, of }               from 'rxjs';
import { catchError, map, switchMap }   from 'rxjs/operators';

import * as fromTcpAction               from '../actions/tcp.action';
import * as fromServices                from '../../../services';

@Injectable()
export class TcpEffects {
    constructor(
        private actions$: Actions,
        private tcpService: fromServices.TcpService
    ) {}

    @Effect()
    loadTcp$ = this.actions$.ofType(fromTcpAction.LOAD_TCP,
        fromTcpAction.TCP_SUCCESS     
        ).pipe(
        switchMap(() => {
            return this.tcpService.getTcp().pipe(
                map(tcp => new fromTcpAction.LoadTcpSuccess(tcp)),
                catchError(error => of(new fromTcpAction.LoadTcpError(error)))
            )
        })
    )
    @Effect()
    loadTcpById$ = this.actions$.ofType<fromTcpAction.LoadTcpById>(
        fromTcpAction.LOAD_TCP_BY_ID).pipe(
            map(action => action.payload),
            switchMap((payload) => {
                return this.tcpService.getTcpById(payload).pipe(
                    map(tcp => new fromTcpAction.LoadTcpByIdSuccess(tcp)),
                    catchError(error => of(new fromTcpAction.LoadTcpError(error)))
                )
            })
        )
   
    @Effect()
    createTcp$ = this.actions$.ofType<fromTcpAction.CreateTcp>(
        fromTcpAction.CREATE_TCP).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.tcpService.createTcp(payload).pipe(
                map(message => new fromTcpAction.TcpSuccess(message)),
                catchError(error => of(new fromTcpAction.LoadTcpError(error)))
            )
        })
    )   
    @Effect()
    updateTcp$ = this.actions$.ofType<fromTcpAction.UpdateTcp>(
        fromTcpAction.UPDATE_TCP).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.tcpService.updateteTcp(payload).pipe(
                map(message => new fromTcpAction.TcpSuccess(message)),
                catchError(error => of(new fromTcpAction.LoadTcpError(error)))
            )
        })
    ) 
    @Effect()
    deleteTcp$ = this.actions$.ofType<fromTcpAction.DeleteTcp>(
        fromTcpAction.DELETE_TCP).pipe(
        map(action =>action.payload),
        switchMap((payload)=> {
            return this.tcpService.deleteTcp(payload).pipe(
                map(message => new fromTcpAction.TcpSuccess(message)),
                catchError(error => of(new fromTcpAction.LoadTcpError(error)))
            )
        })
    )     
}