import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable } from 'rxjs';
import {BehaviorSubject} from "rxjs";
import {catchError, finalize} from "rxjs/operators";
import {of} from "rxjs";
import { CuentaList } from "../models/cuenta_list.interface";
import { CuentaService } from "./cuenta.service";

export class CuentasDataSource implements DataSource<CuentaList> {
    private cuentaSubject = new BehaviorSubject<CuentaList[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private cuentaService: CuentaService) {

    }

    loadCuenta(pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.cuentaService.findCuenta(pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(cuentas => this.cuentaSubject.next(cuentas));

    }

    connect(collectionViewer: CollectionViewer): Observable<CuentaList[]> {
        console.log("Connecting data source");
        return this.cuentaSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.cuentaSubject.complete();
        this.loadingSubject.complete();
    }
}