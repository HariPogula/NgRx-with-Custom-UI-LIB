import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }
]
})
export class InputComponent implements OnInit,ControlValueAccessor {
  @Input() placeholder?: string;
  @Output() changed = new EventEmitter<string>();
  
  value:string='';
  isDisabled: boolean = false;
  constructor() { }

  private propagateChange:any=()=>{};
  private propogateTouched:any=()=>{};

  writeValue(value: string): void {
    this.value=value;
  }
  registerOnChange(fn: any): void {
   this.propagateChange =fn;
  }
  registerOnTouched(fn: any): void {
  this.propogateTouched =fn;
  }

  setDisabledState(isDisabled:boolean):void {
this.isDisabled=isDisabled;
  }

  onKeyup(event:Event): void {
    this.value = (<HTMLInputElement>event.target).value
    this.propagateChange(this.value);
    this.changed.emit(this.value);
}

onBlur(): void {
    this.propogateTouched();
}

  ngOnInit(): void {
  }

}
