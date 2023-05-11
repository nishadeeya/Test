import { Directive,ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appItalicFont]',
  standalone:true
})
export class ItalicFontDirective {

  @Output() hover = new EventEmitter();
  constructor(private element : ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.element.nativeElement.style.fontStyle = 'italic';
    this.hover.emit();
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.style.fontStyle = 'normal';
  }

}
