import { Directive, ElementRef, OnInit } from "@angular/core";

// selector: '[Highlight]'
// angular prepare for us the reference of the element> private elmRF: ElementRef
// refEl.nativeElement.style.backgroundColor = "green";

@Directive({
    selector: '[Highlight]'
})
export class HighlightDirective implements OnInit{
    
    constructor(private elmRef: ElementRef) {}

    ngOnInit() {
        this.elmRef.nativeElement.style.backgroundColor = "green";
        this.elmRef.nativeElement.style.color = "white";
    }
}