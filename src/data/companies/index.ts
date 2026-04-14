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
import { shopifyProfile } from './shopify';
import { salesforceProfile } from './salesforce';
import { homeDepotProfile } from './homedepot';
import { walmartProfile } from './walmart';
import { chipotleProfile } from './chipotle';
import { spotifyProfile } from './spotify';

export {
  adobeProfile,
  visaProfile,
  starbucksProfile,
  disneyProfile,
  shopifyProfile,
  salesforceProfile,
  homeDepotProfile,
  walmartProfile,
  chipotleProfile,
  spotifyProfile,
};

/**
 * All seeded company profiles available in Analyst Mode. Ordered by
 * difficulty: intros first (more intuitive businesses), advanced last.
 * Within a difficulty bucket, grouped so variety shows first.
 */
export const allCompanies: CompanyProfile[] = [
  // Intro — intuitive businesses, clean stories
  visaProfile,         // network effect moat
  starbucksProfile,    // consumer brand + saturation
  walmartProfile,      // scale + retail re-rating
  homeDepotProfile,    // housing cycle + duopoly
  chipotleProfile,     // restaurant unit economics

  // Standard — more moving parts, requires holding multiple factors
  adobeProfile,        // SaaS moat + AI threat
  salesforceProfile,   // enterprise SaaS + growth deceleration
  shopifyProfile,      // e-com platform + GMV sensitivity

  // Advanced — structural tension, sum-of-parts or transition stories
  disneyProfile,       // sum-of-parts, streaming transition
  spotifyProfile,      // label leverage, structural margin cap
];

export function getCompanyById(id: string): CompanyProfile | undefined {
  return allCompanies.find((c) => c.id === id);
}
