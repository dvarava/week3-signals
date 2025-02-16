import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  template: `<div class="count-display">Count: {{ count() }}</div>`
})
export class Child1Component {
  count = this.counterService.getCount();

  constructor(private counterService: CounterService) {}
}