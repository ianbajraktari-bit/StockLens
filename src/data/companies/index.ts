export type {
  CompanyProfile,
  AnalystStepKind,
  AnalystStepContent,
  CompanyKeyFact,
  WorkflowStepTemplate,
} from './types';
export { WORKFLOW_STEPS } from './types';

import type { CompanyProfile } from './types';
import { adobeProfile } from './adobe';
import { visaProfile } from './visa';
import { starbucksProfile } from './starbucks';
import { disneyProfile } from './disney';

export { adobeProfile, visaProfile, starbucksProfile, disneyProfile };

/**
 * All seeded company profiles available in Analyst Mode. Ordered by
 * difficulty: intros first (more intuitive businesses), advanced last.
 */
export const allCompanies: CompanyProfile[] = [
  visaProfile,       // intro — classic network moat, clean story
  starbucksProfile,  // intro — consumer brand, easy to reason about
  adobeProfile,      // standard — SaaS moat + AI risk
  disneyProfile,     // advanced — sum-of-parts, transition story
];

export function getCompanyById(id: string): CompanyProfile | undefined {
  return allCompanies.find((c) => c.id === id);
}
