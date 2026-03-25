import { nvidia } from './nvidia';
import { amazon } from './amazon';
import { costco } from './costco';
import { apple } from './apple';
import { jpmorgan } from './jpmorgan';
import { visa } from './visa';
import { walmart } from './walmart';
import type { Company } from './types';

export const companies: Company[] = [
  nvidia,
  apple,
  amazon,
  costco,
  walmart,
  jpmorgan,
  visa,
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}
