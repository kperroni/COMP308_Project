import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular5-toaster';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './modules/user/user.service';
import { TicketService } from './modules/ticket/ticket.service';
import { ServiceService } from './modules/service/service.service';
import { HeaderComponent } from './shared/layout/components/header/header.component';
import { FooterComponent } from './shared/layout/components/footer/footer.component';
import { HomeComponent } from './modules/misc/components/home/home.component';
import { AboutComponent } from './modules/misc/components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login.component';
import { CreateTicketComponent } from './modules/ticket/components/create-ticket/create-ticket.component';
import { ViewActiveTicketsComponent } from './modules/ticket/components/view-active-tickets/view-active-tickets.component';
import { MessageService } from './shared/services/messages/message.service';
import { CurrentTicketComponent } from './modules/ticket/components/current-ticket/current-ticket.component';
import { StudentService } from './modules/student/student.service';

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'createTicket', component: CreateTicketComponent },
  { path: 'getCurrentTicket', component: CurrentTicketComponent },
  { path: 'viewActiveTickets', component: ViewActiveTicketsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CreateTicketComponent,
    CurrentTicketComponent,
    ViewActiveTicketsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToasterModule,
    SocketIoModule.forRoot(config)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    UserService,
    TicketService,
    ServiceService,
    StudentService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
