import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  template: `<div class="count-display">Double Count: {{ doubleCount() }}</div>`
})
export class Child2Component {
  doubleCount = this.counterService.doubleCount;

  constructor(private counterService: CounterService) {}
}