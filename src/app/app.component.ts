import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public counterService: CounterService) {}
}
