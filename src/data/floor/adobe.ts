import type { FloorCompany } from './types';

// Adobe's real-life price has bounced between ~$340-$520 over the last
// year. Starting price is in that zip code. Sixteen weeks of designed
// state walk the user through three full earnings cycles plus the
// quiet stretches between them — long enough that a buy in W2 can
// hold through Q1 (W3), survive a soft Q2 (W9), and reach Q3 (W14)
// with a thesis that's been re-read or re-justified along the way.

export const adobeFloor: FloorCompany = {
  companyId: 'adobe',
  watchlistThesis:
    'The classic SaaS-moat-vs-AI-threat trade. Subscription economics still print, but every quarter the market re-asks whether the moat holds.',
  events: [
    {
      week: 0,
      price: 478.5,
      blurb:
        'Adobe sits at $478. Sentiment is mixed: bulls point to 11% revenue growth and 95%+ recurring; bears watch Figma momentum and the slow Firefly monetization ramp. Q1 print is in three weeks.',
      tag: 'quiet',
    },
    {
      week: 1,
      price: 462.1,
      blurb:
        'A Bernstein note flags "creative pro share loss to Canva and Figma in SMB segment." No new data — just a downgrade from Outperform to Market Perform. The stock fades 3.4% on the week.',
      tag: 'competitive',
    },
    {
      week: 2,
      price: 471.8,
      blurb:
        'OpenAI launches Sora 2 with native image-to-video. Twitter is on fire. Adobe announces a Firefly integration "in coming quarters" but provides no specifics. Modest bounce as the broader market rallies.',
      tag: 'product',
    },
    {
      week: 3,
      price: 504.6,
      blurb:
        'Q1 print: revenue $5.71B (beat by 1%), Digital Media ARR up 12.8% YoY, full-year guide raised. Management commentary is unusually confident on Firefly enterprise traction. Stock pops 7%.',
      tag: 'earnings',
    },
    {
      week: 4,
      price: 488.2,
      blurb:
        'A Reuters story breaks that Microsoft and Adobe ended licensing talks for an enterprise Copilot deal. Stock gives back half the earnings move. Nothing changed about Q1 — but the narrative re-tilts.',
      tag: 'competitive',
    },
    {
      week: 5,
      price: 495.0,
      blurb:
        'Quiet week. Adobe announces a $5B share buyback authorization. Mostly mechanical — they generate that in free cash flow each year — but the signal rallies the stock 1.4%.',
      tag: 'management',
    },
    {
      week: 6,
      price: 467.3,
      blurb:
        'Tech selloff: 10-year yields jump 25bps on a hot CPI print. High-multiple software gets hit. Adobe drops 5.6% in sympathy with no company-specific news.',
      tag: 'macro',
    },
    {
      week: 7,
      price: 458.4,
      blurb:
        'Sentiment cools into Q2. Two sell-side notes flag "FY2 guide credibility" — the fear is that Q1\'s walk-up implies a back-half hockey stick that depends on Firefly Enterprise contracts that have not been disclosed.',
      tag: 'quiet',
    },
    {
      week: 8,
      price: 445.2,
      blurb:
        'Figma signs Salesforce as a multi-year enterprise design account — replacing Adobe XD across the org. The figure is reportedly in the eight digits annually. The narrative dent is bigger than the dollars.',
      tag: 'competitive',
    },
    {
      week: 9,
      price: 471.9,
      blurb:
        'Q2 print: revenue in line at $5.83B, Digital Media ARR growth slows to 11.4% (decel from 12.8%), full-year guide narrowed but maintained. Firefly enterprise pipeline qualitatively strong; no monetization disclosure. Mixed reaction; stock recovers most of the pre-print fade.',
      tag: 'earnings',
    },
    {
      week: 10,
      price: 462.8,
      blurb:
        'Adobe announces Firefly Premium for enterprise — $30/seat/mo, governance and IP-indemnity pitch. The first concrete monetization vehicle. Initial reaction is muted: pricing is fine, but the seat-count math is the question.',
      tag: 'product',
    },
    {
      week: 11,
      price: 456.9,
      blurb:
        'Tech tape softens on a Fed officials\' speech raising "higher for longer" again. Software underperforms. Adobe drops 1.3% on no specific news.',
      tag: 'macro',
    },
    {
      week: 12,
      price: 478.2,
      blurb:
        'A buy-side conference channel-check piece leaks: early Firefly Premium adoption is reportedly running ahead of internal targets across financial-services and pharma verticals. Stock rallies 4.7% as the bull case finds a number.',
      tag: 'product',
    },
    {
      week: 13,
      price: 470.8,
      blurb:
        'Canva acquires Affinity (the Mac creative suite) for ~$700M. The threat narrative re-tightens at the SMB / pro-creator end of the funnel. Stock fades 1.5% as analysts split on whether this matters.',
      tag: 'competitive',
    },
    {
      week: 14,
      price: 498.4,
      blurb:
        'Q3 print: revenue $5.96B (beat 0.7%), Digital Media ARR growth re-accelerates to 13.1%, Firefly enterprise contributes ~$80M in the quarter (first time disclosed), full-year guide raised. Stock pops 5.9%.',
      tag: 'earnings',
    },
    {
      week: 15,
      price: 510.1,
      blurb:
        'Quiet drift up. Two sell-side firms upgrade on the Firefly disclosure; the buy-side narrative starts pricing in a "Microsoft of creative" multiple expansion case. Whether the trade played out either way is now legible.',
      tag: 'quiet',
    },
  ],
};
