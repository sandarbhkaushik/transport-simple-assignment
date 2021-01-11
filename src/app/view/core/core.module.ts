import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core/core.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    SelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    Ng2SearchPipeModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
})
export class CoreModule { }
