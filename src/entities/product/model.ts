// Product entity - can import from shared only
import { formatDate } from '../../shared/lib/utils';

export interface Product {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
}

export function formatProductDate(product: Product): string {
  return formatDate(product.createdAt);
}
