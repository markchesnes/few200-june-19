import { Component, OnInit } from '@angular/core';
import { itemAddedToList } from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(item: HTMLInputElement) {
    const description = item.value;
    this.store.dispatch(itemAddedToList({ description }));
    item.value = '';
    item.focus();
  }

}
