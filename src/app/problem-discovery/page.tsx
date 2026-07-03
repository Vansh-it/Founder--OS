import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import CalloutBox from '@/components/shared/CalloutBox';
import SectionHeader from '@/components/sections/SectionHeader';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Problem Discovery | Founder OS',
  description: 'Find billion-dollar problems. The complete problem discovery and validation system for technical founders.',
  openGraph: { title: 'Problem Discovery | Founder OS', description: 'Find billion-dollar problems using the Problem Quality Scoring System.', type: 'website' },
};

const scoringDimensions = [
  {
    title: 'DIMENSION 1: PAIN INTENSITY',
    icon: '🔥',
    ranges: [
      { range: '0–3', label: 'Nice-to-have', color: 'text-[#6B7280]', advice: 'Skip it. No one urgently buys solutions to mild annoyances.' },
      { range: '4–6', label: 'Moderate pain', color: 'text-[#F59E0B]', advice: 'Needs exceptionally strong distribution to compensate for weak pull.' },
      { range: '7–9', label: 'Real pain', color: 'text-[#4F7EFF]', advice: 'People are actively searching for solutions. Build here.' },
      { range: '10', label: 'Emergency pain', color: 'text-[#10B981]', advice: 'People pay anything to solve it. Compliance, security, outages.' },
    ],
  },
  {
    title: 'DIMENSION 2: FREQUENCY',
    icon: '🔄',
    ranges: [
      { range: '0–3', label: 'Annual occurrence', color: 'text-[#6B7280]', advice: 'Low SaaS potential. Only viable with very high one-time pricing.' },
      { range: '4–6', label: 'Monthly', color: 'text-[#F59E0B]', advice: 'Possible annual contract model with the right positioning.' },
      { range: '7–9', label: 'Weekly', color: 'text-[#4F7EFF]', advice: 'Strong recurring revenue potential. Users build habits around your tool.' },
      { range: '10', label: 'Daily', color: 'text-[#10B981]', advice: 'Extremely high LTV and retention. Daily tools become infrastructure.' },
    ],
  },
  {
    title: 'DIMENSION 3: CURRENT SOLUTION QUALITY',
    icon: '🎯',
    ranges: [
      { range: '0–3', label: 'Well-solved', color: 'text-[#6B7280]', advice: 'Hard to compete. Requires 10x better product or niche specialization.' },
      { range: '4–6', label: 'Solutions exist but painful', color: 'text-[#F59E0B]', advice: 'UX opportunity. Better design alone can win market share.' },
      { range: '7–9', label: 'Expensive or enterprise-only', color: 'text-[#4F7EFF]', advice: 'Massive opportunity to build a cheaper, simpler alternative.' },
      { range: '10', label: 'No real solution exists', color: 'text-[#10B981]', advice: 'Greenfield. Pure opportunity. Validate fast and own the market.' },
    ],
  },
  {
    title: 'DIMENSION 4: BUYER WILLINGNESS TO PAY',
    icon: '💰',
    ranges: [
      { range: '0–3', label: 'Consumers', color: 'text-[#6B7280]', advice: 'Extremely hard to monetize. Avoid unless you have viral growth mechanics.' },
      { range: '4–6', label: 'SMBs', color: 'text-[#F59E0B]', advice: 'Moderate willingness. Need volume and low CAC to work economically.' },
      { range: '7–9', label: 'Mid-market companies', color: 'text-[#4F7EFF]', advice: 'Strong willingness. Can charge ₹5K–₹25K/month with proven ROI.' },
      { range: '10', label: 'Enterprise', color: 'text-[#10B981]', advice: 'Unlimited budget for real solutions. Longer sales cycles but massive LTV.' },
    ],
  },
  {
    title: 'DIMENSION 5: MARKET SIZE',
    icon: '🌐',
    ranges: [
      { range: '0–3', label: 'Hyper-niche', color: 'text-[#6B7280]', advice: 'Build only if you can charge very high. Tiny market requires premium pricing.' },
      { range: '4–6', label: 'Local/regional', color: 'text-[#F59E0B]', advice: 'Strong India opportunity. Dominate locally, expand by state.' },
      { range: '7–9', label: 'National/vertical', color: 'text-[#4F7EFF]', advice: 'Strong opportunity. India alone is 1.4B people with massive under-served segments.' },
      { range: '10', label: 'Global horizontal', color: 'text-[#10B981]', advice: 'Potential unicorn territory. Every company in the world is a potential customer.' },
    ],
  },
];

const industries = [
  {
    name: 'Enterprise Software + SaaS',
    icon: '🏢',
    color: 'border-[#4F7EFF]/30',
    inefficiencies: [
      'License waste: The average mid-size Indian company with 200 Microsoft 365 users has 30–40% licenses going unused. IT managers have no visibility into who logs in, who uses which features, and which seats can be reclaimed. That\'s ₹5–8 lakh in pure waste per year.',
      'Shadow IT proliferation: Employees use unauthorized tools (personal Notion, Dropbox, Trello) because enterprise tools are too complex. Security teams are blind to this. Compliance is broken.',
      'Analytics blindspots: Most companies cannot answer "which SaaS tools are actually being used?" They pay for tools that employees abandoned months ago.',
      'Cross-tool integration failures: Salesforce doesn\'t sync with Zoho. Jira doesn\'t connect to Slack in the way teams need. Integration gaps cost hours of manual data transfer daily.',
      'Security compliance gaps: SOC 2, ISO 27001, and India\'s DPDP Act create enormous compliance overhead. Most mid-size companies are not compliant and know it.',
    ],
    howToFind: 'Read the Microsoft Tech Community forums, r/sysadmin, r/sysadmin_india, IT manager LinkedIn posts. Job postings for "IT Asset Management" roles signal pain around tool consolidation.',
  },
  {
    name: 'Indian Education System',
    icon: '📚',
    color: 'border-[#8B5CF6]/30',
    inefficiencies: [
      'Coaching institute operations: Kota-style coaching institutes with 500+ students manage attendance, fee collection, doubt sessions, test schedules, and faculty management on WhatsApp groups and Excel. This is a ₹1000 Cr+ industry with 1990s operations.',
      'Student progress tracking: Parents pay ₹3–8 lakhs per year for IIT/NEET coaching but have zero visibility into how their child is actually performing week to week.',
      'Content distribution: Most coaching institutes distribute PDFs over WhatsApp. No version control, no analytics, no way to track who read what.',
      'Faculty scheduling: Timetable management for large institutes involves 20-year-old Excel files managed by one person who becomes a single point of failure.',
      'Payment tracking for installments: Coaching institutes work on installment models but track payments via receipts books and manual ledgers. Cash flow visibility is zero.',
    ],
    howToFind: 'Visit any coaching institute in your city. Talk to the admin staff. Ask them what software they use. Guaranteed you\'ll find chaos. Read parent forums on Quora about IIT/NEET coaching experiences.',
  },
  {
    name: 'Indian Healthcare',
    icon: '🏥',
    color: 'border-[#06B6D4]/30',
    inefficiencies: [
      'Clinic management is still paper-based: 60% of single-doctor clinics in India manage patient records on paper. The doctor\'s receptionist keeps a register. Digital records are exceptional, not the norm.',
      'Appointment systems are WhatsApp-based: Patients send a WhatsApp message to book. The receptionist manually manages a book. Cancellations and rescheduling are chaos.',
      'Lab report delivery is physical: Patients travel back to labs to collect reports that could be delivered digitally in seconds. This is a solvable problem with a PDF + SMS system.',
      'Medical record fragmentation: Every hospital, clinic, and lab has separate records. A patient seeing 3 doctors has 3 different records with no integration.',
      'Insurance claim submission: Submitting health insurance claims requires physical paperwork. Digitization exists for large hospitals but not for the 90%+ of smaller clinics.',
    ],
    howToFind: 'Go to a local clinic as a patient. Observe the workflow. Ask the receptionist what they wish was easier. Read doctor communities on LinkedIn and Practo forums.',
  },
  {
    name: 'Indian Logistics & Supply Chain',
    icon: '🚚',
    color: 'border-[#F59E0B]/30',
    inefficiencies: [
      'Last-mile delivery tracking: D2C brands using Shiprocket or Delhivery give customers a tracking link that often shows no updates for 48 hours. The gap between "shipped" and "out for delivery" is a support ticket factory.',
      'Vendor payment reconciliation: Distributors and stockists reconcile payments via WhatsApp forwards and Excel. Finance teams spend 2–3 days every month on manual reconciliation.',
      'Inventory visibility in small warehouses: Warehouses under 5,000 sq ft tracking inventory on physical ledgers or basic tally software. FIFO, LIFO, expiry tracking are all manual.',
      'Return management for D2C brands: Processing returns for online D2C brands is a chaos of emails, photos on WhatsApp, and manual credit note issuance.',
      'Driver management: Fleet owners with 10–50 vehicles track maintenance, fuel expense, and driver attendance on paper. Fuel theft is rampant and undetected.',
    ],
    howToFind: 'Talk to any D2C brand founder about their logistics pain. Read r/IndiaInvestments and r/startups for founder complaints. Attend any e-commerce seller meetup in your city.',
  },
  {
    name: 'Indian SMB Market',
    icon: '🏪',
    color: 'border-[#10B981]/30',
    inefficiencies: [
      'Invoice generation is manual: India has 63 million MSMEs. Most generate GST invoices using Tally or Excel templates. The process takes 5–10 minutes per invoice.',
      'GST filing complexity: GST has 3 monthly returns (GSTR-1, GSTR-2A, GSTR-3B) plus quarterly returns. CA fees, compliance software costs, and manual reconciliation are massive pain.',
      'Employee attendance for <50 person companies: Small businesses use a register. When they graduate to biometric, the machine fails. Payroll calculation is still manual.',
      'WhatsApp-based customer management: Every local business uses WhatsApp to manage 200+ customer conversations. No history search, no tagging, no automation.',
      'Cash flow visibility: The founder of a 20-person business cannot see their net cash position in real-time. They find out they\'re short on payroll the day before payday.',
    ],
    howToFind: 'Visit any market (electronics, FMCG, auto parts). Ask shop owners what their biggest operational headaches are. The answers are consistent and depressing.',
  },
];

const validationSteps = [
  {
    step: 1,
    title: 'Problem Hypothesis',
    desc: 'Write your problem statement in exactly one sentence. Format: "[Target customer] struggles with [specific problem] when they try to [goal], which costs them [time/money/opportunity]." If you cannot write it in one sentence, you don\'t understand the problem yet.',
  },
  {
    step: 2,
    title: 'Existence Proof',
    desc: 'Find 10 real people who have this problem. Not 10 people who might have it. 10 people who actively experience it and can describe their current workflow in detail. LinkedIn, Reddit, Twitter, WhatsApp groups — find them.',
  },
  {
    step: 3,
    title: 'Current Solution Audit',
    desc: 'Document exactly what each person does today to solve this problem. What tools do they use? What\'s their manual workflow? How long does it take? What breaks? This is your competitive moat research.',
  },
  {
    step: 4,
    title: 'Willingness to Pay Test',
    desc: 'Ask for commitment before building. Show a landing page. Offer early access for a specific price. If no one will pay even a token amount before the product exists, the problem isn\'t painful enough. This test saves months of wasted building.',
  },
  {
    step: 5,
    title: 'Market Density Test',
    desc: 'Estimate how many people in your target market have this problem. Use LinkedIn Sales Navigator filters. Google job posting volumes. Industry reports. You need at least 10,000 people with this problem to build a viable SaaS.',
  },
];

export default function ProblemDiscoveryPage() {
  return (
    <PageWrapper
      title="Problem Discovery System"
      description="How to find problems worth solving — and avoid building things nobody needs."
      icon="🔍"
      badge="Foundation Module"
      timeToRead={18}
      lastUpdated="Jan 2026"
    >
      {/* Philosophy */}
      <section className="mb-10">
        <SectionHeader
          title="The Philosophy of Problem Discovery"
          badge="Why This Matters"
          description="Most technical founders build solutions before finding real problems. Here's why that's a catastrophic mistake — and how to fix the habit."
        />
        <div className="space-y-4 text-[#9CA3AF] leading-relaxed text-sm">
          <p>
            The most common mistake among technical founders is falling in love with the solution before
            understanding the problem. You learn React, you get excited about what you can build, and you
            start building. The result is usually a technically impressive product that nobody asked for
            and nobody pays for.
          </p>
          <p>
            The best startups start with a deep frustration — something the founder personally experienced
            and couldn't solve — or a deep observation — something they noticed while watching how other
            people work. Stripe started because Patrick and John Collison were personally frustrated with
            how hard it was to accept payments online. Zerodha started because Nithin Kamath was personally
            frustrated with how expensive stock trading was in India. Both founders solved problems they
            intimately understood before writing a single line of code.
          </p>
          <p>
            The habit you need to develop is "problem collection" — treating every workflow you encounter
            as a potential opportunity. When you watch your local shop owner write invoices by hand,
            you're looking at a problem. When you see your school's admin department use a physical attendance
            register in 2026, you're looking at a problem. When your parents use 3 different apps to manage
            their small business and they still don't have real-time cash visibility, you're looking at a problem.
          </p>
          <p>
            The difference between a ₹1,000 problem and a ₹100 Crore problem is not complexity — it's
            frequency, urgency, and buyer budget. A problem that affects 10,000 companies that each have
            ₹10,000/month budget is a ₹12 Crore ARR market at 10% penetration. A problem that affects
            1 billion consumers who would pay ₹0 is worth nothing commercially. Indian markets have unique
            inefficiency opportunities because legacy software built for Western markets doesn't fit Indian
            workflows, regulatory requirements, or price points. That's your edge.
          </p>
        </div>
      </section>

      {/* Scoring System */}
      <section className="mb-10">
        <SectionHeader
          title="The Problem Quality Scoring System"
          badge="Core Framework"
          description="Score every problem idea on 5 dimensions. Total score determines whether to build, pivot, or abandon."
        />
        <div className="space-y-4">
          {scoringDimensions.map((dim) => (
            <div key={dim.title} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#1E1E3F] flex items-center gap-3">
                <span className="text-xl">{dim.icon}</span>
                <h3 className="font-bold text-white text-sm">{dim.title}</h3>
              </div>
              <div className="divide-y divide-[#1E1E3F]">
                {dim.ranges.map((r) => (
                  <div key={r.range} className="px-5 py-3 flex items-start gap-4">
                    <span className={`font-mono font-bold text-sm w-12 flex-shrink-0 ${r.color}`}>{r.range}</span>
                    <div>
                      <span className="text-white text-sm font-medium">{r.label} — </span>
                      <span className="text-[#9CA3AF] text-sm">{r.advice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Score interpretation */}
        <div className="mt-4 bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
          <p className="font-bold text-white mb-3">Total Score Interpretation (out of 50)</p>
          <div className="space-y-2">
            {[
              { range: '0–20', label: 'Do not build. Find a better problem.', color: 'text-[#EF4444]' },
              { range: '21–35', label: 'Niche opportunity. Build only if you can dominate.', color: 'text-[#F59E0B]' },
              { range: '36–45', label: 'Strong opportunity. Begin validation immediately.', color: 'text-[#4F7EFF]' },
              { range: '46–50', label: 'Elite opportunity. Move fast. This combination is rare.', color: 'text-[#10B981]' },
            ].map((s) => (
              <div key={s.range} className="flex items-center gap-3">
                <span className={`font-mono text-sm font-bold w-14 ${s.color}`}>{s.range}</span>
                <span className="text-[#9CA3AF] text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Framework */}
      <section className="mb-10">
        <SectionHeader
          title="The Industry Observation Framework"
          badge="Research System"
          description="Five high-opportunity industries for Indian technical founders, with specific identified inefficiencies."
        />
        <Accordion>
          {industries.map((ind) => (
            <AccordionItem key={ind.name} title={ind.name} icon={ind.icon}>
              <div className="space-y-3">
                <p className="font-semibold text-[#9CA3AF] text-xs uppercase tracking-wide mb-2">Specific Inefficiencies</p>
                <ul className="space-y-2">
                  {ind.inefficiencies.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#4F7EFF] mt-1 flex-shrink-0">→</span>
                      <span className="text-sm text-[#9CA3AF]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-[#1E1E3F]">
                  <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-1">How to Find More</p>
                  <p className="text-sm text-[#9CA3AF]">{ind.howToFind}</p>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Billion Dollar Method */}
      <section className="mb-10">
        <SectionHeader
          title="How to Find Inefficiencies Worth Solving"
          badge="Tactical Method"
          description="Eight systematic methods for identifying problems that justify a startup."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { n: '01', title: 'Observe the Workflow', desc: 'Physically or virtually watch how people do their jobs. Shadow a professional for a day. Record every step that involves manual copying, switching tabs, or workarounds. Each workaround is a potential product.' },
            { n: '02', title: 'Job Posting Intelligence', desc: 'Read 50 job postings for a role. Every repeated skill they require signals a gap. If 30 job postings ask for "Excel proficiency to manage X process", X is an automation opportunity.' },
            { n: '03', title: 'Reddit & Forum Mining', desc: 'Search r/sysadmin, r/entrepreneur, r/india, r/startups for "I hate that", "I wish there was", "why doesn\'t any software". These are raw problem statements from real users.' },
            { n: '04', title: 'Software Review Intelligence', desc: 'Read 1-star and 2-star reviews on G2, Capterra, and Trustpilot for dominant tools. Users explicitly write what\'s broken. Build what they\'re screaming for.' },
            { n: '05', title: 'Enterprise Procurement Signals', desc: 'RFP databases (TenderWizard, GEM for government) show what enterprises are trying to buy. If they\'re writing RFPs, existing solutions don\'t meet their needs.' },
            { n: '06', title: 'Competitive Displacement', desc: 'Find software that is 10+ years old with a horrible UX and a CrunchBase funding date of 2008. Their customers hate the product but feel locked in. You can win by being 3x easier to use.' },
            { n: '07', title: 'API & Integration Gaps', desc: 'Use Zapier\'s or Make\'s integration library. Look for popular apps with no integration between them. If 10,000 users have requested "Connect Razorpay with Notion", that\'s a paid product.' },
            { n: '08', title: 'Regulatory Change Opportunities', desc: 'New regulations create instant demand. GST created Tally\'s growth. DPDP Act 2023 creates demand for privacy compliance tools. SEBI rule changes create fintech opportunities.' },
          ].map((m) => (
            <div key={m.n} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-[#4F7EFF]/40 font-mono font-bold text-xl">{m.n}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{m.title}</p>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Validation System */}
      <section className="mb-10">
        <SectionHeader
          title="The 5-Step Validation Protocol"
          badge="Before You Build"
          description="Validate without building. These five steps save months of misdirected work."
        />
        <div className="space-y-3">
          {validationSteps.map((step) => (
            <div key={step.step} className="flex gap-4 bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-[#4F7EFF]/10 border border-[#4F7EFF]/30 flex items-center justify-center flex-shrink-0 text-[#4F7EFF] font-bold text-sm">
                {step.step}
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{step.title}</p>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <CalloutBox variant="tip" title="Validate Without Building — Quick Methods" className="mt-4">
          <ul className="space-y-1.5 mt-2">
            <li>→ <strong className="text-white">Google Form surveys</strong>: 7 questions max. Ask: current tools, frequency, biggest pain, budget, email for beta access.</li>
            <li>→ <strong className="text-white">LinkedIn cold outreach</strong>: Find 20 ICPs. Send: "I'm building [X] for [Y problem]. Would you do a 20-minute call to validate my assumptions?"</li>
            <li>→ <strong className="text-white">Fake landing page</strong>: Build in 30 min on Vercel. "Join the waitlist." If 0 sign-ups after 200 visitors, wrong problem.</li>
            <li>→ <strong className="text-white">Reddit posts</strong>: "I'm thinking of building X for Y problem. Am I solving a real problem for anyone here?" Honest answers guaranteed.</li>
          </ul>
        </CalloutBox>
      </section>

      {/* Problem Collection System */}
      <section className="mb-10">
        <SectionHeader
          title="The Problem Collection System"
          badge="Daily Practice"
          description="Build a permanent database of problems you observe. Review weekly. Score monthly."
        />
        <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
          <p className="text-sm font-semibold text-white mb-3">Notion Problem Database — Exact Template</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#1E1E3F]">
                  {['Industry', 'Problem', 'Pain Score', 'Market Size', 'Solution Gap', 'Revenue Potential', 'Validation Status'].map((h) => (
                    <th key={h} className="text-[#6B7280] font-semibold text-left py-2 pr-4 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[#9CA3AF]">
                <tr className="border-b border-[#1E1E3F]/50">
                  <td className="py-2 pr-4">Education</td>
                  <td className="py-2 pr-4">Coaching institute ops</td>
                  <td className="py-2 pr-4 text-[#10B981]">42/50</td>
                  <td className="py-2 pr-4">₹2,000 Cr+</td>
                  <td className="py-2 pr-4 text-[#4F7EFF]">High</td>
                  <td className="py-2 pr-4">₹5K–15K/month</td>
                  <td className="py-2 pr-4"><Badge variant="orange">Researching</Badge></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Healthcare</td>
                  <td className="py-2 pr-4">Clinic appointment system</td>
                  <td className="py-2 pr-4 text-[#F59E0B]">35/50</td>
                  <td className="py-2 pr-4">₹800 Cr+</td>
                  <td className="py-2 pr-4 text-[#4F7EFF]">Medium</td>
                  <td className="py-2 pr-4">₹2K–8K/month</td>
                  <td className="py-2 pr-4"><Badge variant="gray">Backlog</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 pt-4 border-t border-[#1E1E3F]">
            <p className="text-xs text-[#9CA3AF]">
              <strong className="text-white">Weekly Review:</strong> Every Sunday, spend 30 minutes reviewing your problem database.
              Add new problems from the week. Score any unscored problems. Move top-scored problems to "active validation."
              Kill any problems that have been sitting unvalidated for 4+ weeks.
            </p>
          </div>
        </div>
      </section>

      <CalloutBox variant="success" title="The Most Important Insight">
        The goal of problem discovery is not to find a perfect problem. It's to find a problem worth
        spending 2–3 years of your life solving. A 40/50 problem you understand deeply is infinitely
        better than a 47/50 problem you discovered yesterday. Pick problems from industries you can
        actually study. The research advantage of deep domain knowledge compounds dramatically over time.
      </CalloutBox>
    </PageWrapper>
  );
}
