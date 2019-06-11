import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from '../communications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.css']
})
export class RhsComponent implements OnInit {
  message = '';
  message$: Observable<string>;

  constructor(private service: CommunicationsService) { }

  ngOnInit() {
    this.message$ = this.service.getSubscription();
  }

  getIt() {
    this.message = this.service.getMessage();
  }

}
