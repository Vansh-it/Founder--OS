import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';
import RoadmapTimeline from '@/components/sections/RoadmapTimeline';
import type { RoadmapPhase } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Founder Roadmap 2026–2035 | Founder OS',
  description: 'Your decade-long strategic roadmap from 16 to 25. Year-by-year milestones, skills, and objectives.',
  openGraph: { title: 'Founder Roadmap 2026–2035 | Founder OS', description: 'The 10-year playbook for Indian technical founders.', type: 'website' },
};

const phases: RoadmapPhase[] = [
  {
    id: '2026',
    phase: '2026 — FOUNDATION YEAR',
    period: 'Year 1',
    ageRange: 'Age 16–17',
    objective: 'Build technical excellence + launch first real product + acquire first real users',
    status: 'current',
    content: 'Q1: Study the Problem Discovery System. Score 10 problems. Pick one with a score above 36. Begin validation. Q2: Build your MVP in 3 weeks using the free tool stack. Launch. Get 10 real users. Q3: Iterate based on feedback. Reach 50 users. Begin monetization preparation through a trusted adult structure. Q4: If 18 before year end, launch paid plans. Target ₹5,000–₹10,000 MRR by December. If still 17, build user base and distribution channels. Revenue at 18 will come fast if the base is built.',
    keyMilestones: [
      'Complete the Problem Discovery System and score 10 problems',
      'Ship first real product within 21 days of starting the build',
      'Acquire 10 real users who use the product more than once',
      'Build one content piece that drives organic traffic',
      'Reach 50 active users by Q3',
      'First payment received (if 18) or first waitlist for paid launch',
    ],
    skills: ['Next.js + Supabase full stack', 'Cold outreach and user research', 'Copywriting for conversion', 'Product analytics', 'SEO fundamentals'],
    tools: ['VS Code', 'Next.js', 'Supabase', 'Vercel', 'Linear', 'PostHog', 'Notion'],
  },
  {
    id: '2027',
    phase: '2027 — MONETIZATION YEAR',
    period: 'Year 2',
    ageRange: 'Age 17–18',
    objective: 'First consistent recurring revenue + business registration + validated unit economics',
    status: 'upcoming',
    content: 'This is the year everything becomes real. If you built and distributed in 2026, you enter 2027 with users, reputation, and product-market signal. The first half is about converting existing users to paid. The second half (around your 18th birthday) is about registering your business, opening proper payment accounts, and beginning to operate as a legitimate commercial entity. Target: ₹25,000 MRR by mid-year, ₹75,000 MRR by December.',
    keyMilestones: [
      'First ₹10,000 MRR from paying customers',
      'Business registration (LLP or Pvt Ltd) on or after turning 18',
      'Open Razorpay account for Indian customers',
      'Achieve 90%+ monthly customer retention for 3 consecutive months',
      'Build one SEO article that ranks on page 1 and drives 100+ monthly signups',
      'Reach ₹75,000 MRR by end of year',
    ],
    skills: ['SaaS pricing strategy', 'Customer success', 'Business registration process', 'Basic financial modeling', 'Content marketing and SEO'],
    tools: ['Razorpay', 'Lemon Squeezy', 'HubSpot Free CRM', 'Google Search Console', 'Ahrefs Webmaster'],
  },
  {
    id: '2028',
    phase: '2028 — SCALING YEAR',
    period: 'Year 3',
    ageRange: 'Age 18–19',
    objective: 'First hire + ₹3–5L MRR + repeatable acquisition system + potential angel investment',
    status: 'upcoming',
    content: 'If you\'ve built and monetized correctly in years 1 and 2, 2028 is when you face the first real scaling decisions. The product needs to serve more customers than you can support alone. Acquisition needs to be systematized, not manually-driven. You\'ll consider your first hire (likely a customer success person or a co-founder with complementary skills). Angel investors start paying attention to Indian SaaS products at ₹2L+ MRR. Consider whether fundraising aligns with your vision.',
    keyMilestones: [
      'Reach ₹1,00,000 MRR (₹1L MRR) — significant psychological and practical milestone',
      'Hire first team member (customer success or growth)',
      'Implement automated onboarding that reduces manual effort by 80%',
      'First angel investor conversation (₹25–₹50L for 10% equity is reasonable at this stage)',
      'Reach ₹3–5L MRR by end of year',
      'Net Revenue Retention above 105%',
    ],
    skills: ['Team management', 'Fundraising basics', 'Process documentation', 'Financial management', 'Enterprise sales basics'],
    tools: ['Razorpay Subscriptions', 'Intercom (CS)', 'Slack (team)', 'Notion (documentation)', 'Quickbooks or Zoho Books'],
  },
  {
    id: '2029',
    phase: '2029 — PORTFOLIO YEAR',
    period: 'Year 4',
    ageRange: 'Age 19–20',
    objective: 'Multiple revenue streams + investor-ready metrics + potential Series A',
    status: 'upcoming',
    content: 'By 2029, if you\'ve executed well, you have a business generating ₹5–10L MRR with a small team. The strategic question shifts: do you go deep (double down on one product and aim for market leadership) or go wide (launch adjacent products to the same customer base)? Consider: your existing customers who pay you today — what adjacent problems do they have that you\'re uniquely positioned to solve? This is how Indian SaaS companies like Zoho built product empires without venture capital.',
    keyMilestones: [
      'Primary product at ₹5L+ MRR',
      'First adjacent product launched to existing customer base',
      'Team of 5–8 people, all senior and self-directed',
      'Decision: fundraise for faster growth vs. bootstrap for control',
      'Annual Revenue Run Rate: ₹1 Crore (₹10L MRR = ₹1.2Cr ARR)',
    ],
    skills: ['Product portfolio management', 'Organizational design', 'Strategic planning', 'Investor relations', 'Team leadership'],
    tools: ['Full enterprise stack', 'Custom analytics', 'Sales CRM', 'HR tooling'],
  },
  {
    id: '2030-2031',
    phase: '2030–2031 — EXPANSION YEARS',
    period: 'Years 5–6',
    ageRange: 'Age 20–21',
    objective: 'Category leadership in your niche + Series A readiness or profitable bootstrapped company',
    status: 'upcoming',
    content: 'These two years determine whether you build a lifestyle business or a venture-scale company. The decision is not about ambition — it\'s about market. If you\'ve found a market with genuine network effects or massive TAM, raise capital and capture the market before competition arrives. If you\'re in a niche with natural ceiling, optimize for profitability and build a cash-generating machine. Both are legitimate outcomes. The Indian SaaS ecosystem in 2030 will be dramatically larger than today — more enterprise buyers, more willingness to pay, more international interest in India-origin software.',
    keyMilestones: [
      'Market leadership in your chosen niche — top 3 or number 1',
      'Series A if fundraising path: ₹10–25 Crore at ₹5L+ MRR',
      'Bootstrapped path: ₹15L+ MRR, fully profitable, team of 20+',
      'International expansion: customers in Southeast Asia, Middle East, or US',
      'Speaking at major conferences: PyCon, JSConf India, Nasscom Product Conclave',
    ],
    skills: ['Executive leadership', 'Board management', 'International expansion', 'M&A basics', 'Thought leadership'],
    tools: ['Enterprise CRM', 'BI tools', 'People analytics', 'Legal tools'],
  },
  {
    id: '2032-2035',
    phase: '2032–2035 — INSTITUTION BUILDING',
    period: 'Years 7–10',
    ageRange: 'Age 22–25',
    objective: 'Category-defining company or portfolio of companies. Indian tech institution.',
    status: 'upcoming',
    content: 'The best founders at 22–25 are not just building companies — they\'re building institutions. Institutions have cultures that outlast any individual, reputations that compound over decades, and impact that creates careers and opportunities for others. The Indian tech ecosystem in 2032 will desperately need role models who went from building in their bedroom at 16 to leading significant companies at 22. That compounded story — the proof that this path is possible — is itself a public good. Build with that in mind from the beginning.',
    keyMilestones: [
      'Profitable company with ₹50L+ MRR or well-funded Series B+ company',
      'Angel investing in the next generation of Indian technical founders',
      'Writing and speaking that influences the next wave of builders',
      'Products or companies that outlast your direct involvement',
      'A reputation in the Indian and global tech ecosystem that opens any door',
    ],
    skills: ['Institutional leadership', 'Venture capital thinking', 'Public speaking', 'Mentorship', 'Long-term strategy'],
    tools: ['Whatever the 2032 stack looks like — you\'ll know it better than this document will.'],
  },
];

export default function FounderRoadmapPage() {
  return (
    <PageWrapper
      title="Founder Roadmap 2026–2035"
      description="A decade-long strategic playbook. Year-by-year objectives, milestones, and skills to build."
      icon="🗓️"
      badge="Future Module"
      timeToRead={15}
      lastUpdated="Jan 2026"
    >
      <CalloutBox variant="info" title="How to Use This Roadmap">
        This roadmap assumes you start executing the Founder OS system in 2026. The timelines are
        realistic for a focused, technical founder who executes consistently — not estimates for
        someone working part-time or without strategic clarity. Each year has clear objectives.
        If you're ahead of schedule, excellent. If you're behind, diagnose why — not to feel bad,
        but to fix the specific bottleneck that's slowing you down.
      </CalloutBox>

      <section className="mt-8 mb-10">
        <SectionHeader title="The Decade Roadmap" badge="2026–2035" description="From your bedroom to building an institution. The arc of an ambitious Indian technical founder." />
        <RoadmapTimeline phases={phases} />
      </section>

      {/* The Compounding Insight */}
      <section className="mb-10">
        <SectionHeader title="Why Starting at 16–17 Is a Massive Advantage" badge="Strategic Context" />
        <div className="space-y-3">
          {[
            { title: 'You Have Time to Fail and Recover', desc: 'A 30-year-old founder who fails loses 2 years. You might lose 6 months before your product clicks. The asymmetry of downside risk is dramatically in your favor. Use this asymmetry aggressively — take risks that would be irrational for someone with a family and mortgage.' },
            { title: 'Your Network Compounds Earlier', desc: 'Every contact you make at 17 compounds for a decade before most founders make those same contacts at 27. A relationship built at a hackathon in 2026 could be an investor, a co-founder, or a customer by 2030. The earlier the relationship, the more it compounds.' },
            { title: 'You Build While Others Study Business', desc: 'MBA graduates spend 2 years and ₹20–40 lakhs learning business theory. You\'ll spend 2 years building actual businesses, acquiring actual customers, and generating actual revenue. The real-world education compounds in ways the classroom cannot.' },
            { title: 'AI Gives You Capabilities That Didn\'t Exist', desc: 'A 17-year-old builder in 2026 with access to Groq, Claude, and Cursor can produce the output of a small development team from 2020. This capability advantage didn\'t exist for any previous generation of young founders. It is exclusive to you — use it entirely.' },
            { title: 'India\'s Market Is at an Inflection Point', desc: 'India\'s SaaS market is at the same stage the US SaaS market was in 2012. SMBs are beginning to pay for software. Enterprises are moving off legacy systems. Digital penetration is accelerating. You have 5–7 years before this market becomes as competitive as the current US market. Enter now.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <span className="text-[#4F7EFF]/40 font-mono font-bold text-xl w-6 flex-shrink-0">{i + 1}</span>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CalloutBox variant="quote" title="The Single Most Important Fact About This Roadmap">
        "The best time to start was 5 years ago. The second best time is today." You are reading this
        at the right moment. The playbook exists. The tools exist. The market exists. The only variable
        is whether you execute. The founder who looks back at this in 2035 will either remember the day
        they started, or the day they didn't. Make it the former.
      </CalloutBox>
    </PageWrapper>
  );
}
