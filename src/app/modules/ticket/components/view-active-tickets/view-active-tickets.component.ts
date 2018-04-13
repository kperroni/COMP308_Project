import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-view-active-tickets',
  templateUrl: './view-active-tickets.component.html',
  styleUrls: ['./view-active-tickets.component.scss']
})
export class ViewActiveTicketsComponent implements OnInit {

  private activeTickets: any;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getActiveTickets().subscribe(
      (data: any) => {
        this.activeTickets = data;
      },
      err => { console.error(err); }
    );

    this.ticketService.getActiveTicketsSocket().subscribe(data => {
      this.ngOnInit();
    });
  }
}
