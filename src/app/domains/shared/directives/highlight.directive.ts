import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor() {}
  element = inject(ElementRef);

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#a5B';
  }
}
