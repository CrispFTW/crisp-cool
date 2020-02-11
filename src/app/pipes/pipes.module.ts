import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormattedAddressPipe } from './formatted-address.pipe';
import { StripSpecialCharsPipe } from './strip-special-chars.pipe';

@NgModule({
  declarations: [
    StripSpecialCharsPipe,
    FormattedAddressPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StripSpecialCharsPipe,
    FormattedAddressPipe,
  ],
})
export class PipesModule { }
