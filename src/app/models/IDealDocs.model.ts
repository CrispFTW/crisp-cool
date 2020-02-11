import { IDealDocsPages } from './IDealDocsPages.model';

export interface IDealDocs {
  index?: number;
  title?: string;
  type?: string;
  pages?: IDealDocsPages[];
}
