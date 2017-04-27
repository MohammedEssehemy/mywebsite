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
import { ContactComponent } from './components/contact/contact.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// services
import { MessagesService } from "./services/messages.service";
import { UsersService } from "./services/users.service";
import { ValidateService } from "./services/validate.service";


const appRoutes:Routes = [
  {path:'',component: HomeComponent},
{path:'register',component:RegisterComponent},
{path:'messages',component:MessagesComponent},
{path:'login',component:LoginComponent},
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
    ContactComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, MessagesService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
