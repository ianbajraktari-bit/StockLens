import type { FloorCompany } from './types';

// Chipotle has been a 50x P/E compounder. The 16-week arc walks
// through three earnings cycles (W2 / W10 / W14) and gives the
// foodborne-illness scare and recovery the room they need to actually
// teach: panic, traceback, foot-traffic data, comp-recovery print.
// The premium-multiple debate is the through-line.

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
    {
      week: 7,
      price: 59.4,
      blurb:
        'Chipotle rolls out a portion-engineering update: standardized scoop sizes, new digital line training. The TikTok narrative dies; "Chipotle is listening" becomes the new sell-side talking point.',
      tag: 'product',
    },
    {
      week: 8,
      price: 61.2,
      blurb:
        'CFO presents at a sell-side conference and guides that California comps are "back on track" through July. No specific number, but the language is unusually concrete for this management team. Stock up 3.0%.',
      tag: 'management',
    },
    {
      week: 9,
      price: 58.8,
      blurb:
        'A broad fast-casual selloff: McDonald\'s misses on US comps, Wingstop guides cautiously, the consumer-spending narrative tightens. Chipotle drags 3.9% in sympathy with no company-specific news.',
      tag: 'macro',
    },
    {
      week: 10,
      price: 62.5,
      blurb:
        'Q2 print: comps +5.1% (traffic +3.0% post-norovirus, ticket +2.1%), restaurant-level margin 27.0%, 51 new openings, full-year guide reiterated. Slight pop — the bear "premium-multiple breaks on the first scratch" thesis is now harder to write.',
      tag: 'earnings',
    },
    {
      week: 11,
      price: 64.4,
      blurb:
        'Chicken al pastor returns as an LTO with a national TV spot. Mobile app downloads up 18% week-over-week. The LTO playbook continues to print at the margin.',
      tag: 'product',
    },
    {
      week: 12,
      price: 61.1,
      blurb:
        'Cava reports a +12.4% comp and raises guide. The "Chipotle of the Mediterranean" comparison gets airtime; the question is whether Cava is taking incremental share or growing the category. Stock fades 5.1%.',
      tag: 'competitive',
    },
    {
      week: 13,
      price: 58.7,
      blurb:
        'Fast-casual ETF fades on consumer-spending fears (a soft retail-sales print, weaker-than-expected airline bookings). Chipotle drops 3.9% on no company-specific news.',
      tag: 'macro',
    },
    {
      week: 14,
      price: 66.2,
      blurb:
        'Q3 print: comps +6.8%, traffic +4.8%, restaurant-level margin 28.1%, full-year guide raised. International JV announcement: Middle East franchise rollout starting next year. Stock rallies 12.8%.',
      tag: 'earnings',
    },
    {
      week: 15,
      price: 68.5,
      blurb:
        'Quiet drift up. The premium-multiple debate is back: bulls argue the moat just survived its stress test; bears say the multiple already prices in another five years of unblemished execution. Either side has a real argument here.',
      tag: 'quiet',
    },
  ],
};
