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
import { jpmorganProfile } from './jpmorgan';
import { unitedHealthProfile } from './unitedhealth';
import { lillyProfile } from './lilly';
import { tsmcProfile } from './tsmc';
import { exxonProfile } from './exxon';
import { cocaColaProfile } from './cocacola';

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
  jpmorganProfile,
  unitedHealthProfile,
  lillyProfile,
  tsmcProfile,
  exxonProfile,
  cocaColaProfile,
};

/**
 * All seeded company profiles available in Analyst Mode. Ordered by
 * difficulty: intros first (more intuitive businesses), advanced last.
 * Within a difficulty bucket, grouped so sector variety shows first.
 */
export const allCompanies: CompanyProfile[] = [
  // Intro — intuitive businesses, clean stories
  visaProfile,         // network effect moat
  starbucksProfile,    // consumer brand + saturation
  cocaColaProfile,     // consumer staples dividend compounder
  walmartProfile,      // scale + retail re-rating
  homeDepotProfile,    // housing cycle + duopoly
  chipotleProfile,     // restaurant unit economics

  // Standard — more moving parts, requires holding multiple factors
  jpmorganProfile,     // banking, cyclical, four-business conglomerate
  unitedHealthProfile, // healthcare insurance + vertical integration
  exxonProfile,        // integrated oil & gas, commodity cyclicality
  adobeProfile,        // SaaS moat + AI threat
  salesforceProfile,   // enterprise SaaS + growth deceleration
  shopifyProfile,      // e-com platform + GMV sensitivity

  // Advanced — structural tension, sum-of-parts, geopolitics, or transition
  disneyProfile,       // sum-of-parts, streaming transition
  spotifyProfile,      // label leverage, structural margin cap
  lillyProfile,        // pharma hypergrowth, GLP-1 bet
  tsmcProfile,         // semis monopoly, Taiwan geopolitical risk
];

export function getCompanyById(id: string): CompanyProfile | undefined {
  return allCompanies.find((c) => c.id === id);
}
