import { Injectable } from '@angular/core';

/** AngularFire/Firebase */
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

/** RxJS */
import { map, switchMap } from 'rxjs/operators';

/** Models */
import { DealStatus } from '@app/types/DealStatus';
import { IDeal } from '@models/IDeal.model';
import { IDealPhoto } from '@models/IDealPhoto.model';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor (private db: AngularFirestore) { }

  /**
   * Get all deals
   */
  public getAllDeals (): AngularFirestoreCollection<IDeal[]> {
    return this.db.collection('dpack');
  }

  public getActiveDeals (): AngularFirestoreCollection<IDeal> {
    return this.db.collection('dpack', ref => ref.where('status', '==', DealStatus.Active));
  }

  public getPendingDeals (): AngularFirestoreCollection<IDeal> {
    return this.db.collection('dpack', ref => ref.where('status', '==', DealStatus.Pending));
  }

  public getSubmittedDeals (): AngularFirestoreCollection<IDeal> {
    return this.db.collection('dpack', ref => ref.where('status', '==', DealStatus.Submitted));
  }

  public getDealDetail (path: string): AngularFirestoreDocument<IDeal> {
    // TODO: look into route data to pass deal details
    return this.db.doc<IDeal>(path);
  }

  public getDealPhoto (path: string): AngularFirestoreDocument<IDealPhoto> {
    return this.db.doc<IDealPhoto>(path);
  }
}
