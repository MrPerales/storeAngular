import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
  @Input({ required: true }) urlAudio: string = '';
  // !: para no inicializar la variable
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  // referencia
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      url: this.urlAudio,
      container: this.container.nativeElement,
    });
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }
  playPause() {
    this.ws.playPause();
  }
}
