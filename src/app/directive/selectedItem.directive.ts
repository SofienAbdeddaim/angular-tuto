import { HostBinding, HostListener, Directive } from "@angular/core";

// selector: '[selectItem]'
// @HostBinding('class.active') bgColorItem = false;
@Directive({
    selector: '[dropdownD]'
})
export class DropDownD {

    @HostBinding('class.open') toggleD = false;

    @HostListener('click') toggleDire() {
        this.toggleD = !this.toggleD;
    }
}