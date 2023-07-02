import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './form-validation.component';

const routes: Routes = [{ path: '', component: FormValidationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
