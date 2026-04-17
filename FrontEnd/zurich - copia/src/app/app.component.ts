import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CounterState } from './state/counter.state';
import { Incrementar, Decrementar, Reset } from './state/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],  // 👈 AQUÍ está la solución
  templateUrl: './app.component.html'
})
export class AppComponent {

  @Select(CounterState.getCounter)
  counter$!: Observable<number>;

  constructor(private store: Store) {}

  incrementar() {
    this.store.dispatch(new Incrementar());
  }

  decrementar() {
    this.store.dispatch(new Decrementar());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}