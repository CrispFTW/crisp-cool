export interface IDashboardTile {
  title?: string;
  view?: string;
  icons?: string;
  off?: boolean;
  link?: string;
  // tslint:disable-next-line
  [key: string]: any;
}
