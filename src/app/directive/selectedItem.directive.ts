import { Directive, HostBinding, HostListener } from "@angular/core";

// selector: '[selectItem]'
// @HostBinding('class.active') bgColorItem = false;

@Directive({
    selector: '[dropdownDir]'
})
export class DropdownDirective {
    @HostBinding('class.open') selectItem = false;

    @HostListener('click') onToggleDropdown() {
        this.selectItem = !this.selectItem;
    }
}