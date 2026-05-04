import type { FloorCompany } from './types';

// Chipotle has been a 50x P/E compounder. Story arc: the unit
// economics keep working, but the multiple is the question. A
// foodborne illness scare creates the classic "is the moat OK?" beat.

export const chipotleFloor: FloorCompany = {
  companyId: 'chipotle',
  watchlistThesis:
    "Best unit economics in restaurants, priced like everyone already knows. The trade lives in whether premium multiple holds when something — anything — goes wrong.",
  events: [
    {
      week: 0,
      price: 56.2,
      blurb:
        'Chipotle trades at $56 (post-50:1 split). Fifty-three times earnings is rich, but new-store ROI keeps printing and Chipotlanes are running ~15% higher AUVs than legacy stores. Q1 in two weeks.',
      tag: 'quiet',
    },
    {
      week: 1,
      price: 58.9,
      blurb:
        'A buy-side note circulates noting that "portion size complaints" have spiked on TikTok. Management did a follow-up internal portion audit. Stock rises 4.8% on no real news — momentum is doing the work.',
      tag: 'product',
    },
    {
      week: 2,
      price: 62.1,
      blurb:
        'Q1 print: comps +7.4% (traffic +5.4%, ticket +2.0%), restaurant-level margin 27.5%, 47 new openings (8 of which were Chipotlanes). Full-year guide reiterated. Stock pops 5.4%.',
      tag: 'earnings',
    },
    {
      week: 3,
      price: 53.4,
      blurb:
        'A norovirus outbreak is reported at three Chipotle stores in California — 41 confirmed cases, locations temporarily closed. The 2015 E. coli memory floods every news segment. Stock drops 14%.',
      tag: 'regulatory',
    },
    {
      week: 4,
      price: 55.8,
      blurb:
        'CDC traces the outbreak to a single contaminated produce lot at a regional supplier. No systemic issue, no widespread closures. Sell-side starts walking back fear. Modest recovery.',
      tag: 'regulatory',
    },
    {
      week: 5,
      price: 54.1,
      blurb:
        'Foot traffic data from third-party sources (Placer.ai) shows California traffic down 12% week-over-week — outbreak hangover is real. Other regions unaffected. The market is split on whether comps survive Q2.',
      tag: 'macro',
    },
    {
      week: 6,
      price: 57.6,
      blurb:
        "Quiet week — California traffic recovering, no new outbreak data. Stock drifts up 6.5% as the panic premium washes out. Q2 print is now the next real test.",
      tag: 'quiet',
    },
  ],
};
