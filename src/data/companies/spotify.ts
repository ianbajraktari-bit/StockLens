import type { CompanyProfile } from './types';

export const spotifyProfile: CompanyProfile = {
  id: 'spotify',
  ticker: 'SPOT',
  name: 'Spotify',
  emoji: '🎵',
  sector: 'Media / Streaming',
  oneLiner: 'The dominant music streaming platform — structurally held hostage by the music labels',
  description:
    "Spotify has ~675 million users and ~265 million paying subscribers — by far the largest paid music streaming service in the world. For a decade it grew users aggressively while losing money, because music labels take ~70% of every revenue dollar. After a 2023-24 cost reset and price increases, Spotify has finally turned profitable — and the stock has tripled. The question now is whether this is a durable margin expansion story (podcasts, audiobooks, ads, better label leverage) or a one-time re-rating that fades as the label economics reassert. The fundamental constraint is brutal: Spotify does not own the content it sells, and the people who do own the content have maximum leverage.",
  dataAsOf: 'FY 2024',
  difficulty: 'advanced',
  estimatedMinutes: 13,
  keyFacts: [
    { label: 'Revenue', value: '~€15.7B', detail: 'FY2024 — grew ~18% YoY, accelerating on price increases' },
    { label: 'Monthly Active Users', value: '~675M', detail: 'Free (ad-supported) + Premium combined' },
    { label: 'Premium Subscribers', value: '~263M', detail: 'Paying users — the profit engine' },
    { label: 'Gross Margin', value: '~29.6%', detail: 'Limited by label royalties (~70% of revenue goes to rights holders)' },
    { label: 'Operating Margin', value: '~11%', detail: 'FY2024 — turned meaningfully profitable for first time' },
    { label: 'P/E Ratio', value: '~40-60x fwd', detail: 'Priced for significant further margin expansion' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "Spotify runs a two-sided music (and audio) platform. Users get unlimited on-demand streaming — via a free ad-supported tier (~412M users) or a paid Premium tier (~263M subscribers) for around €11/month. Spotify pays music labels and publishers for the rights, typically as a percentage of revenue — roughly 70% of every dollar flows out as royalties, which is why gross margin is capped around 30%. On top of music, Spotify has layered in podcasts (most of which it doesn't pay per-stream for — often a flat licensing fee or owned IP), audiobooks, and advertising. The business model is simple on the surface but structurally constrained: Spotify sells access to content it doesn't own, and the content owners (Universal, Sony, Warner — the 'Big Three' labels) hold the pricing lever.",
      strongReasoningIncludes: [
        'Identifies the two tiers (free ad-supported vs. paid Premium)',
        'Explains the label royalty structure and its impact on gross margin',
        'Recognizes Spotify does NOT own the music it sells — a crucial structural fact',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers. (1) Premium subscriber growth — the profit engine, and still growing ~10-12% YoY. New geographies (India, Latin America, Africa) add users but at much lower ARPU than developed markets. (2) Average revenue per user (ARPU) — historically flat or declining because growth came from lower-ARPU markets, but now rising after the 2023-24 price increases (~10-15% hikes in US and parts of Europe). Price power is limited but real. (3) Gross margin expansion — the real valuation driver. This comes from a mix of podcasts scaling (higher margin than music), ad business growth (Spotify monetizing its free tier better), audiobooks (new product), and re-negotiating label deals (Spotify now has scale to push back on royalty terms). Secondary: the ad-supported business, which is small but could become meaningful if Spotify cracks better targeting.",
      strongReasoningIncludes: [
        'Identifies subscriber growth as primary near-term driver',
        'Names ARPU / price increases as a specific lever',
        'References gross margin expansion from non-music content or label renegotiation',
      ],
    },
    moat: {
      modelAnswer:
        "Spotify's moat is scale + product + habit, but it's narrower than most tech platforms and explicitly constrained. (1) Scale: Spotify is 2-3x larger than Apple Music and YouTube Music combined, which gives it pricing leverage with labels (marginal) and advertising scale (real but small). (2) Product/UX: Spotify's recommendation algorithm and playlist curation — Discover Weekly, Release Radar, Daylist — create genuine product loyalty. Switching to a competitor means losing your saved playlists, personalization, and the muscle memory of daily use. (3) Habit and social proof: Spotify Wrapped, playlist sharing, and 'everyone I know uses Spotify' create weak but real network effects. What Spotify definitively does NOT have is any content moat. The music catalog is identical to what Apple Music, YouTube Music, and Amazon Music offer. Apple could subsidize Apple Music forever; Amazon could bundle Music into Prime. Spotify's moat is 'we're better at this one thing' — which is a narrower moat than most investors assume.",
      strongReasoningIncludes: [
        'Identifies product / UX / personalization as the primary moat',
        'Acknowledges there is NO content moat — catalog is commoditized',
        'Notes competitive threat from bundled incumbents (Apple, Amazon)',
      ],
    },
    risks: {
      modelAnswer:
        "Four risks, all structural. (1) Label leverage. The Big Three labels own most of the music on Spotify and periodically renegotiate royalty terms. A 2-3 point shift in royalty economics against Spotify would crush the gross margin expansion story. (2) Bundled competitors. Apple Music bundled into Apple One, YouTube Music bundled into YouTube Premium / Google One, Amazon Music bundled into Prime — each of these can price music at near-zero marginal cost for them. Spotify has to price as a standalone product, which is a disadvantage. (3) Price increases have a ceiling. Spotify's 2023-24 hikes worked, but music is not a necessity — at some price point, consumers downgrade to free or churn. (4) AI-generated music and copyright disruption. If AI music creation becomes a meaningful share of listens, the royalty pool reshapes; if label lawsuits restrict AI training, Spotify is caught in the middle. A quieter risk: podcasts and audiobooks are still loss-leaders in terms of required content spend, and it's not clear the margin expansion narrative is as clean as claimed.",
      strongReasoningIncludes: [
        'Identifies label leverage as a structural, not cyclical, risk',
        'Names at least one specific bundled competitor (Apple, Amazon, YouTube)',
        'References a pricing-power limit, AI disruption, or content-cost risk',
      ],
    },
    valuation: {
      modelAnswer:
        "Spotify trades at ~40-60x forward earnings and ~50x+ free cash flow — aggressive for a business with structurally-capped gross margins. The multiple prices in: (a) continued subscriber growth at low-teens, (b) ARPU expansion from price increases and premium tier mix, (c) gross margin expanding from ~30% toward 35%+ as podcasts / ads / audiobooks scale, and (d) operating leverage kicking in as revenue grows faster than opex. If all four deliver, Spotify can grow earnings 30%+ for several years — the multiple is defensible. If the margin-expansion story stalls (labels clawing back value, bundled competitors forcing price concessions, podcast economics underwhelming), the multiple compresses sharply. This is a 'priced for success' stock where the base-case upside is good and the bear case is severe.",
      strongReasoningIncludes: [
        'Identifies Spotify as aggressive-growth priced, not value or stable',
        'Names specific embedded assumptions (subscribers, ARPU, margin)',
        'Notes the asymmetric downside if margin expansion fails',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: Spotify has finally turned the corner. The 2023-24 cost cuts and price increases proved that the business can be profitable, and margin expansion is just beginning. Gross margins are heading from 30% toward 35%+ as podcasts, audiobooks, and ads scale, and operating leverage kicks in meaningfully. Meanwhile Spotify is adding 25-30M net new Premium subscribers a year with plenty of international runway. At 50x earnings on 30%+ earnings growth, the PEG is actually reasonable — this is a growth story in early innings.\n\nBEAR THESIS: Everyone forgot why Spotify lost money for a decade — the labels have all the leverage, and they're going to take it back. Gross margins can't expand forever against 70% royalty rates, and the Big Three labels are already renegotiating. Apple and Amazon will keep bundling music into their ecosystems, capping Spotify's pricing power. Meanwhile the stock has tripled off its lows and now trades at 50x+ earnings for a business with structural margin caps. This is a classic 'buy when everyone hates it, sell when everyone loves it' setup — and right now everyone loves it.",
      strongReasoningIncludes: [
        'Commits to a clear bull or bear case',
        'References margin expansion or label leverage as the central tension',
        'The case is specific enough to be falsified by a named metric or event',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: PASS at current prices — the stock has already priced in the good news. The business is meaningfully better than it was two years ago, but the valuation has moved further than the fundamentals. I'd reconsider below ~30x forward earnings, or if Spotify breaks out a credible advertising business meaningful to total revenue (ads at ~15%+ of revenue would indicate real platform diversification). I'd turn outright bearish if gross margins stall or decline for two consecutive quarters — that would signal label economics reasserting. The 'buy the moment before the Big Three labels renegotiate' timing is basically impossible to get right, so unless the multiple compresses, this is a watchlist name, not a portfolio name.",
      strongReasoningIncludes: [
        'Commits to a specific action (pass, buy-below-X, wait)',
        'Names a specific valuation or operational threshold',
        'The threshold is observable from earnings or industry data',
      ],
    },
  },
};
