import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // no async
    // before render
    // una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }
  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }
  ngOnInit() {
    // after render
    // una vez
    // async, then
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    // setInterval
    this.counterRef = window.setInterval(() => {
      this.counter.update((prevState) => prevState + 1);
      console.log('setInterval');
    }, 1000);
  }
  ngAfterViewInit() {
    // after render
    // avisa si los hijos de este componente fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    // interval stop ya que no se detiene aunque sea destruido el componente
    clearInterval(this.counterRef);
  }

  doSomething() {
    //async
    console.log('change duration ');
  }
}
