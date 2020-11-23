import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Ticket } from '../../../interfaces/ticket.interface';
import { User } from '../../../interfaces/user.interface';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets();
  constructor(private readonly backendService: BackendService) { }

}
