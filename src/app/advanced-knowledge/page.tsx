import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Advanced Knowledge | Founder OS',
  description: 'SaaS economics, pricing strategy, startup psychology, competitive moats, AI leverage, and niche domination.',
  openGraph: { title: 'Advanced Knowledge | Founder OS', description: 'The complete advanced knowledge base for Indian SaaS founders.', type: 'website' },
};

export default function AdvancedKnowledgePage() {
  return (
    <PageWrapper
      title="Advanced Knowledge"
      description="SaaS economics, psychology, moats, AI leverage, and niche domination strategies."
      icon="📚"
      badge="Intelligence Module"
      timeToRead={25}
      lastUpdated="Jan 2026"
    >
      {/* SaaS Economics */}
      <section className="mb-10">
        <SectionHeader title="SaaS Economics — The Complete Guide" badge="Metrics" description="The numbers that determine whether your startup lives or dies." />
        <div className="space-y-4">
          {[
            {
              metric: 'Monthly Recurring Revenue (MRR)',
              formula: 'Sum of all active monthly subscriptions',
              components: [
                'New MRR: Revenue from customers acquired this month',
                'Expansion MRR: Revenue from existing customers upgrading this month',
                'Churned MRR: Revenue lost from cancellations this month',
                'Net New MRR = New MRR + Expansion MRR – Churned MRR',
              ],
              benchmark: 'Early stage: 15–25% MoM growth is excellent. At ₹10L MRR, 10% MoM is strong.',
            },
            {
              metric: 'Annual Recurring Revenue (ARR)',
              formula: 'MRR × 12',
              components: [
                'ARR ₹1 Crore = MRR ₹8.33 Lakhs',
                'ARR is the primary valuation metric for SaaS companies',
                'Indian SaaS companies typically valued at 5–15x ARR at Series A',
                'SaaS companies with >100% NRR are valued at premium multiples',
              ],
              benchmark: 'Path to ₹1 Crore ARR: the milestone that attracts serious investor attention in India.',
            },
            {
              metric: 'Customer Acquisition Cost (CAC)',
              formula: 'Total sales + marketing spend ÷ New customers acquired in same period',
              components: [
                'Include founder time in CAC calculation (your time has value)',
                'Channel-specific CAC: cold email vs SEO vs paid are very different',
                'CAC payback period = CAC ÷ Monthly gross profit per customer',
                'Target CAC payback < 12 months for healthy unit economics',
              ],
              benchmark: 'For Indian SMB SaaS: CAC should be < 3 months of contract value.',
            },
            {
              metric: 'Customer Lifetime Value (LTV)',
              formula: 'ARPU × Gross Margin % ÷ Monthly Churn Rate',
              components: [
                'ARPU: Average Revenue Per User per month',
                'Gross Margin for software: typically 70–90%',
                'Example: ₹2,000/month × 80% margin ÷ 2% churn = ₹80,000 LTV',
                'LTV:CAC ratio must be >3:1 to be a healthy business',
              ],
              benchmark: 'LTV:CAC of 3:1 = breakeven unit economics. 5:1 = strong. 10:1 = exceptional.',
            },
            {
              metric: 'Net Revenue Retention (NRR)',
              formula: '(MRR at end of period from existing customers) ÷ (MRR at start of period from same cohort) × 100',
              components: [
                'NRR > 100% means you grow revenue from existing customers even without new customers',
                'NRR includes expansion revenue from upgrades minus churn',
                'Best SaaS companies: 120–140% NRR (Snowflake, Twilio in peak years)',
                'For Indian SMB SaaS: target 105%+ NRR',
              ],
              benchmark: '>100% NRR is the most powerful signal of product-market fit and growth potential.',
            },
          ].map((item) => (
            <div key={item.metric} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#1E1E3F] flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-white text-sm">{item.metric}</p>
                  <p className="text-xs text-[#06B6D4] font-mono mt-1">{item.formula}</p>
                </div>
              </div>
              <div className="px-5 py-4">
                <ul className="space-y-1.5 mb-3">
                  {item.components.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                      <span className="text-[#4F7EFF] flex-shrink-0">→</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#141428] rounded-lg px-3 py-2">
                  <p className="text-[10px] text-[#10B981] font-semibold uppercase tracking-wide">Benchmark</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{item.benchmark}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Strategy */}
      <section className="mb-10">
        <SectionHeader title="Advanced Pricing Strategy" badge="Revenue Design" />
        <Accordion>
          <AccordionItem title="Value-Based Pricing — The Only Correct Method" icon="💎" defaultOpen>
            <p className="mb-3 text-sm text-[#9CA3AF]">Cost-plus pricing (I spend ₹X to deliver this, so I charge ₹X+margin) is how you price commodities. Value-based pricing (this tool saves the customer ₹Y, so I charge a fraction of ₹Y) is how you price software.</p>
            <div className="bg-[#141428] rounded-xl p-4">
              <p className="text-xs font-semibold text-white mb-2">The Value-Based Pricing Formula</p>
              <p className="text-xs text-[#9CA3AF]">1. Quantify the value you deliver: hours saved × hourly rate, or revenue generated, or cost reduced.</p>
              <p className="text-xs text-[#9CA3AF] mt-1.5">2. Price at 10–30% of that value. The customer captures 70–90% of the value — this is why they buy.</p>
              <p className="text-xs text-[#9CA3AF] mt-1.5">Example: If your tool saves an IT manager 10 hours/month (₹2,000 at ₹200/hr), price at ₹500–₹999/month. They pay ₹1,000 to save ₹2,000.</p>
            </div>
          </AccordionItem>
          <AccordionItem title="Freemium Conversion Optimization" icon="🔄">
            <p className="mb-3 text-sm text-[#9CA3AF]">The classic mistake: freemium that gives too much. Users get full value for free and have no reason to pay. Design your freemium tier to deliver value, but cap it at a level where the upgrade is clearly worth it.</p>
            <ul className="space-y-2">
              {[
                'Free tier should let users experience the core value proposition — but hit a clear ceiling',
                'The ceiling should be a usage limit (not a feature limit) — limits based on usage feel fair; feature gates feel arbitrary',
                'Conversion trigger: send an email when the user hits 80% of their free limit, not 100%',
                'Best freemium conversion rate: 2–5% of free users to paid is good; 5–10% is excellent',
                'Track: time from signup to first value moment. The shorter this is, the higher your conversion rate.',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                  <span className="text-[#4F7EFF] flex-shrink-0">→</span>
                  {p}
                </li>
              ))}
            </ul>
          </AccordionItem>
          <AccordionItem title="Annual Pricing Optimization" icon="📅">
            <p className="text-sm text-[#9CA3AF] mb-3">Annual plans benefit you (predictable cash, lower churn) and the customer (lower effective price). The goal: get 30–40% of customers on annual plans.</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#141428] rounded-lg p-3">
                <p className="text-xs font-semibold text-white">What to Offer</p>
                <p className="text-xs text-[#9CA3AF] mt-1">2 months free on annual = 16.7% discount. Frame it as "2 months free", not "17% off". Free is more compelling than percentage.</p>
              </div>
              <div className="bg-[#141428] rounded-lg p-3">
                <p className="text-xs font-semibold text-white">When to Offer</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Offer annual pricing at signup AND after 30 days of active usage. Both moments work. At 30 days, users have experienced value and are more willing to commit.</p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Psychology */}
      <section className="mb-10">
        <SectionHeader title="Startup Psychology — The Mental Game" badge="Founder Health" description="The psychological aspects nobody talks about, but everyone experiences." />
        <div className="space-y-3">
          {[
            { title: 'The Rejection Reality', desc: 'You will be rejected by 95% of the people you reach out to. This is not a signal about your product\'s quality — it\'s a signal about targeting. Cold outreach works at 2–5% response rates. If you\'re sending 100 emails and getting 2–5 responses, you\'re operating normally. Treat rejection as a data point: wrong ICP, wrong problem framing, or wrong channel.' },
            { title: 'Managing Isolation', desc: 'Building alone is lonely in a way that\'s genuinely hard to prepare for. The solution is deliberate community participation. Set a weekly commitment: post one update publicly, respond to 5 people\'s posts, have one call with another founder. Isolation compounds — fight it actively, not passively.' },
            { title: 'The Slow Period', desc: 'Every product goes through a period — usually 2–4 months in — where growth stalls and motivation craters. This is the period where founders quit prematurely. The slow period is not evidence that the product has failed. It\'s evidence that you\'ve exhausted your immediate network and haven\'t yet built distribution channels. This is a solvable tactical problem.' },
            { title: 'The Pivot Question', desc: 'Persist vs. pivot is the hardest question in startups. Here\'s a useful heuristic: if users love the product but you can\'t find them at scale, it\'s a distribution problem (persist and find a new channel). If users try the product and don\'t return, it\'s a product problem (understand why and pivot that specific feature). Only pivot your entire problem if you\'ve done 10+ user interviews and nobody has the problem you\'re solving.' },
            { title: 'Decision Fatigue', desc: 'Founders make hundreds of small decisions every day. By evening, decision quality drops dramatically. Systemize every repeatable decision so it requires no thought: consistent tech stack, consistent communication templates, consistent pricing model. Save your cognitive energy for the 3 non-routine decisions that actually matter each week.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <p className="font-semibold text-white text-sm mb-1.5">{item.title}</p>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Moats */}
      <section className="mb-10">
        <SectionHeader title="Competitive Advantage & Moats" badge="Strategy" description="Building defensibility into your product from day one." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { moat: 'Network Effects', time: '12–36 months to develop', icon: '🕸️', color: 'border-[#4F7EFF]/30', desc: 'Product becomes more valuable as more people use it. Marketplaces, communication tools, and data platforms. The hardest moat to build but the most defensible once established.' },
            { moat: 'Switching Costs', time: '6–18 months to develop', icon: '🔒', color: 'border-[#8B5CF6]/30', desc: 'Cost of leaving is high due to data, integrations, or trained workflows. B2B SaaS with deep API integrations and proprietary data formats create strong switching costs.' },
            { moat: 'Proprietary Data', time: '12–24 months to develop', icon: '📊', color: 'border-[#06B6D4]/30', desc: 'Data you accumulate by serving customers makes your product better over time and is impossible for competitors to replicate. ML models trained on your data are uniquely yours.' },
            { moat: 'Brand', time: '24–60 months to develop', icon: '⭐', color: 'border-[#F59E0B]/30', desc: 'Reputation and brand recognition that makes customers choose you regardless of feature parity. Earned through consistent delivery of value and public visibility over time.' },
            { moat: 'Economies of Scale', time: 'Develops with revenue growth', icon: '📈', color: 'border-[#10B981]/30', desc: 'As you grow, your cost per customer decreases. This allows you to underprice competitors at the same margin, making you increasingly competitive as you scale.' },
            { moat: 'Regulatory Moat', time: 'Depends on regulatory landscape', icon: '⚖️', color: 'border-[#EF4444]/30', desc: 'Products that help customers comply with regulations (GST, DPDP Act, RBI guidelines) create near-permanent demand as long as the regulation exists.' },
          ].map((m) => (
            <div key={m.moat} className={`bg-[#0F0F1A] border ${m.color} rounded-xl p-4`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{m.icon}</span>
                <p className="font-semibold text-white text-sm">{m.moat}</p>
              </div>
              <Badge variant="gray" className="mb-2">{m.time}</Badge>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Leverage */}
      <section className="mb-10">
        <SectionHeader title="AI Leverage for Founders" badge="2026 Advantage" description="How to use AI tools to operate at 3x the output of founders without them." />
        <div className="space-y-3">
          {[
            { use: 'Code Generation', tools: 'Cursor, GitHub Copilot, Claude', how: 'Use AI for boilerplate, repetitive patterns, and unfamiliar libraries. Your job is architecture and judgment. AI handles implementation. A good founder + Cursor in 2026 produces the output of a senior engineer + junior engineer from 2022.' },
            { use: 'Customer Research & Analysis', tools: 'Claude, ChatGPT, Perplexity', how: 'Dump 20 user interview transcripts into Claude. Ask: "What are the 5 most common pain points? What language do users use to describe the problem?" Synthesizes in 30 seconds what would take 4 hours manually.' },
            { use: 'Marketing Copy', tools: 'Claude, ChatGPT', how: 'Paste your ICP profile and product description. Ask for: cold email subject lines (50 variations), landing page headlines, Twitter posts, LinkedIn connection request templates. Iterate 10x faster.' },
            { use: 'Customer Support Automation', tools: 'OpenAI API, Groq, Supabase Vector', how: 'Build a support bot trained on your documentation and FAQs. Answers 70% of support questions automatically. Reduces your support time from 2 hours/day to 20 minutes/day at 50 users.' },
            { use: 'Competitive Intelligence', tools: 'Perplexity, Claude', how: 'Weekly: paste competitor changelog. Ask: "What does this tell me about their product direction and customer needs?" Synthesizes competitive intelligence in 2 minutes per competitor.' },
          ].map((item) => (
            <div key={item.use} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="font-semibold text-white text-sm">{item.use}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tools.split(', ').map((t) => (
                    <Badge key={t} variant="purple">{t}</Badge>
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.how}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Niche Domination */}
      <section className="mb-10">
        <SectionHeader title="Niche Domination Strategy" badge="Go-to-Market" description="Why niches are better than broad markets — and how to own one completely." />
        <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
          <p>
            The conventional wisdom says: find the biggest market and build for it. The reality for
            first-time founders: the biggest market is where the most competition is. A niche market
            is where you can build a reputation that compounds and where word-of-mouth travels naturally
            through a tight community.
          </p>
          <p>
            Coaching institute management software is a niche. But India has 20,000+ coaching institutes
            with 100+ students. At ₹10,000/month per institute and 1% market penetration, that's
            ₹2 Crore MRR. That is not a small niche — it's a focused market with a clear community,
            a tight word-of-mouth network, and buyers you can actually reach.
          </p>
        </div>
        <div className="mt-4 space-y-3">
          {[
            { step: '1', title: 'Choose a niche with 10,000+ potential customers', desc: 'Smaller than this and you can\'t build a meaningful SaaS business. Larger than this, you can always expand.' },
            { step: '2', title: 'Build the deepest solution in the niche', desc: 'Don\'t try to serve adjacent customers. Be 10x better for your specific niche than any horizontal alternative.' },
            { step: '3', title: 'Find the community where your niche congregates', desc: 'Every niche has WhatsApp groups, Facebook groups, LinkedIn groups, and offline associations. Become the most helpful person in those communities.' },
            { step: '4', title: 'Collect niche-specific case studies and testimonials', desc: 'A coaching institute saying "we saved 40 admin hours per month" is more powerful than any generic testimonial for the next coaching institute considering your product.' },
            { step: '5', title: 'Expand horizontally only after niche dominance', desc: 'Once you\'re the recognized leader in your niche, expanding to adjacent niches is easy — you bring credibility. Expanding before dominance means being mediocre in multiple markets.' },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <div className="w-7 h-7 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center flex-shrink-0 text-[#8B5CF6] font-bold text-xs">
                {s.step}
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{s.title}</p>
                <p className="text-xs text-[#9CA3AF]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CalloutBox variant="success" title="The Advanced Knowledge Synthesis">
        SaaS is a compounding game. Every metric compounds — MRR compounds through growth, NRR compounds
        through expansion, brand compounds through reputation, skills compound through experience. The
        founders who understand this build differently from day one: they make every decision through the
        lens of "does this compound over time, or does it reset to zero?" Build things that compound.
      </CalloutBox>
    </PageWrapper>
  );
}
