import { DealStatus } from '../types/DealStatus';
import { IDealPhoto } from './IDealPhoto.model';

// what data is the most important to those viewing it
// strip dollar signs/special chars off of all deal pricing
export interface IDeal {
  address?: string;
  baths?: string | number;
  bedrooms?: string | number;
  buildingSqFt?: string | number;
  details?: string;
  docs?: string[]; // will need to update this
  formattedAddress?: string;
  isOpen?: boolean;
  lotSqFt?: string | number;
  marketRent?: string | number;
  occupiedUnits?: string | number;
  offMarketAsk?: string | number;
  path?: string;
  photos?: IDealPhoto[];
  place?: string;
  primaryPhoto?: IDealPhoto;
  propertyType?: string;
  shortFileName?: string;
  status?: DealStatus;
  type?: string;
  uid?: string;
  units?: string | number;
  yearBult?: string | number;
  yearlyTaxes?: string | number;
  // tslint:disable-next-line
  [key: string]: any;
}


// yes
