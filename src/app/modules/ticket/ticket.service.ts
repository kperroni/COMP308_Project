import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ng-socket-io';

@Injectable()
export class TicketService {

  constructor(private http: HttpClient, private socket: Socket) { }

  createTicket(body) {
    return this.http.post('ticket/createTicket', body);
  }

  getCurrentActiveTicket() {
    console.log('getting current ticket');
    return this.http.get('ticket/getCurrentTicket');
  }

  updateCurrentTicket(body) {
    console.log('getting current ticket');
    return this.http.post('ticket/updateCurrentTicket', body);
  }

  getActiveTickets() {
    return this.http.get('/getActiveTickets');
  }

  getActiveTicketsSocket() {
    return this.socket.fromEvent<any>('ticket.created').map(data => {
      console.log(data);
    });
  }
}
