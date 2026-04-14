import type { CompanyProfile } from './types';

export const unitedHealthProfile: CompanyProfile = {
  id: 'unitedhealth',
  ticker: 'UNH',
  name: 'UnitedHealth Group',
  emoji: '⚕️',
  sector: 'Healthcare / Insurance',
  oneLiner: "America's largest health insurer — plus a quietly massive healthcare services business",
  description:
    "UnitedHealth is really two businesses fused into one. UnitedHealthcare is the largest US health insurer, covering ~53 million people. Optum is a rapidly growing healthcare services arm — pharmacy benefit management, care delivery (3rd largest US physician network), and healthcare data/analytics — which now generates ~half of profits and grows much faster than insurance. The vertical integration (insurer owning the care delivery) is either a massive long-term moat or a regulatory target. Meanwhile Medicare Advantage rate pressure, utilization trends, and a 2024 cyberattack + political scrutiny have hit the stock hard. Is this a rare defensive compounder at a discount, or a business facing real structural change?",
  dataAsOf: 'FY 2024',
  difficulty: 'standard',
  estimatedMinutes: 13,
  keyFacts: [
    { label: 'Revenue', value: '~$400B', detail: 'FY2024 — one of the largest companies in the US by revenue' },
    { label: 'Operating Margin', value: '~8.1%', detail: 'Thin in absolute terms, but massive on $400B+ revenue' },
    { label: 'Members Insured', value: '~53M', detail: 'Largest US health insurer; includes ~8M Medicare Advantage' },
    { label: 'Optum Revenue', value: '~$253B', detail: 'Healthcare services arm — growing faster and higher-margin than insurance' },
    { label: 'Medical Loss Ratio', value: '~85%', detail: 'Share of premiums paid out as medical claims — rising recently (pressure indicator)' },
    { label: 'P/E Ratio', value: '~16-19x', detail: 'Historically trades at a premium to insurance peers; currently compressed from typical range' },
  ],
  workflow: {
    business: {
      modelAnswer:
        "UnitedHealth runs two giant, interconnected businesses. (1) UnitedHealthcare — the insurer. Collects premiums from employers, individuals, and the government (Medicare, Medicaid), pays out claims, keeps the spread. This is the traditional health insurance business — thin margins (~5%), massive scale. (2) Optum — healthcare services. Has three parts: Optum Rx (pharmacy benefit manager — negotiates drug prices, routes scripts), Optum Health (owns clinics, surgical centers, employs ~90,000 physicians), and Optum Insight (healthcare data & analytics software for hospitals and payers). Critically, Optum often serves UnitedHealthcare members — same company on both sides of the transaction — which is both the big growth lever and the regulatory lightning rod. Optum has higher margins than insurance and has been the main growth engine for a decade.",
      strongReasoningIncludes: [
        'Separates the insurance business (UnitedHealthcare) from the services business (Optum)',
        'Identifies Optum as the higher-margin / faster-growing piece',
        'Notes the vertical integration — Optum serves UHC members — as strategically central',
      ],
    },
    drivers: {
      modelAnswer:
        "Three drivers. (1) Medicare Advantage growth — UnitedHealth has ~8M MA members, and MA is the fastest-growing segment of US health insurance as Boomers age in. MA pays higher per-member revenue than commercial, which has driven huge growth. (2) Optum expansion — adding physicians, surgery centers, and data clients. Optum Health alone grew ~30% annually for a stretch. (3) Medical cost trend — this is the swing factor. Healthcare cost inflation and utilization determine the medical loss ratio (MLR). When utilization spikes (as in 2023-24 with deferred care coming back), margins compress sharply. Secondary drivers: government reimbursement rates (the CMS star ratings system and MA rate updates are critical), pharmacy rebate economics, and Optum Rx contract wins.",
      strongReasoningIncludes: [
        'Identifies Medicare Advantage growth as a structural driver',
        'Names Optum expansion or vertical integration as a growth lever',
        'References medical cost trend / utilization as the swing factor for margins',
      ],
    },
    moat: {
      modelAnswer:
        "UnitedHealth's moat is scale + vertical integration + data advantages. (1) Scale: ~53M members means massive bargaining power with hospitals, pharma companies, and drug middlemen. Smaller insurers can't negotiate the same rates. (2) Vertical integration: Owning pharmacy benefits (Optum Rx), care delivery (Optum Health clinics), and data (Optum Insight) on top of insurance lets UNH capture margin at every layer of the healthcare stack AND gather proprietary data across the system. No peer has assembled this combination at this scale. (3) Data and analytics: UnitedHealth has one of the largest claims datasets in US healthcare, which improves risk adjustment, fraud detection, and care management — all of which compound over time. (4) Network effects on the provider side — UNH's in-network hospital and physician contracts are sticky. What UNH does NOT have is a consumer-brand moat; most patients don't choose their insurer, their employer or the government does.",
      strongReasoningIncludes: [
        'Identifies vertical integration as a distinctive moat vs. pure insurers',
        'References scale advantages in negotiating with providers or drug makers',
        'Notes data / analytics or risk adjustment capability',
      ],
    },
    risks: {
      modelAnswer:
        "Four risks. (1) Medicare Advantage rate pressure. CMS sets MA reimbursement rates annually, and has been more aggressive recently. A multi-year stretch of rate cuts below medical cost trend would compress MA margins meaningfully — and MA is the most important growth engine. (2) Medical cost / utilization shocks. 2023-24 saw a spike in outpatient procedures (backlog from COVID + GLP-1s driving physical activity in older members), which pushed MLR up ~150 bps. A sustained higher-utilization regime is a structural margin hit. (3) Regulatory and antitrust action. DOJ has investigated vertical integration; a breakup of Optum from UnitedHealthcare is unlikely but not impossible, and PBM regulation is a real political risk. (4) The Change Healthcare cyberattack (2024) showed operational risk is real — billions in lost revenue plus long-tail reputational damage. A quieter risk: Medicare Advantage's 'star rating' methodology changes could reduce UNH's bonus payments meaningfully.",
      strongReasoningIncludes: [
        'Names Medicare Advantage rate cuts / CMS policy as a structural risk',
        'Identifies medical cost trend / utilization as an earnings risk',
        'References regulatory / antitrust risk to vertical integration or PBMs',
      ],
    },
    valuation: {
      modelAnswer:
        "UnitedHealth has historically traded at 18-22x forward earnings — a premium to insurer peers (typically 12-15x) — because of Optum's higher growth and margin profile. After 2024's cyberattack and MLR pressure, the multiple compressed to ~16-18x, close to a 10-year low. The valuation now embeds meaningful pessimism: MA rate pressure continues, MLR stays elevated, regulatory overhang weighs on Optum. If the bad news proves cyclical rather than structural, the multiple should re-rate back toward 20x+ — significant upside. If MA is entering a durably lower-margin era, 15x might be the new normal and the stock is fairly valued, not cheap. This is a 'quality-compounder at a discount' setup if you believe the issues are temporary; a 'value trap' if the business model is structurally impaired.",
      strongReasoningIncludes: [
        'Identifies UNH as quality-compounder currently priced below historical norm',
        'Notes the multiple has compressed due to specific recent events (MLR, cyberattack, regulation)',
        'Frames the tension: cyclical dip vs. structural repricing',
      ],
    },
    thesis: {
      modelAnswer:
        "BULL THESIS: UnitedHealth is the best-positioned business in US healthcare, trading at its lowest multiple in a decade. Medicare Advantage is a multi-decade demographic tailwind — Boomers aging in adds millions of high-revenue members annually. Optum is still in early innings of vertical integration and grows 10%+ with higher margins than traditional insurance. The 2024 MLR spike looks cyclical (post-COVID backlog + GLP-1 effects on utilization) rather than structural, and management has walked through the specific utilization drivers. At 17x earnings on a business with 13-15% earnings growth algorithm, this is compounding at a discount.\n\nBEAR THESIS: The regulatory walls are closing in, and vertical integration was always a fragile foundation. DOJ is investigating; Congress wants to break up PBMs; MA rates are getting cut; star ratings are being tightened. Meanwhile MLR has structurally ratcheted higher — the cyclical explanation is what management always says at an inflection. The Change Healthcare cyberattack revealed operational fragility investors didn't price in. At 17x for a business facing this much headwind, the price hasn't fully adjusted to the new reality.",
      strongReasoningIncludes: [
        'Commits to a bull or bear case',
        'References MA rates, Optum integration, or MLR as the central tension',
        'The thesis is falsifiable by a specific observable metric',
      ],
    },
    verdict: {
      modelAnswer:
        "Reasonable verdict: BUY with a hedge, or WAIT for one more clean quarter. UnitedHealth is structurally one of the highest-quality businesses in the US, and the current multiple bakes in a lot of pessimism. I'd be a buyer if (a) MLR ticks down in the next two quarters, suggesting the utilization spike is normalizing, AND (b) the annual CMS Medicare Advantage rate update comes in at least flat, not further cut. I'd stay away if MLR keeps rising despite management's 'transitory' narrative — that would indicate structural. Key metrics to watch quarterly: MLR (the single most important), MA member growth, Optum Health margin trajectory, and any DOJ / CMS regulatory announcements. I'd exit decisively on a CMS rule that materially reins in vertical integration.",
      strongReasoningIncludes: [
        'Commits to a specific action (buy, wait, pass)',
        'Names specific conditions (MLR, MA rates, DOJ action)',
        'The conditions are observable from quarterly earnings or CMS releases',
      ],
    },
  },
};
