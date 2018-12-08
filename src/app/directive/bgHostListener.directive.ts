import { OnInit, ElementRef, Renderer2, HostListener, Directive } from "@angular/core";

// '[bgHostListener]'
// private elmRef: ElementRef, private render: Renderer2
// @HostListener('mouseenter') onHoverBgColor() {}

@Directive({
    selector: '[bgHostListener]'
})
export class BgColorHostListener implements OnInit {
     
    constructor(private elmRef: ElementRef, private render: Renderer2) {}

    ngOnInit() {}

    @HostListener('mouseenter') onHighlightBg() {
        this.render.setStyle(this.elmRef.nativeElement, 'background-color', 'red');
        this.render.setStyle(this.elmRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') onHighlightLeave() {
        this.render.setStyle(this.elmRef.nativeElement, 'background-color', 'transparent');
        this.render.setStyle(this.elmRef.nativeElement, 'color', 'black');
    }
}