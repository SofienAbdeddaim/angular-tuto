import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";

// selector: '[bgColorRender2]'
// private elmRef: ElementRef, private render: Renderer2
// this.render.setStyle(this.elmRef.nativeElement, 'background-color', 'blue')
@Directive({
    selector: '[bgColorRender2]'
})
export class BgColorRender2 implements OnInit {
    constructor(private elmRef: ElementRef, private render: Renderer2) {}

    ngOnInit() {
        this.render.setStyle(this.elmRef.nativeElement, 'background-color', 'blue');
        this.render.setStyle(this.elmRef.nativeElement, 'color', 'white')
    }
}