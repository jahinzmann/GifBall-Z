import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Angular UI components at https://valor-software.com/ngx-bootstrap/#/getting-started
//components
import { BattlefieldComponent } from './components/battlefield/battlefield.component';
import { AudienceListComponent } from './components/battlefield/audience-list/audience-list.component';
import { AudienceChatComponent } from './components/battlefield/audience-chat/audience-chat.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent,
    AudienceListComponent,
    AudienceChatComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
