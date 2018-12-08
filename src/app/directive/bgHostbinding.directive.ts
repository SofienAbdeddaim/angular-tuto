import { ElementRef, Renderer2, Directive, HostBinding, HostListener } from "@angular/core";

// '[bgHostBinding]'
// @HostBinding('style.backgroundColor') bgColor = 'transparent';

@Directive({
    selector: '[bgHostBinding]'
})
export class BgHostBinding {
    
    @HostBinding('style.backgroundColor') bgColor = 'transparent';
    constructor() {}

    @HostListener('mouseenter') onHightBg() {
        this.bgColor = 'yellow';
    }
    @HostListener('mouseleave') onHightBgLeave() {
        this.bgColor = 'transparent';
    }

} 