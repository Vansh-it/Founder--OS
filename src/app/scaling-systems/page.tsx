import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';
import Badge from '@/components/ui/Badge';
import MetricCard from '@/components/sections/MetricCard';

export const metadata: Metadata = {
  title: 'Scaling Systems | Founder OS',
  description: 'From 0 to ₹1 Crore MRR. Infrastructure, user growth, operations, and revenue scaling frameworks.',
  openGraph: { title: 'Scaling Systems | Founder OS', description: 'Complete scaling playbook for Indian SaaS founders.', type: 'website' },
};

const scalingStages = [
  {
    stage: 'PRE-SCALE',
    mrr: '₹0 → ₹1L MRR',
    focus: 'Product-Market Fit + Manual Everything',
    color: 'border-[#4F7EFF]/40',
    badge: 'blue',
    signals: [
      'Manual onboarding for every customer is acceptable and preferred',
      'You personally respond to every support ticket',
      'Infrastructure: free tiers of everything (Supabase, Vercel, Groq)',
      'Team: 1–2 people (you + maybe one other founder)',
      'Sales: founder-led, direct relationships with all customers',
      'Marketing: community, cold outreach, word-of-mouth — no paid',
    ] as string[],
    trigger: 'Move to Early Scale when: MRR consistently above ₹1L for 3 consecutive months AND you\'re spending >40% of time on customer support/operations.',
  },
  {
    stage: 'EARLY SCALE',
    mrr: '₹1L → ₹10L MRR',
    focus: 'Systems + Repeatable Processes',
    color: 'border-[#8B5CF6]/40',
    badge: 'purple',
    signals: [
      'Document every process: onboarding, support, billing, feedback collection',
      'Move from Supabase free → Supabase Pro ($25/month). Still very affordable.',
      'First hire: a customer success person (not an engineer) around ₹3L MRR',
      'Marketing: begin SEO content strategy, one article per week',
      'Sales: implement a basic CRM (HubSpot free or Notion)',
      'Automated onboarding emails: 5-email sequence triggered on signup',
    ] as string[],
    trigger: 'Move to Growth Scale when: MRR above ₹5L for 3 months AND net revenue retention >100% AND you have a repeatable customer acquisition process.',
  },
  {
    stage: 'GROWTH SCALE',
    mrr: '₹10L → ₹1Cr MRR',
    focus: 'Team + Automation + Capital',
    color: 'border-[#10B981]/40',
    badge: 'green',
    signals: [
      'First engineering hire: a senior engineer around ₹8L MRR',
      'Infrastructure: dedicated servers + monitoring + staging environment',
      'Paid acquisition begins: LinkedIn Ads or Google Ads with measurable CAC',
      'Sales process: hire first salesperson at ₹25L MRR',
      'Support: hire first CS team member, implement support SLAs',
      'Finance: hire a CA, set up proper accounting, consider fundraising',
    ] as string[],
    trigger: 'At ₹1Cr MRR, you\'re operating a legitimate mid-size SaaS business. Consider Series A or continue bootstrapped.',
  },
];

const infrastructureUpgrades = [
  { metric: '1,000 users', infra: 'Supabase Free → Supabase Pro ($25/mo)', trigger: 'Hitting 500MB storage or 50K API calls/day' },
  { metric: '10,000 users', infra: 'Vercel Pro ($20/mo), Supabase Pro with add-ons', trigger: 'Build minutes exhausted, team preview URLs needed' },
  { metric: '50,000 users', infra: 'Dedicated PostgreSQL (Neon or RDS), CDN configuration', trigger: 'Database latency above 100ms, high read volume' },
  { metric: '200,000+ users', infra: 'Multi-region deployment, read replicas, Redis caching', trigger: 'Geographic latency issues, cache hit rate optimization' },
];

const saasMetrics = [
  { label: 'MRR Target Month 3', value: '₹10K', trend: 'up' as const, change: 'First real business milestone' },
  { label: 'MRR Target Month 6', value: '₹50K', trend: 'up' as const, change: 'Validates scalability' },
  { label: 'MRR Target Month 12', value: '₹2L', trend: 'up' as const, change: 'Sustainable income' },
  { label: 'LTV:CAC Ratio Target', value: '3:1', trend: 'up' as const, change: 'Minimum healthy ratio' },
];

export default function ScalingSystemsPage() {
  return (
    <PageWrapper
      title="Scaling Systems"
      description="Three stages, clear triggers, exact playbooks. From your first user to a scalable startup."
      icon="📈"
      badge="Scale Module"
      timeToRead={18}
      lastUpdated="Jan 2026"
    >
      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {saasMetrics.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>

      {/* Three Stages */}
      <section className="mb-10">
        <SectionHeader title="The Three Stages of Scaling" badge="Framework" description="Each stage has a different job. Doing Growth Scale activities in Pre-Scale mode kills startups." />
        <div className="space-y-4">
          {scalingStages.map((stage) => (
            <div key={stage.stage} className={`border ${stage.color} bg-[#0F0F1A] rounded-2xl overflow-hidden`}>
              <div className="px-5 py-4 border-b border-[#1E1E3F] flex items-center justify-between flex-wrap gap-2">
                <div>
                  <Badge variant={stage.badge as 'blue' | 'purple' | 'green'}>{stage.stage}</Badge>
                  <h3 className="font-bold text-white mt-1">{stage.mrr}</h3>
                  <p className="text-sm text-[#9CA3AF]">{stage.focus}</p>
                </div>
              </div>
              <div className="px-5 py-4">
                <ul className="space-y-2 mb-4">
                  {stage.signals.map((signal, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                      <span className="text-[#10B981] flex-shrink-0 mt-0.5">✓</span>
                      {signal}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#141428] rounded-xl p-3">
                  <p className="text-[10px] text-[#F59E0B] font-semibold uppercase tracking-wide mb-1">Stage Transition Trigger</p>
                  <p className="text-xs text-[#9CA3AF]">{stage.trigger}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Scaling */}
      <section className="mb-10">
        <SectionHeader title="Infrastructure Scaling Guide" badge="Technical" description="Exact thresholds for when to upgrade your infrastructure and what to upgrade to." />
        <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1E1E3F]">
                <th className="text-left text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide px-5 py-3">User Count</th>
                <th className="text-left text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide px-5 py-3">Infrastructure Move</th>
                <th className="text-left text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide px-5 py-3">When to Trigger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E1E3F]/50">
              {infrastructureUpgrades.map((row) => (
                <tr key={row.metric}>
                  <td className="px-5 py-3 text-sm text-[#06B6D4] font-mono font-bold">{row.metric}</td>
                  <td className="px-5 py-3 text-xs text-[#9CA3AF]">{row.infra}</td>
                  <td className="px-5 py-3 text-xs text-[#6B7280]">{row.trigger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* User Scaling */}
      <section className="mb-10">
        <SectionHeader title="User Growth Framework" badge="Acquisition at Scale" description="Channels ranked by scale potential. Use in order — don't jump ahead." />
        <div className="space-y-3">
          {[
            { rank: '1', channel: 'SEO + Content Marketing', scale: 'Unlimited', cost: '$0', time: '6–12 months to see returns', desc: 'Write content targeting keywords your ICP searches. One well-ranked article can drive 100+ signups per month forever. This is the highest ROI channel at scale.' },
            { rank: '2', channel: 'Product-Led Growth', scale: 'Unlimited', cost: '$0', time: 'Designed in from day one', desc: 'Free tier → paid conversion. Every free user is a marketing channel. If your product\'s free tier provides enough value, word-of-mouth compounds geometrically.' },
            { rank: '3', channel: 'Community Distribution', scale: 'Large', cost: '$0', time: 'Ongoing investment', desc: 'Active presence in communities where your ICP congregates. Takes 3–6 months of consistent value-adding before you see significant returns.' },
            { rank: '4', channel: 'Cold Email + LinkedIn', scale: 'Medium', cost: '$0–₹5K/month', time: 'Immediate if ICP targeting is right', desc: 'Best for B2B products. 10,000 ICPs × 2% response rate × 20% close rate = 40 customers per campaign. Scalable with automation tools.' },
            { rank: '5', channel: 'Paid Acquisition', scale: 'Unlimited (with budget)', cost: 'CPC variable', time: 'Immediate returns if CAC < LTV/3', desc: 'Only activate when you know your LTV. Google Ads for high-intent keywords. LinkedIn Ads for specific job titles. CAC must be < LTV/3 to be profitable.' },
          ].map((channel) => (
            <div key={channel.channel} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-[#4F7EFF]/40 font-mono font-bold text-lg">#{channel.rank}</span>
                  <p className="font-semibold text-white text-sm">{channel.channel}</p>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  <Badge variant="cyan">{channel.scale}</Badge>
                  <Badge variant="green">{channel.cost}</Badge>
                </div>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">{channel.desc}</p>
              <p className="text-[10px] text-[#6B7280] mt-1.5">Time horizon: {channel.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SaaS Financial Model */}
      <section className="mb-10">
        <SectionHeader title="SaaS Financial Model" badge="Economics" description="The numbers that determine whether your business is healthy or burning." />
        <div className="space-y-3">
          {[
            { metric: 'Monthly Recurring Revenue (MRR)', formula: 'Sum of all active subscription payments this month', target: 'Grow 15–20% MoM in early stage', important: 'The single most important number at early stage.' },
            { metric: 'Customer Acquisition Cost (CAC)', formula: 'Total sales + marketing spend / New customers acquired', target: 'CAC < LTV/3', important: 'If you spend ₹10,000 to acquire a customer paying ₹1,000/month, your CAC payback is 10 months — too long.' },
            { metric: 'Lifetime Value (LTV)', formula: 'ARPU × Gross Margin % / Monthly Churn Rate', target: 'LTV:CAC ratio > 3:1', important: 'A ₹2,000/month customer with 2% monthly churn and 80% margin = ₹80,000 LTV.' },
            { metric: 'Monthly Churn Rate', formula: 'Customers lost this month / Customers at start of month × 100', target: '<2% for B2B SaaS', important: 'At 5% monthly churn, you lose half your customers every 14 months. At 2%, you retain 78% after a year.' },
            { metric: 'Net Revenue Retention (NRR)', formula: 'Revenue from existing customers this month / Revenue from same cohort last month', target: '>100% (expansion beats churn)', important: 'If NRR > 100%, existing customers are growing. Your base grows even without new customers.' },
          ].map((item) => (
            <div key={item.metric} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <p className="font-bold text-white text-sm mb-1">{item.metric}</p>
              <p className="text-xs text-[#06B6D4] font-mono mb-2">{item.formula}</p>
              <div className="flex items-start gap-4">
                <div>
                  <p className="text-[10px] text-[#6B7280] uppercase font-semibold">Target</p>
                  <p className="text-xs text-[#10B981]">{item.target}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-[#6B7280] uppercase font-semibold">Why It Matters</p>
                  <p className="text-xs text-[#9CA3AF]">{item.important}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CalloutBox variant="tip" title="The Most Counterintuitive Scaling Insight">
        Most founders try to scale acquisition before fixing retention. But if you're churning 10% of
        customers per month, you need to acquire 10% new customers every month just to stay flat.
        Fix churn first — even getting from 8% to 4% monthly churn doubles your LTV and halves the
        treadmill you're running on. Talk to churned customers. Read their cancellation reasons.
        Build what keeps people.
      </CalloutBox>
    </PageWrapper>
  );
}
