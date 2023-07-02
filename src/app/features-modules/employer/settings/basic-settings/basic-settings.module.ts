import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicSettingsRoutingModule } from './basic-settings-routing.module';
import { BasicSettingsComponent } from './basic-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicSettingsComponent
  ],
  imports: [
    CommonModule,
    BasicSettingsRoutingModule,
    SharedModule
  ]
})
export class BasicSettingsModule { }
