import type { FloorCompany } from './types';

// Disney's real price has bounced ~$85-$120 over the last year. The
// 16-week arc walks through three earnings cycles: a parks-soft Q3
// (W3), a streaming-step-up Q4 (W10), and a parks-stabilization Q1
// next-FY (W14). Quiet stretches between earnings let activist /
// product / regulatory beats land without crowding each other.

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
    {
      week: 7,
      price: 107.2,
      blurb:
        'Broader market rallies on a soft PPI print; rate-sensitive media names ride along. Disney up 2.3% on no company-specific news. Sell-side starts publishing Q4 previews.',
      tag: 'macro',
    },
    {
      week: 8,
      price: 99.5,
      blurb:
        'California advances new theme-park labor regulations (minimum staffing ratios, mandatory break enforcement) projected to add $40-60M of annual cost at Disneyland. Trian publishes a follow-up letter — parks spinoff still in play.',
      tag: 'regulatory',
    },
    {
      week: 9,
      price: 103.9,
      blurb:
        '"Inside Out 3" gets a release date and a teaser. The studio is suddenly a tailwind narrative again — sequel economics on a Pixar tentpole are the most predictable IP cash in the company. Stock up 4.4%.',
      tag: 'product',
    },
    {
      week: 10,
      price: 94.8,
      blurb:
        'Q4 print: revenue in line, parks margins worse (operating income down 12% YoY), streaming OI flat at $0.5B, ESPN flagship subs at 5.4M (above company target, below the bull whisper). Stock drops 9%; the call commentary on parks is the focus.',
      tag: 'earnings',
    },
    {
      week: 11,
      price: 98.2,
      blurb:
        'Iger speaks at a media conference and addresses succession in unusually direct terms — names a board committee and an internal-vs-external timeline. No name, but the clarity is reassuring. Stock recovers 3.6%.',
      tag: 'management',
    },
    {
      week: 12,
      price: 103.1,
      blurb:
        'D23 expo: a multi-year capex plan for parks and a Marvel slate that critics receive better than the last cycle. Sell-side parks-softness narrative is harder to write today than it was two weeks ago.',
      tag: 'product',
    },
    {
      week: 13,
      price: 99.4,
      blurb:
        'Netflix raises subscription prices across tiers; Disney+ stays flat. The bull narrative gets a free option: pricing-power lag implies a Disney+ price hike is coming, and the market hasn\'t modeled it yet.',
      tag: 'competitive',
    },
    {
      week: 14,
      price: 109.3,
      blurb:
        'Q1 next-FY print: parks comps stabilize at +1% (vs. -2% feared), streaming OI hits $0.7B, ESPN flagship subs cross 6.0M. Guide for streaming OI is raised. Stock rallies 8.5% on the parks bottom and the ESPN turn.',
      tag: 'earnings',
    },
    {
      week: 15,
      price: 111.8,
      blurb:
        'Quiet drift up. The board is reportedly close to formalizing a response to the Trian letter. Multiple expansion is the dominant debate; the parks-vs-streaming engine question feels resolved either way.',
      tag: 'quiet',
    },
  ],
};
