import type { FloorCompany } from './types';

// Adobe's real-life price has bounced between ~$340-$520 over the last
// year. Starting price is in that zip code; the path is hand-designed
// to give the user a clean "AI threat narrative pressures the SaaS
// compounder" arc with one earnings beat in the middle.

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
  ],
};
