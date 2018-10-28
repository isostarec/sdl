import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { NewserverComponent } from './servers/newserver/newserver.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SiteWrapperComponent } from './site-wrapper/site-wrapper.component';
import { QueryDetailsComponent } from './queryes/query-details/query-details.component';
import { QueryListComponent } from './queryes/query-list/query-list.component';
import { FormsModule } from '@angular/forms';
import * as hljs from 'highlight.js';
import * as hljsSQL from 'highlight.js/lib/languages/sql';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import { FilterPipeModule } from 'ngx-filter-pipe';

export function highlightJsFactory(): any {
  // only register the typescript language
  hljs.registerLanguage('sql', hljsSQL);
  return hljs;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    NewserverComponent,
    NavbarComponent,
    ServerInfoComponent,
    NotFoundComponent,
    SiteWrapperComponent,
    QueryDetailsComponent,
    QueryListComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    FilterPipeModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'/home', pathMatch:'full'},
      { path: 'home', component: QueryListComponent},
      { path: 'servers/new', component: NewserverComponent},
      { path: 'servers/:serverId', component: ServerInfoComponent},
      { path: 'servers', component: ServersComponent},
      { path: '**', component: NotFoundComponent}
    ]),
    HttpClientModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
