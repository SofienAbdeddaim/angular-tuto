import { HostBinding, Directive, Input, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[bgnewOne]'
})
export class BgColordataDirective implements OnInit{
    @Input() defaultValue: string = 'transparent';
    @Input('bgnewOne') highlightedColor: string = 'red';
    @HostBinding('style.backgroundColor') bgColor = 'transparent';

    ngOnInit() {
        this.bgColor = this.defaultValue;
    }

    @HostListener('mouseenter') enterHighlight() {
        this.bgColor = this.highlightedColor;
    }
    @HostListener('mouseleave') leaveHighlight() {
        this.bgColor = this.defaultValue;
    }

}