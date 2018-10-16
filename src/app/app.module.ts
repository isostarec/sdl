import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { NewserverComponent } from './newserver/newserver.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SiteWrapperComponent } from './site-wrapper/site-wrapper.component';
import { QueryDetailsComponent } from './queryes/query-details/query-details.component';
import { QueryListComponent } from './queryes/query-list/query-list.component';
import { FormsModule } from '@angular/forms';

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
    RouterModule.forRoot([
      { path: '', redirectTo:'/home', pathMatch:'full'},
      { path: 'home', component: QueryListComponent},
      { path: 'servers/new', component: NewserverComponent},
      { path: 'servers/:serverId', component: ServerInfoComponent},
      { path: 'servers', component: ServersComponent},
      { path: '**', component: NotFoundComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
