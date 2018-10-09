import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { NewserverComponent } from './newserver/newserver.component';
import { QuerycardComponent } from './querycard/querycard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SiteWrapperComponent } from './site-wrapper/site-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    NewserverComponent,
    QuerycardComponent,
    NavbarComponent,
    ServerInfoComponent,
    NotFoundComponent,
    SiteWrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'servers/new', component: NewserverComponent},
      { path: 'servers/:serverId', component: ServerInfoComponent},
      { path: 'servers', component: ServersComponent},
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
