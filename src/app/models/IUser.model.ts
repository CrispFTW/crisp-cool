import { IDashTile } from './IDashTile.model';

export interface IUser {
  closingReq?: string[];
  createdAt?: string | Date;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  familyName?: string;
  funding?: string[];
  givenName?: string;
  interestedIn?: string;
  investmentProperties?: string; // FIXME: should be bool or enum
  lastLoginAt?: string | Date;
  path?: string;
  phone?: string;
  propertyManagement?: string; // FIXME: should be bool or enum
  register?: boolean;
  tiles?: IDashTile[]; // TODO: needs interface for tiles
  totalUnits?: number;
  ts?: number;
  uid?: string;
  unitGoal?: number;
  userType?: string; // FIXME: make enum. what are the user types
}
