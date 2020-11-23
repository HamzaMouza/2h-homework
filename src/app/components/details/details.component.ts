import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../backend.service';
import { Observable } from 'rxjs';
import { Ticket } from '../../../interfaces/ticket.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  ticketId: number;
  public ticket$: Observable<Ticket>;

  constructor(private activatedRoute: ActivatedRoute, private readonly backendService: BackendService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.ticketId = params.ticketId;
      this.ticket$ = this.backendService.ticket(this.ticketId);
      console.log(this.ticket$)
    });
  }

}
