import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';
import { ImageCompressorService } from '@app/services/image-compressor.service';
import { DealComposerComponent } from './deal-composer.component';



@NgModule({
  declarations: [DealComposerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [DealComposerComponent],
  providers: [ImageCompressorService],
})
export class DealComposerModule { }
