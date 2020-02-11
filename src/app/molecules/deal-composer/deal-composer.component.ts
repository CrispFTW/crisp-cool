import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DealService } from '@app/services/deal.service';
import { ImageCompressorService } from '@app/services/image-compressor.service';
import { IDeal } from '@models/IDeal.model';
import { IDealPhoto } from '@models/IDealPhoto.model';
import { EMPTY } from 'rxjs';
import { expand, map } from 'rxjs/operators';

@Component({
  selector: 'deal-composer',
  templateUrl: './deal-composer.component.html',
  styleUrls: ['./deal-composer.component.scss']
})
export class DealComposerComponent implements OnInit {

  @Input() deal: IDeal;
  @Input() readOnly: boolean = false;
  @ViewChild('photosInput', { static: true })
  photosInput: ElementRef<HTMLInputElement>;
  @ViewChild('docsInput', { static: true })
  docsInput: ElementRef<HTMLInputElement>;
  dealComposerForm: FormGroup;
  compressedImages: unknown[] = [];
  get photos (): FormControl | AbstractControl {
    return this.dealComposerForm.get('photos');
  }
  get primaryImage (): string {
    return this.photos.value[0];
  }

  constructor (
    private fb: FormBuilder,
    private compressor: ImageCompressorService,
    private dealService: DealService,
  ) { }

  ngOnInit () {
    this.createComposerForm();
    if (this.deal) {
      this.displayDealValues(this.deal);
      console.log(this.primaryImage);
    }
  }

  private createComposerForm (): void {
    this.dealComposerForm = this.fb.group({
      address: ['', Validators.required],
      propertyType: ['', Validators.required],// dropdown?
      bedrooms: [null, Validators.required],
      marketRent: [null, Validators.required],
      baths: [null, Validators.required],
      buildingSqFt: [null, Validators.required],
      lotSqFt: [null, Validators.required],
      occupiedUnits: [null, Validators.required],
      totalUnits: [null, Validators.required],
      yearBuilt: [null, Validators.required],
      yearlyTaxes: [null, Validators.required],
      photos: [[], Validators.required],
      documents: [null],
    });
  }

  private displayDealValues (deal: IDeal): void {
    // Object.keys(deal).forEach(key => console.log(key));
    Object.keys(this.dealComposerForm.controls).forEach(control => {
      this.dealComposerForm.controls[control].patchValue(deal[control]);
    });
  }

  // public getPrimaryPhoto (path: string) {
  //   console.log(this.dealService.getDealPhoto(path));

  //   return this.dealService.getDealPhoto(path);
  // }

  private convertImages (image: File, index, arr) {
    return this.compressor.compress(image).pipe(
      map(res => {
        console.log(`compressed ${index} ${image.name}`);
        this.compressedImages.push(res);

        return {
          data: res,
          index: index + 1,
          arr,
        };
      })
    );
  }

  public updateImageDisplay (ev: UIEvent): void {
    // update display image
    const data = (ev.target as HTMLInputElement).files;
    console.log(`input: ${data}`);
    const compress = this.convertImages(data[0], 0, data)
      .pipe(
        expand(res => {
          return res.index > res.arr.length - 1
            ? EMPTY
            : this.convertImages(data[res.index], res.index, data);
        }),
      );

    compress.subscribe(res => {
      if (res.index > res.arr.length - 1) {
        console.log('compression success', this.compressedImages);
        this.photos.patchValue(this.compressedImages);
      }
    });
  }

}
