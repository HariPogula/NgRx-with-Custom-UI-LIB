import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex,regexErrors } from '@app/shared';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  isInline: boolean = false;
  regexErrors = regexErrors;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(regex.email),
          ],
        },
      ],
    });
  }

  onPatchValue() {
    this.form.patchValue({ name: 'test' });
  }
  onSubmit() {
    console.log('Submitted');
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }
}
