import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CounterComponent,
    WaveAudioComponent,
    HighlightDirective,
    HeaderComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(e: Event) {
    const input = e.target as HTMLInputElement;
    // para que mande el valor como numero
    const value = input.valueAsNumber;
    this.duration.set(value);
  }
  changeMessage(e: Event) {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    this.message.set(value);
  }
}
