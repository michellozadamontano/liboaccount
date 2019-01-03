import { NgModule }                 from '@angular/core';

import { HttpClientModule }         from '@angular/common/http';
// Apollo
import { ApolloModule, Apollo }     from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache }            from 'apollo-cache-inmemory';

// GraphiQL: https://launchpad.graphql.com/0vw9j9w0l5
const uri = 'http://localhost:3001/graphql';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphqlModule { 
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri }),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all'
        }
      }
    });
  }
}
