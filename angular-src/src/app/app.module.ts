import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ContactComponent } from './components/contact/contact.component'

// services
import { MessagesService } from "./services/messages.service";
import { ValidateService } from "./services/validate.service";


const appRoutes:Routes = [
{path:'',component: HomeComponent},
{path:'projects',component:ProjectsComponent},
{path:'messages',component:MessagesComponent},
{path:'adminlogin',component:AdminLoginComponent},
{path:'contact',component:ContactComponent},
{path:'*',component: HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    MessagesComponent,
    MessageComponent,
    AdminLoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
