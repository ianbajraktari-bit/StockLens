import type { CompanyModule } from '../lessonTypes';
import { appleModule } from './apple-lessons';

// All lesson modules, keyed by company ID
export const allModules: Record<string, CompanyModule> = {
  [appleModule.id]: appleModule,
};

// Get modules grouped by tier
export function getModulesByTier(): Record<string, CompanyModule[]> {
  const grouped: Record<string, CompanyModule[]> = {};
  for (const mod of Object.values(allModules)) {
    if (!grouped[mod.tier]) grouped[mod.tier] = [];
    grouped[mod.tier].push(mod);
  }
  // Sort within each tier by tierOrder
  for (const tier of Object.keys(grouped)) {
    grouped[tier].sort((a, b) => a.tierOrder - b.tierOrder);
  }
  return grouped;
}
