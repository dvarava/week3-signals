import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _count = signal(0);
  doubleCount = computed(() => this._count() * 2);

  increment() {
    this._count.update((v) => v + 1);
  }

  decrement() {
    this._count.update((v) => Math.max(0, v - 1));
  }

  getCount() {
    return this._count;
  }
}
