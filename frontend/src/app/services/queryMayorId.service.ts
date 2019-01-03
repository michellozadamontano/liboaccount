import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';
import { CuentaMayor } from '../clasificadores/models/cuenta_mayor.interface';

@Injectable({
    providedIn: 'root',
  })
  export class CuentaGrupoGQL extends Query<CuentaMayor> {
    document = gql`
      query cuentaGrupo($id: Int!) {
        cuentaGrupo(id:$id) {
          id
          nombre
          codigo  
        }
      }
    `;
  }