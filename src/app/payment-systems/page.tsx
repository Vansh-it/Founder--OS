import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';
import Badge from '@/components/ui/Badge';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Payment Systems | Founder OS',
  description: 'The honest guide to collecting payments as a minor in India. Gumroad, Lemon Squeezy, trusted adult structures, and full monetization at 18.',
  openGraph: { title: 'Payment Systems | Founder OS', description: 'How to monetize your product as a minor Indian founder.', type: 'website' },
};

const tier1Solutions = [
  {
    name: 'Gumroad',
    badge: 'Recommended for under-18',
    color: 'border-[#F59E0B]/30',
    fee: '10% flat fee',
    bestFor: 'Digital products, templates, ebooks, one-time SaaS access, paid communities',
    details: [
      'Gumroad is the easiest way to sell digital products online. No company registration needed to get started.',
      'Minimum age is technically 18, but verification is identity-document based and many young creators have used it through a parent\'s or trusted adult\'s verified account.',
      'Payouts go to a connected bank account via Stripe. For Indian users, this requires INR bank account setup.',
      'You can sell unlimited products per account. Set your own pricing — one-time, subscription, or pay-what-you-want.',
      'Gumroad has built-in SEO and marketplace discovery. Your products appear in Gumroad search.',
      'Limitation: Not ideal for complex SaaS subscriptions with multiple tiers. Better for one-time or simple recurring products.',
      'Best strategy for minors: Have a parent create and verify the Gumroad account. You operate the business, they hold the account. Transition to your own account at 18.',
    ],
  },
  {
    name: 'Lemon Squeezy',
    badge: 'Best for SaaS products',
    color: 'border-[#10B981]/30',
    fee: '5% + $0.50 per transaction',
    bestFor: 'SaaS subscriptions, license key delivery, software products',
    details: [
      'Lemon Squeezy is designed specifically for software products. It handles the entire subscription lifecycle: trials, upgrades, downgrades, cancellations.',
      'Merchant of Record model: Lemon Squeezy handles all tax compliance (GST, VAT, sales tax) globally. You don\'t need a GST registration to sell internationally.',
      'License key generation built-in: When a user buys, they get a license key automatically. Perfect for desktop apps or API products.',
      'Indian founders have successfully used this. The account verification is flexible for early-stage products.',
      'Supports USD, INR, and 60+ currencies. Indian customers can pay in INR.',
      'Lower fees than Gumroad at scale. 5% + $0.50 is better than 10% for higher-priced products.',
      'The MoR model means: one platform handles global tax compliance, chargebacks, and fraud — you focus on the product.',
    ],
  },
  {
    name: 'Buy Me a Coffee',
    badge: 'Creator monetization',
    color: 'border-[#06B6D4]/30',
    fee: '5% platform fee',
    bestFor: 'One-time supporter payments, memberships, creator communities',
    details: [
      'Lowest friction payment platform for individual creators. A public page where supporters can pay for your content or work.',
      'Membership tiers available: offer different monthly membership levels with different perks.',
      'Lower identity verification requirements historically compared to payment gateways.',
      'Not ideal for SaaS products. Better for content creators, open-source maintainers, and community builders.',
      'Indian users can receive payments via PayPal or bank transfer.',
      'Best use case: Open-source projects, developer tools with donation models, educational content.',
    ],
  },
  {
    name: 'Ko-fi',
    badge: '0% fee on donations',
    color: 'border-[#8B5CF6]/30',
    fee: '0% on donations, 5% on memberships',
    bestFor: 'Open-source projects, creator support, community funding',
    details: [
      'Ko-fi charges zero platform fee on one-time "coffee" payments. Only takes 5% on membership subscriptions.',
      'Particularly popular in the developer and open-source community.',
      'Shop feature: sell digital products directly through Ko-fi.',
      'Commission-free for the most basic use case — one-time supporter payments.',
      'Payouts via PayPal or Stripe. Indian bank account connection requires a Stripe account.',
    ],
  },
];

const pricingTiers = [
  { segment: 'Indian Consumers', price: '₹0–₹299/month', note: 'Avoid. Extremely hard to build sustainable revenue.' },
  { segment: 'Indian SMBs (5–50 employees)', price: '₹999–₹4,999/month', note: 'Viable with volume. 50 customers at ₹2K/month = ₹1L MRR.' },
  { segment: 'Indian Mid-Market (50–500 employees)', price: '₹5,000–₹25,000/month', note: 'Strong. 10 customers at ₹10K/month = ₹1L MRR.' },
  { segment: 'International SMBs', price: '$19–$99/month', note: 'Best margin. 20 customers at $49/month = ~₹1L MRR.' },
  { segment: 'Enterprise / Large Companies', price: '₹50,000+/month', note: 'Longer sales cycle but enormous LTV.' },
];

export default function PaymentSystemsPage() {
  return (
    <PageWrapper
      title="Payment Systems for Minor Founders"
      description="The honest, realistic, legally-aware guide to monetizing your product as a minor in India."
      icon="💳"
      badge="Money Module"
      timeToRead={20}
      lastUpdated="Jan 2026"
    >
      <CalloutBox variant="warning" title="Read This First — The Honest Reality">
        This guide is deliberately honest about legal restrictions and practical realities. There are
        real obstacles to monetization as a minor in India. This section explains what they are, which
        ones are hard constraints, which are softer than they appear, and the most practical paths to
        generating revenue before and after you turn 18.
      </CalloutBox>

      {/* The Problem */}
      <section className="mb-10 mt-6">
        <SectionHeader title="The Reality for Minor Indian Founders" badge="Understanding the Landscape" />
        <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
          <p>
            An Indian minor under 18 faces a set of genuine legal and practical constraints that global
            founder content simply doesn't address. Here they are, honestly:
          </p>
        </div>
        <div className="mt-4 space-y-3">
          {[
            { constraint: 'Contracts are legally voidable', detail: 'Under the Indian Majority Act, 1875, contracts with minors are voidable at the minor\'s option. This means you technically cannot sign binding commercial agreements. However, most early-stage SaaS relationships don\'t involve formal contracts.', severity: 'Medium' },
            { constraint: 'Cannot independently open a business bank account', detail: 'Banks require the account holder to be 18+. A joint account with a parent is possible. For most payment platforms that payout to bank accounts, a parent joint account works.', severity: 'High' },
            { constraint: 'PAN card requires parental declaration if minor', detail: 'You can get a PAN card as a minor — it requires Form 49A with parent/guardian details. This PAN can be used for basic financial transactions.', severity: 'Low' },
            { constraint: 'Cannot register a company (LLP or Pvt Ltd)', detail: 'Directors and partners must be 18+. You cannot legally be a director of an Indian company until you turn 18. However, a parent can register the company and you can be involved operationally.', severity: 'High' },
            { constraint: 'Stripe, Razorpay, PayPal require 18+', detail: 'These mainstream gateways require identity verification, bank accounts, and in India\'s case, GST registration. All require being 18+. However, alternatives exist that have lower verification requirements.', severity: 'High' },
          ].map((item) => (
            <div key={item.constraint} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-white text-sm">{item.constraint}</p>
                <Badge variant={item.severity === 'High' ? 'red' : item.severity === 'Medium' ? 'orange' : 'green'}>
                  {item.severity} Constraint
                </Badge>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-2">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tier 1 Solutions */}
      <section className="mb-10">
        <SectionHeader title="Tier 1 Solutions — Lowest Friction" badge="Start Here" description="These platforms have the lowest barriers and work best for founders under 18." />
        <Accordion>
          {tier1Solutions.map((sol) => (
            <AccordionItem key={sol.name} title={sol.name} badge={sol.fee}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="green">{sol.badge}</Badge>
                  <Badge variant="gray">Fee: {sol.fee}</Badge>
                </div>
                <div>
                  <p className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide mb-1">Best For</p>
                  <p className="text-xs text-[#4F7EFF]">{sol.bestFor}</p>
                </div>
                <ul className="space-y-2">
                  {sol.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                      <span className="text-[#4F7EFF] flex-shrink-0 mt-0.5">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Trusted Adult Structure */}
      <section className="mb-10">
        <SectionHeader title="The Trusted Adult Operator Structure" badge="Most Practical Solution" description="The most realistic and ethically sound approach for most minor Indian founders." />
        <div className="bg-[#0F0F1A] border border-[#10B981]/30 rounded-2xl p-5 mb-4">
          <p className="font-bold text-white mb-3">How This Works</p>
          <div className="space-y-3 text-sm text-[#9CA3AF]">
            <p>
              A parent or trusted adult opens and holds the business entity (or payment account). You operate
              the product, build the business, handle customer relationships, and do all the technical work.
              Revenue flows through the adult's account. At 18, you transition all accounts and ownership
              to your own name.
            </p>
            <p>
              This is not deceptive — it's a practical family business structure. Many Indian family
              businesses operate this way. The key is having a clear, honest agreement with the adult
              involved about what the business is, who built it, and what the transition plan looks like.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { title: 'How to approach your parents', desc: 'Bring a written document, not a verbal pitch. Show them: (1) what you\'ve built with a live demo, (2) who is already using it, (3) how it makes money, (4) that you only need their account — not their time or money, (5) what their exposure is (essentially zero for a digital product with no physical liabilities).' },
            { title: 'What records to keep', desc: 'Maintain a simple Google Doc log: every customer, every payment date, every amount. This creates a clear record of the business\'s revenue history that you can use when you transition accounts at 18. It also shows parents you\'re running a legitimate business, not a hobby.' },
            { title: 'The transition at 18', desc: 'On your 18th birthday (or shortly after): Open your own business bank account → Register LLP or Pvt Ltd (₹3,000–₹10,000 via online portals) → Get GST registration (free, takes 3–5 days) → Open Razorpay or Stripe account → Migrate all subscriptions to your new payment accounts. The transition is smooth if you\'ve maintained clean records.' },
            { title: 'Legal considerations', desc: 'Since you\'re not signing contracts or opening accounts in your own name, your legal exposure is minimal. The adult who holds the account bears the legal responsibility. Have an honest conversation about this — most parents are comfortable once they understand the product is legitimate and the risk profile is low.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <div className="w-6 h-6 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center flex-shrink-0 text-[#10B981] font-bold text-xs">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-18 Strategy */}
      <section className="mb-10">
        <SectionHeader title="The Pre-18 Launch Strategy" badge="Recommended Approach" description="The optimal playbook for founders who are currently 16–17." />
        <div className="space-y-3">
          {[
            {
              phase: 'Phase 1 (Age 16–17)',
              title: 'Build and Distribute for Free',
              color: 'border-[#4F7EFF]/30',
              points: [
                'Build your product and make it genuinely excellent. Free users who love a product are your most powerful marketing asset.',
                'Grow your user base with free plans. 1,000 active free users is worth more than 10 paying users who don\'t really engage.',
                'Build reputation through build-in-public on Twitter/LinkedIn. Post your progress, your learnings, your metrics.',
                'Develop distribution channels that will work at scale: SEO, community presence, GitHub stars, developer reputation.',
                'Collect testimonials, case studies, and measurable results from your free users.',
              ],
            },
            {
              phase: 'Phase 2 (Age 17.5–18)',
              title: 'Prepare for Monetization',
              color: 'border-[#8B5CF6]/30',
              points: [
                'Set up Gumroad or Lemon Squeezy account (through parent) 3–6 months before you turn 18.',
                'Launch paid plans to your most engaged free users. These early adopters become your first paying customers.',
                'Build your first recurring revenue track record. Even ₹5,000 MRR before you turn 18 proves commercial viability.',
                'Document everything: customer names, payment dates, testimonials, product metrics. Investors will ask.',
              ],
            },
            {
              phase: 'Phase 3 (Age 18+)',
              title: 'Full Commercial Launch',
              color: 'border-[#10B981]/30',
              points: [
                'Register your business: LLP (₹5,000–₹8,000 total cost) or Pvt Ltd (₹8,000–₹15,000). Use IndiaFilings or Startups.gov.in.',
                'Open a business current account: ICICI, HDFC, or Kotak offer founder-friendly current accounts.',
                'Get GST registration if revenue > ₹20L/year or if you have interstate customers (free, 3–5 days).',
                'Open Razorpay account for Indian customers and Stripe for international customers.',
                'Transition all revenue streams to your own accounts. Retrospective payment to yourself for work done is common and acceptable.',
              ],
            },
          ].map((phase) => (
            <div key={phase.phase} className={`border ${phase.color} bg-[#0F0F1A] rounded-2xl overflow-hidden`}>
              <div className="px-5 py-3 border-b border-[#1E1E3F]">
                <span className="text-xs font-mono text-[#4F7EFF] font-bold">{phase.phase}</span>
                <h3 className="font-bold text-white text-sm">{phase.title}</h3>
              </div>
              <div className="px-5 py-4">
                <ul className="space-y-2">
                  {phase.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                      <span className="text-[#4F7EFF] flex-shrink-0 mt-0.5">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Strategy */}
      <section className="mb-10">
        <SectionHeader title="Pricing Strategy for Indian SaaS" badge="Revenue Design" description="Price for value delivered, not for cost incurred. Here's the realistic pricing landscape." />
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1E1E3F]">
                <th className="text-left text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide py-2 pr-4">Segment</th>
                <th className="text-left text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide py-2 pr-4">Price Range</th>
                <th className="text-left text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide py-2">Strategic Note</th>
              </tr>
            </thead>
            <tbody>
              {pricingTiers.map((tier) => (
                <tr key={tier.segment} className="border-b border-[#1E1E3F]/50">
                  <td className="py-3 pr-4 text-sm text-white font-medium">{tier.segment}</td>
                  <td className="py-3 pr-4 text-sm text-[#10B981] font-mono">{tier.price}</td>
                  <td className="py-3 text-xs text-[#9CA3AF]">{tier.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
          <p className="font-semibold text-white text-sm mb-2">Pricing Psychology — The Three-Tier Formula</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { tier: 'Starter', price: '₹999/month', features: ['Core features only', '1 user', 'Limited usage', 'Email support'] },
              { tier: 'Professional', price: '₹2,999/month', features: ['All features', '3 users', 'Higher usage', 'Priority support', 'Integrations'], highlight: true },
              { tier: 'Business', price: '₹7,999/month', features: ['Everything', 'Unlimited users', 'Unlimited usage', 'Dedicated support', 'Custom setup'] },
            ].map((plan) => (
              <div key={plan.tier} className={`rounded-xl p-3 ${plan.highlight ? 'border-2 border-[#4F7EFF]/40 bg-[#4F7EFF]/5' : 'border border-[#1E1E3F]'}`}>
                {plan.highlight && <Badge variant="blue" className="mb-2">Most Popular</Badge>}
                <p className="font-bold text-white text-xs">{plan.tier}</p>
                <p className="text-[#10B981] font-mono font-bold text-sm mb-2">{plan.price}</p>
                <ul className="space-y-0.5">
                  {plan.features.map((f) => (
                    <li key={f} className="text-[10px] text-[#9CA3AF]">✓ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6B7280] mt-3">The middle tier (Professional) anchors the customer. Most people choose it because it looks reasonable between cheap and expensive.</p>
        </div>
      </section>

      <CalloutBox variant="success" title="The Most Important Insight on Payments">
        The biggest mistake minor founders make is waiting until they turn 18 to think about monetization.
        Start now: build your product, grow your user base, establish market presence, and prepare the
        payment infrastructure through a trusted adult. When you turn 18, you'll have a product people
        already use, a payment system ready to go, and the only missing piece — your own legal identity —
        will be in place in days, not months.
      </CalloutBox>
    </PageWrapper>
  );
}
