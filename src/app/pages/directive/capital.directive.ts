import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
@Directive({
  selector: '[appCapital]',
    standalone: true
})
export class CapitalDirective {
  @Output() hover = new EventEmitter();
  constructor(private element : ElementRef<HTMLElement>) { }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.toUpperCase();
    this.hover.emit();
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.innerHTML = this.element.nativeElement.innerHTML.toLowerCase();  }
}