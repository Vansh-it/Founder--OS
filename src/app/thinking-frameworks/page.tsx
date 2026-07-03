import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Thinking Frameworks | Founder OS',
  description: 'How elite founders think. First-principles, systems thinking, leverage, high-agency — the cognitive OS of world-class builders.',
  openGraph: { title: 'Thinking Frameworks | Founder OS', description: 'The mental model stack of elite technical founders.', type: 'website' },
};

export default function ThinkingFrameworksPage() {
  return (
    <PageWrapper
      title="Thinking Frameworks"
      description="The cognitive operating system of elite founders. These are not motivational concepts — they are practiced mental tools."
      icon="🧠"
      badge="Frameworks Module"
      timeToRead={20}
      lastUpdated="Jan 2026"
    >
      {/* Mental Model Stack */}
      <section className="mb-10">
        <SectionHeader title="How Elite Founders Think — The Mental Model Stack" badge="Core Difference" />
        <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
          <p>
            The cognitive difference between an average builder and an elite founder is not IQ. It's not
            even work ethic. It's the set of mental models they use to process information, make decisions,
            and identify opportunities. These models are learnable. They're practiced skills, not innate gifts.
          </p>
          <p>
            Technical skills — coding, system design, debugging — are about getting computers to do what you want.
            Founder skills are about getting the world to do what you want: finding the right problem, persuading
            people to use your product, extracting money from customers who didn't know they needed you.
            These require completely different mental tools.
          </p>
          <p>
            Elite founders see <strong className="text-white">systems where others see products</strong>. When
            Nithin Kamath built Zerodha, he didn't see "a trading app." He saw a broken system where brokers
            charged 0.5% per trade because customers had no alternative and no visibility into the cost. He
            re-engineered the economic system around flat ₹20/trade and built the largest retail broker in India.
            That's systems thinking applied to market structure.
          </p>
          <p>
            Elite founders think in <strong className="text-white">leverage</strong> — one action, maximum outcomes.
            Writing code is leverage. A single engineer can build software that runs for 10,000 concurrent users.
            Writing a well-optimized blog post is leverage. It attracts users every day for years.
            Elite founders are obsessed with identifying the single action that produces the maximum result.
          </p>
          <p>
            The founder's paradox is maintaining dual focus: executing on what's in front of you this week
            while simultaneously thinking about where the market will be in 3 years. The best founders live
            in both time horizons simultaneously. This week's sprint + long-term positioning are not in conflict —
            they're the same activity viewed at different time scales.
          </p>
        </div>
      </section>

      {/* First Principles */}
      <section className="mb-10">
        <SectionHeader title="First-Principles Thinking" badge="Mental Model 1" description="Break industry assumptions down to base-level facts. Rebuild from scratch." />
        <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed mb-6">
          <p>
            First-principles thinking means refusing to reason by analogy. Instead of asking "how does everyone
            else solve this?" you ask "what is actually true about this situation at its most fundamental level?"
            It's the difference between copying a recipe and understanding chemistry well enough to invent new dishes.
          </p>
          <p>
            <strong className="text-white">How Stripe applied first-principles to payments:</strong> The conventional
            wisdom was that payment processing was complex because banks, card networks, and regulations made it
            complex. Stripe asked: what does a developer actually need to accept a payment? A few API calls.
            That's it. They rebuilt the developer-facing layer from scratch and made everything complex invisible.
            Result: every startup in the world uses Stripe.
          </p>
          <p>
            <strong className="text-white">How Zerodha applied first-principles to stock trading:</strong> Every
            broker charged percentage-based commissions because that was the industry model. Zerodha asked: what
            does it actually cost to execute a trade? Near zero in a digital system. They charged flat ₹20 and
            became the largest retailer broker in India while traditional brokers declined.
          </p>
        </div>

        <div className="bg-[#0F0F1A] border border-[#8B5CF6]/30 rounded-2xl p-5">
          <p className="font-bold text-white mb-3">5 First-Principles Exercises — Do This Week</p>
          <div className="space-y-3">
            {[
              'Pick any software you use daily. Ask: why does it cost what it costs? What would it cost to rebuild from scratch? Where does the pricing come from?',
              'Pick any industry process (loan applications, insurance claims, school admissions). Map every step. Ask: which steps exist because they actually need to, and which exist because "that\'s how it\'s always been done"?',
              'Find a market where prices haven\'t changed in 5+ years. Ask: what changed in technology that should have made this cheaper? Why hasn\'t it?',
              'Look at the software your parents or relatives use at work. Ask: if you designed this from scratch today with modern tools, what would you build differently?',
              'Read one G2 review page for a market-leading B2B tool. For every complaint, ask: is this complaint fundamental (unavoidable) or is it a design choice that could be changed?',
            ].map((ex, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#8B5CF6] font-mono font-bold text-sm w-5 flex-shrink-0">{i + 1}.</span>
                <p className="text-sm text-[#9CA3AF]">{ex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Thinking */}
      <section className="mb-10">
        <SectionHeader title="Systems Thinking Framework" badge="Mental Model 2" description="Map the full system of any industry. Find the highest-leverage intervention point." />
        <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed mb-6">
          <p>
            Every industry is a system with inputs, processes, outputs, and feedback loops. Most founders
            see one component of the system and try to fix it in isolation. Systems thinkers map the whole
            system first, then find where a single intervention creates maximum downstream change.
          </p>
          <p>
            Example: Map the coaching institute system. <strong className="text-white">Inputs:</strong> students,
            faculty, content, fees. <strong className="text-white">Processes:</strong> enrollment, teaching,
            testing, feedback, billing. <strong className="text-white">Outputs:</strong> student rank improvement,
            parent satisfaction, institute reputation. <strong className="text-white">Feedback loops:</strong> good
            results attract more students, attract better faculty, improve results further.
          </p>
          <p>
            Now find the highest-leverage intervention: if you improved student progress tracking (one process),
            you'd directly improve: parent satisfaction (they see ROI), student motivation (they see progress),
            faculty feedback loops (they know what to teach more), and ultimately institute reputation (more
            rank improvements). One tool affecting the entire system.
          </p>
        </div>

        <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
          <p className="font-bold text-white text-sm mb-3">How to Map Any Industry System</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { step: '1', title: 'Define the actors', desc: 'Who are the people/entities in this system? What does each one want?' },
              { step: '2', title: 'Map the flows', desc: 'What flows between actors? Money, information, products, decisions?' },
              { step: '3', title: 'Find the bottlenecks', desc: 'Where does information stop flowing? Where does money get delayed? That\'s friction.' },
              { step: '4', title: 'Identify feedback loops', desc: 'What makes the system self-reinforcing? What creates compounding advantages?' },
              { step: '5', title: 'Find leverage points', desc: 'Which single change would ripple through the most parts of the system?' },
              { step: '6', title: 'Test your hypothesis', desc: 'Talk to actors at each part of the system. Validate that the bottleneck is real.' },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3 bg-[#141428] rounded-xl p-3">
                <span className="text-[#4F7EFF]/60 font-mono font-bold text-base w-5 flex-shrink-0">{s.step}</span>
                <div>
                  <p className="font-semibold text-white text-xs mb-0.5">{s.title}</p>
                  <p className="text-xs text-[#9CA3AF]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leverage Thinking */}
      <section className="mb-10">
        <SectionHeader title="Leverage Thinking — The Founder's Superpower" badge="Mental Model 3" description="Maximize the return on every unit of time and energy you spend." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { type: 'Code Leverage', icon: '⚡', color: 'border-[#4F7EFF]/30', desc: 'Software you write once that works for 1,000,000 users simultaneously. A single engineer can scale to infinity. This is the highest form of leverage ever invented. You already have access to it.' },
            { type: 'Content Leverage', icon: '📝', color: 'border-[#8B5CF6]/30', desc: 'Content you create once that attracts users forever. A well-written blog post about a technical problem gets organic search traffic for years. One YouTube tutorial can drive thousands of signups.' },
            { type: 'Network Leverage', icon: '🕸️', color: 'border-[#06B6D4]/30', desc: 'Each new user makes the product more valuable. Referral networks, community platforms, and marketplace models compound. WhatsApp has no content team — users create the value.' },
            { type: 'Capital Leverage', icon: '💰', color: 'border-[#10B981]/30', desc: 'Money working to generate more money. Invest in ads that convert profitably. Use revenue to hire, which generates more revenue. This becomes available after the first two types create initial value.' },
          ].map((l) => (
            <div key={l.type} className={`bg-[#0F0F1A] border ${l.color} rounded-2xl p-5`}>
              <span className="text-2xl block mb-2">{l.icon}</span>
              <p className="font-bold text-white text-sm mb-2">{l.type}</p>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
        <CalloutBox variant="tip" title="The Leverage Stack for Young Technical Founders">
          Code + SEO content + community presence + reputation compounds faster than any single channel.
          A technical founder who ships publicly (code leverage), writes about what they learn (content leverage),
          builds in communities (network leverage), and delivers real value to users builds a compounding
          distribution engine that most adult founders never achieve. Start all four in parallel from day one.
        </CalloutBox>
      </section>

      {/* High-Agency */}
      <section className="mb-10">
        <SectionHeader title="The High-Agency Mindset" badge="Mental Model 4" description="Refuse to accept 'it's not possible' as a final answer." />
        <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed mb-4">
          <p>
            High-agency means treating every obstacle as a puzzle to be solved rather than a wall to stop at.
            When a low-agency person hears "you need to be 18 to open a Stripe account", they stop.
            When a high-agency person hears the same thing, they ask: "What are the 5 alternative paths to
            accepting payment that don't require a Stripe account? And which of those paths might actually
            be better for my situation?"
          </p>
          <p>
            High-agency is not about ignoring constraints. It's about treating constraints as design parameters
            rather than stopping conditions. Every great startup story is a series of "it's impossible" moments
            that the founders refused to accept.
          </p>
        </div>
        <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
          <p className="font-bold text-white text-sm mb-3">High-Agency vs Low-Agency Responses</p>
          <div className="space-y-3">
            {[
              { situation: 'You can\'t get meetings with potential customers', low: 'Send more emails and wait.', high: 'Build a public demo. Post it in relevant communities. Offer free setup calls. Make them come to you.' },
              { situation: 'Your competitor has more features', low: 'Try to match every feature.', high: 'Find the 10 users they can\'t serve well. Become perfect for those 10. Own a niche they ignore.' },
              { situation: 'You can\'t afford paid infrastructure', low: 'Wait until you have money.', high: 'Build on the free tiers that now offer more than paid tiers of 5 years ago. Ship anyway.' },
              { situation: 'Nobody is responding to your cold emails', low: 'Maybe the market doesn\'t exist.', high: 'Wrong subject line. Wrong ICP. Wrong problem framing. Iterate the message 10 times before concluding anything.' },
            ].map((s, i) => (
              <div key={i} className="bg-[#141428] rounded-xl p-4">
                <p className="text-xs font-semibold text-white mb-2">{s.situation}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] text-[#EF4444] font-semibold uppercase mb-1">Low-Agency</p>
                    <p className="text-xs text-[#9CA3AF]">{s.low}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#10B981] font-semibold uppercase mb-1">High-Agency</p>
                    <p className="text-xs text-[#9CA3AF]">{s.high}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rapid Iteration */}
      <section className="mb-10">
        <SectionHeader title="Rapid Iteration & Execution Systems" badge="Mental Model 5" description="The 72-Hour MVP Rule and the weekly execution cycle that compounds." />

        <CalloutBox variant="warning" title="The 72-Hour MVP Rule">
          If you cannot build a basic, testable version of your product in 72 hours, your scope is too large.
          An MVP is not a finished product. It's a hypothesis test. What is the minimum surface area of product
          that lets you validate whether your core value proposition is real? Build only that.
        </CalloutBox>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
            <p className="font-bold text-white text-sm mb-3">Weekly Execution Cycle</p>
            <div className="space-y-2">
              {[
                { day: 'Monday', task: 'Define the ONE thing to accomplish this week. Write it in one sentence.' },
                { day: 'Tue–Thu', task: 'Build or execute. No context switching. Deep work only.' },
                { day: 'Friday', task: 'Ship, launch, or publish something. No more building.' },
                { day: 'Saturday', task: 'Collect feedback. Talk to at least 3 users or potential users.' },
                { day: 'Sunday', task: 'Analyze what you learned. Plan next week\'s ONE thing.' },
              ].map((d) => (
                <div key={d.day} className="flex items-start gap-3">
                  <span className="text-[#4F7EFF] font-mono text-xs w-16 flex-shrink-0 font-bold">{d.day}</span>
                  <p className="text-xs text-[#9CA3AF]">{d.task}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
            <p className="font-bold text-white text-sm mb-3">Daily Founder Routine</p>
            <div className="space-y-2">
              {[
                { time: 'Morning', task: 'High-focus build time. 3–4 hours. Phone on DND. No meetings. This is your highest-value work.' },
                { time: 'Afternoon', task: 'Outreach, marketing, user conversations. All communication in one block, not scattered through the day.' },
                { time: 'Evening', task: 'Learning, research, planning. Read, watch technical content, plan tomorrow. No build decisions after 8pm.' },
              ].map((d) => (
                <div key={d.time} className="flex items-start gap-3">
                  <span className="text-[#8B5CF6] font-mono text-xs w-20 flex-shrink-0 font-bold">{d.time}</span>
                  <p className="text-xs text-[#9CA3AF]">{d.task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decision Making */}
      <section className="mb-10">
        <SectionHeader title="Decision-Making Systems for Founders" badge="Mental Model 6" description="Most decisions are easier than you're making them. Use the right framework for each type." />
        <Accordion>
          <AccordionItem title="The Reversibility Test — Most Important Framework" icon="↩️" defaultOpen>
            <p className="mb-3">Classify every decision before making it:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#141428] rounded-lg p-3">
                <p className="text-[#EF4444] font-bold text-xs mb-1">Type 1: Irreversible</p>
                <p className="text-xs text-[#9CA3AF] mb-2">Move slowly. Think deeply. Get outside opinions.</p>
                <p className="text-xs text-[#6B7280]">Examples: Key hires, investor terms, founding equity splits, pivoting away from current customers.</p>
              </div>
              <div className="bg-[#141428] rounded-lg p-3">
                <p className="text-[#10B981] font-bold text-xs mb-1">Type 2: Reversible</p>
                <p className="text-xs text-[#9CA3AF] mb-2">Move fast. Learn from action. Don't overthink.</p>
                <p className="text-xs text-[#6B7280]">Examples: Feature choices, pricing experiments, marketing channels, product positioning, UI changes. 95% of startup decisions.</p>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem title="The 10/10/10 Framework" icon="⏰">
            <p className="text-sm text-[#9CA3AF]">Before any significant decision, ask three questions:</p>
            <ul className="mt-2 space-y-2">
              <li className="text-sm text-[#9CA3AF]"><strong className="text-[#4F7EFF]">10 minutes:</strong> How will I feel about this decision in 10 minutes? If the answer is "embarrassed" or "regretful", don't do it.</li>
              <li className="text-sm text-[#9CA3AF]"><strong className="text-[#4F7EFF]">10 months:</strong> How will I feel in 10 months? This filters out decisions driven by short-term emotion.</li>
              <li className="text-sm text-[#9CA3AF]"><strong className="text-[#4F7EFF]">10 years:</strong> How will I feel in 10 years? Most "catastrophic" startup setbacks look like minor learning experiences in a decade.</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="The Regret Minimization Framework" icon="🎯">
            <p className="text-sm text-[#9CA3AF]">
              Jeff Bezos used this to decide to leave a well-paying finance job to start Amazon at 30.
              The framework: imagine yourself at 80, looking back at your life. Would you regret not
              taking this action more than you would regret taking it and failing? For most founder
              decisions about whether to build and ship, the answer is clear — you will regret not
              trying far more than you would regret trying and failing at 17.
            </p>
            <p className="text-sm text-[#9CA3AF] mt-2">
              At 17, you have an asymmetric position: the cost of failure is near zero (you learn,
              you restart) and the upside is enormous. The regret minimization framework points in
              one direction: build, ship, and learn.
            </p>
          </AccordionItem>
        </Accordion>
      </section>

      <CalloutBox variant="success" title="The Mental Model Hierarchy">
        If you master only three mental models as a founder, make them: (1) First-principles — so you
        see opportunities others miss; (2) Systems thinking — so you build products that solve root
        causes not symptoms; and (3) High-agency — so obstacles become inputs, not stop signs. Everything
        else builds on these three foundations.
      </CalloutBox>
    </PageWrapper>
  );
}
