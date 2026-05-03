import type { FloorCompany } from './types';

// Disney's real price has bounced ~$85-$120 over the last year. Story
// arc: streaming finally crosses to profitability while parks softens
// at the margin — the classic sum-of-parts mispricing setup.

export const disneyFloor: FloorCompany = {
  companyId: 'disney',
  watchlistThesis:
    'A messy three-engine business at a depressed multiple. The bet: streaming hits durable profitability before linear melts faster than parks can carry the weight.',
  events: [
    {
      week: 0,
      price: 102.4,
      blurb:
        'Disney trades at $102 — roughly 20x forward earnings, a multi-year low for the franchise. Streaming is at break-even, parks are softening on weather and a tough Florida comp, and ESPN flagship streaming launches in the fall.',
      tag: 'quiet',
    },
    {
      week: 1,
      price: 99.8,
      blurb:
        'A WSJ piece reports that Walt Disney World hotel occupancy ran 2-3 points below plan in the latest quarter. No comment from the company. Stock fades 2.5% as the parks-softness narrative gets a fresh data point.',
      tag: 'competitive',
    },
    {
      week: 2,
      price: 105.7,
      blurb:
        'A new Marvel TV series on Disney+ generates real buzz — the first "must-watch" Marvel content in over a year. Subscriber churn-rate chatter on the analyst calls turns positive. Stock recovers and pushes through.',
      tag: 'product',
    },
    {
      week: 3,
      price: 96.2,
      blurb:
        'Q3 print: revenue light by 0.8%, parks operating income down 6% YoY, streaming hits $0.4B in operating profit (first real quarter of profitability). Mixed reaction; the market focuses on parks. Stock drops 9%.',
      tag: 'earnings',
    },
    {
      week: 4,
      price: 100.1,
      blurb:
        'Activist investor Trian (Nelson Peltz) re-emerges with a 4% stake and a public letter pushing for a parks spinoff and faster ESPN monetization. Stock rallies on the catalyst, regardless of whether the thesis works.',
      tag: 'management',
    },
    {
      week: 5,
      price: 108.4,
      blurb:
        'The flagship ESPN streaming product launches at $29.99/mo. Initial signups beat internal targets by 30% in the first week. Bull case finally has a number to point to.',
      tag: 'product',
    },
    {
      week: 6,
      price: 104.8,
      blurb:
        'Quiet week into a long weekend. The stock drifts down 3.3% on no news. The setup into Q4 print in three weeks is now the dominant narrative.',
      tag: 'quiet',
    },
  ],
};
