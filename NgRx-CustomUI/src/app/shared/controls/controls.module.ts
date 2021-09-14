import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordModule } from './password/password.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { RadiosModule } from './radios/radios.module';
import { SelectModule } from './select/select.module';
import { DateModule } from './date/date.module';
import { DateRangeModule } from './date-range/date-range.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    AutocompleteModule,
    CheckboxesModule,
    DateModule,
    DateRangeModule
  ],
  exports:[
    InputModule,
    FormFieldModule,
    PasswordModule,
    AutocompleteModule,
    CheckboxesModule,
    RadiosModule,
    SelectModule,
    DateModule,
    DateRangeModule
  ]
})
export class ControlsModule { }
