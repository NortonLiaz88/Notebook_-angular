import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms'
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-form-fiel-error',
  template: `
    <p class= "text-danger">
      {{errorMessage}}
    </p>
  `,
  styleUrls: ['./form-fiel-error.component.css']
})
export class FormFielErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

  public get errorMessage(): string | null {
    if(this.mustShowErrorMessage())
      return this.getErrorMessage();
    else
      return null;
  }

  private mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched
  }

  private getErrorMessage(): string | null {
    if(this.formControl.errors.required)
      return "Dado obrigatório";
      
    else if(this.formControl.errors.email){
      return "formato invalido"
    }

    else if(this.formControl.errors.minlenght){
      const requiredLength = this.formControl.errors.minlenght.requiredLength;
      return `deve ter no minimo${requiredLength}caracteres`;
    }
      
    else if(this.formControl.errors.maxlenght){
      const requiredLength = this.formControl.errors.maxlenght.requiredLength;
      return `deve ter no maximo${requiredLength}caracteres`;
    }

  }

}
