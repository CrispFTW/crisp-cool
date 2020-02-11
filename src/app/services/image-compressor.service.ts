import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ImageCompressorService {

  constructor () { }

  public compress (file: File): Observable<unknown> {
    const width: number = 600;
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);

    return new Observable(observer => {
      reader.onload = ev => {
        const image = new Image();
        // tslint:disable-next-line
        image.src = (ev.target as any).result;
        (image.onload = () => {
          const canvas = document.createElement('canvas');
          const scaleFactor = width / image.width;
          canvas.width = width;
          canvas.height = image.height * scaleFactor;
          const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, width, image.height * scaleFactor);
          const output = ctx.canvas.toDataURL();
          observer.next(output);
        }),
        (reader.onerror = err => observer.error(err));
      };
    });
  }
}
