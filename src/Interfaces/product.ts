import { Category } from './category';

export interface Products {
  id: number;
  titleEnglish: string;
  titleArabic: string;
  descriptionEnglish: string;
  descriptionArabic: string;
  availability: number;
  priceJD: number;
  priceSAR: number;
  ategory: Category;
}
