export interface IDashTile {
  /**
   * I would like to use these to create each tile dynamically
   * Since the routes are different though, it'd be nice to
   * create a map for the data that exists to the new data types
   */
  $$mdSelectId?: number;
  bg?: string;
  icon?: string;
  title?: string;
  type?: string;
  view?: string;
}
