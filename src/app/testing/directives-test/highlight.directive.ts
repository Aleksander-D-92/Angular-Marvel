import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
// we call it like this <p appHighlight pesho="purple">Highlight me!</p>
export class HighlightDirective {
  @Input('pesho') highlightColor = 'red';

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
