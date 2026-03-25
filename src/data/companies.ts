import { nvidia } from './nvidia';
import { amazon } from './amazon';
import { costco } from './costco';
import type { Company } from './types';

export const companies: Company[] = [nvidia, amazon, costco];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}
