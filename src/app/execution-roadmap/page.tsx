import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';
import ChecklistSystem from '@/components/sections/ChecklistSystem';
import Badge from '@/components/ui/Badge';
import type { ChecklistItem } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Execution Roadmap | Founder OS',
  description: 'Day-by-day execution plan from idea to recurring revenue. Phases, checklists, and milestones.',
  openGraph: { title: 'Execution Roadmap | Founder OS', description: 'The complete execution roadmap from idea to ₹10K MRR.', type: 'website' },
};

const phases = [
  {
    phase: 'PHASE 1',
    period: 'Days 1–7',
    title: 'Idea to Validated Problem',
    color: 'border-[#4F7EFF]/40',
    bgColor: 'bg-[#4F7EFF]/5',
    steps: [
      {
        days: 'Day 1–2',
        title: 'Problem Identification',
        tasks: [
          'Morning (2h): Study one industry using the Industry Observation Framework. Pick: Education, Healthcare, SMB, Logistics, or Enterprise SaaS.',
          'Afternoon (1.5h): Score 3 problems using the Problem Quality Scoring System. Write each score in a Notion database.',
          'Evening (1h): Research competition for your top-scored problem. Search G2, Product Hunt, Capterra. Document every competitor.',
          'Output: One problem with a score of 36+ and a clear competitive gap.',
        ],
      },
      {
        days: 'Day 3–4',
        title: 'Problem Validation',
        tasks: [
          'Build a Google Form with exactly these 7 questions: (1) What\'s your job title? (2) How do you currently handle [problem]? (3) How long does that take? (4) What\'s most painful about the current process? (5) Have you tried any tools? What was wrong with them? (6) If a tool fixed this perfectly, what would you pay for it? (7) Can I schedule a 20-minute call with you?',
          'Find 20 ICPs on LinkedIn: Use "People" search with title + company size + location filters.',
          'Send this exact DM: "Hi [Name], I\'m researching how [job title]s handle [problem]. Not selling anything — validating a problem before I build a solution. Would you fill out a 2-min form? [link]"',
          'Goal: 10 form responses within 48 hours. If under 5, your targeting is wrong.',
        ],
      },
      {
        days: 'Day 5–6',
        title: 'Competition Analysis',
        tasks: [
          'For each competitor: document pricing, top 3 features, top 3 G2 complaints, founding year, funding status, and reviews mentioning India.',
          'Create a "Gap Map": list every complaint about every competitor. These gaps are your initial features.',
          'Find your differentiation angle: lower price, simpler UX, India-specific features, or specific workflow fit.',
          'Define your one-line positioning: "Unlike [Competitor], [Your Product] is built for [specific ICP] who need [specific differentiation]."',
        ],
      },
      {
        days: 'Day 7',
        title: 'Go/No-Go Decision',
        tasks: [
          'Score ≥ 36/50 on Problem Scoring? → Continue',
          '≥ 8 validation responses confirming the problem? → Continue',
          'At least one clear gap in existing solutions? → Continue',
          'Can you reach your ICP via channels you have access to (LinkedIn, Reddit, WhatsApp groups)? → Continue',
          'If all 4 are YES: Build sprint starts tomorrow. If any NO: Return to Day 1 with a new problem.',
        ],
      },
    ],
  },
  {
    phase: 'PHASE 2',
    period: 'Days 8–21',
    title: 'Idea to MVP',
    color: 'border-[#8B5CF6]/40',
    bgColor: 'bg-[#8B5CF6]/5',
    steps: [
      {
        days: 'Week 2 (Days 8–14)',
        title: 'Architecture & Design',
        tasks: [
          'Define exact MVP features: Maximum 3 features for version 1. Write feature list and mark EVERYTHING ELSE as "v2 or later."',
          'Create wireframes in Excalidraw (free): Dashboard view, core action flow, and settings page. Nothing more.',
          'Stack decision: Landing page (Next.js + Vercel), App (Next.js + Supabase Auth + Supabase DB), AI features (Groq free tier), Email (Resend free).',
          'GitHub repo setup: Initialize Next.js project, configure Tailwind, connect to Supabase, set up deployment on Vercel. This takes 2 hours.',
          'Day 14 checkpoint: Repository is live on Vercel. Basic auth works. Database schema is defined. UI shell exists.',
        ],
      },
      {
        days: 'Week 3 (Days 15–21)',
        title: 'Build Sprint',
        tasks: [
          'Day 15: Core feature 1 — data model + API routes + basic UI. Focus on functionality, not polish.',
          'Day 16–17: Core feature 2 — if it integrates with an external API, get the integration working first.',
          'Day 18–19: Core feature 3 + internal linking between all features.',
          'Day 20: UI polish pass. Responsive design check. Error states. Loading states. Empty states.',
          'Day 21: Deploy to production on Vercel. Test every flow with a fresh account. Fix every broken interaction.',
          'Output: A working product deployed at a real URL. Not perfect. Working.',
        ],
      },
    ],
  },
  {
    phase: 'PHASE 3',
    period: 'Days 22–35',
    title: 'MVP to First 10 Users',
    color: 'border-[#06B6D4]/40',
    bgColor: 'bg-[#06B6D4]/5',
    steps: [
      {
        days: 'Days 22–28',
        title: 'User Acquisition Sprint',
        tasks: [
          'Warm network first: Message everyone you know who might be the ICP or know one. This message: "I just launched [product]. It solves [problem]. Are you the right person to try it? Or do you know 2–3 people who are?"',
          'Post in 3 relevant online communities (Reddit, Facebook Groups, LinkedIn Groups) with this format: Hook → Problem description → Solution → Demo link → CTA to try.',
          'Cold outreach to your 20 validated ICPs from Day 3: "I built the tool I mentioned in my survey. Would you be one of our first 10 beta users? It\'s free, and I\'ll personally set it up for you."',
          'ProductHunt Ship Page: Set up a "coming soon" page. It adds social proof and drives organic discovery.',
        ],
      },
      {
        days: 'Days 29–35',
        title: 'Onboarding & Feedback',
        tasks: [
          'Personally onboard each of the first 10 users via a Loom video walkthrough or live call.',
          'Set up weekly check-in with each user: "What\'s working? What\'s confusing? What would make you tell a friend about this?"',
          'Track one core metric: Did they use the product more than once? If not, why not? This tells you if retention is broken.',
          'Week 5 decision: Are users actively using the product? → Move to monetization prep. Are users confused or inactive? → Rebuild the onboarding flow.',
        ],
      },
    ],
  },
  {
    phase: 'PHASE 4',
    period: 'Days 36–60',
    title: 'First Users to Paying Users',
    color: 'border-[#10B981]/40',
    bgColor: 'bg-[#10B981]/5',
    steps: [
      {
        days: 'Days 36–45',
        title: 'Monetization Introduction',
        tasks: [
          'Introduce payment at the moment of highest value — right after a user experiences the core value of the product for the first time.',
          'Pricing for first customers: Anchor high. Show ₹5,000/month, offer ₹1,999/month for "founding member" pricing. First 10 paying customers are price-insensitive relative to value if the product genuinely solves their problem.',
          'Set up payment: Gumroad (simplest for under-18), or Lemon Squeezy (best for SaaS subscriptions). See Payment Systems module for full guide.',
          'Conversion email sequence: Day 1 of free trial: "Welcome — here\'s how to get value in 10 minutes." Day 5: "Quick check-in: is [feature X] working for you?" Day 10: "Your trial ends in 4 days. Here\'s what you can do to continue..."',
        ],
      },
      {
        days: 'Days 46–60',
        title: 'Convert Free to Paid',
        tasks: [
          'Personal outreach to every active free user: "I\'m starting to charge for [product]. Since you\'ve been using it since the beginning, I want to offer you founding member pricing: [X]% off forever if you commit now."',
          'Track conversion rate: 20% free-to-paid is excellent early on. 10% is acceptable. Under 5% means the pricing is wrong or the value isn\'t clear enough.',
          'Remove one key feature from the free plan. Create natural upgrade pressure by keeping the feature available in paid.',
          'Goal by Day 60: 3–5 paying users at ₹1,000–₹5,000/month. This is ₹3,000–₹25,000 MRR. Small, but real.',
        ],
      },
    ],
  },
  {
    phase: 'PHASE 5',
    period: 'Days 61–90',
    title: 'Recurring Revenue to ₹10K MRR',
    color: 'border-[#F59E0B]/40',
    bgColor: 'bg-[#F59E0B]/5',
    steps: [
      {
        days: 'Month 3',
        title: 'MRR Building Strategy',
        tasks: [
          'Target: 10 paying customers at ₹1,000/month = ₹10,000 MRR. This requires adding 5–7 new paying users from your current base of 3–5.',
          'Referral system: Email every paying user: "If you refer someone who becomes a paying user, you get 2 months free." Implement this in Gumroad or Lemon Squeezy.',
          'SEO content: Write one blog post per week targeting a keyword your ICP searches. "How to [solve their problem] in India" posts rank well with minimal backlinks.',
          'Retention: Reduce churn by doing monthly "success calls" with every paying customer. Understand their actual usage. Add features that make churning feel like a loss.',
          'Expansion revenue: If a user gets strong value, offer them additional seats, usage upgrades, or add-on modules. Expansion MRR is the most profitable revenue you can generate.',
        ],
      },
    ],
  },
];

const preLaunchChecklist: ChecklistItem[] = [
  { id: 'pl1', text: 'Core feature works end-to-end without errors', category: 'Product', priority: 'high' },
  { id: 'pl2', text: 'User authentication works (signup, login, password reset)', category: 'Product', priority: 'high' },
  { id: 'pl3', text: 'Mobile responsive design tested on real device', category: 'Product', priority: 'high' },
  { id: 'pl4', text: 'Error states handled (what happens when API fails?)', category: 'Product', priority: 'medium' },
  { id: 'pl5', text: 'Loading states for all async operations', category: 'Product', priority: 'medium' },
  { id: 'pl6', text: 'Landing page clearly explains the value proposition', category: 'Marketing', priority: 'high' },
  { id: 'pl7', text: 'Waitlist or signup form works and sends confirmation email', category: 'Marketing', priority: 'high' },
  { id: 'pl8', text: 'Analytics installed (PostHog or Mixpanel free tier)', category: 'Analytics', priority: 'high' },
  { id: 'pl9', text: 'Uptime monitoring configured (UptimeRobot free)', category: 'Ops', priority: 'medium' },
  { id: 'pl10', text: 'Custom domain connected and HTTPS working', category: 'Ops', priority: 'medium' },
];

const launchDayChecklist: ChecklistItem[] = [
  { id: 'ld1', text: 'Post on Twitter/X with demo GIF or video', category: 'Launch', priority: 'high' },
  { id: 'ld2', text: 'Post in 3 relevant Reddit communities', category: 'Launch', priority: 'high' },
  { id: 'ld3', text: 'Message your entire warm network personally', category: 'Launch', priority: 'high' },
  { id: 'ld4', text: 'Post in relevant LinkedIn groups', category: 'Launch', priority: 'medium' },
  { id: 'ld5', text: 'Submit to Product Hunt for visibility', category: 'Launch', priority: 'medium' },
  { id: 'ld6', text: 'Monitor analytics every hour for first 6 hours', category: 'Monitoring', priority: 'high' },
  { id: 'ld7', text: 'Respond to every comment, DM, and feedback within 1 hour', category: 'Engagement', priority: 'high' },
  { id: 'ld8', text: 'Document every bug reported — fix critical ones same day', category: 'Engineering', priority: 'high' },
];

export default function ExecutionRoadmapPage() {
  return (
    <PageWrapper
      title="Execution Roadmap"
      description="Day-by-day from idea to first ₹10K MRR. No vague advice — exact tasks, exact timelines, exact targets."
      icon="🗺️"
      badge="Execution Module"
      timeToRead={20}
      lastUpdated="Jan 2026"
    >
      <CalloutBox variant="warning" title="How to Use This Roadmap">
        This roadmap assumes you're working 4–6 focused hours per day while in school or college. Each
        phase has a go/no-go checkpoint. If you don't meet the checkpoint criteria, don't advance — return
        to the previous phase and fix what's broken. Skipping validation because you're excited to build
        is the most common cause of building products nobody uses.
      </CalloutBox>

      <div className="space-y-6 mt-8">
        {phases.map((phase) => (
          <div key={phase.phase} className={`border ${phase.color} rounded-2xl overflow-hidden`}>
            <div className={`px-5 py-4 ${phase.bgColor} border-b ${phase.color}`}>
              <div className="flex items-center gap-3">
                <Badge variant="blue">{phase.phase}</Badge>
                <Badge variant="gray">{phase.period}</Badge>
                <h2 className="font-bold text-white">{phase.title}</h2>
              </div>
            </div>
            <div className="divide-y divide-[#1E1E3F]">
              {phase.steps.map((step) => (
                <div key={step.days} className="px-5 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#4F7EFF] bg-[#4F7EFF]/10 px-2 py-0.5 rounded">{step.days}</span>
                    <p className="font-semibold text-white text-sm">{step.title}</p>
                  </div>
                  <ul className="space-y-2">
                    {step.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                        <span className="text-[#4F7EFF] flex-shrink-0 mt-0.5">→</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Checklists */}
      <section className="mt-10">
        <SectionHeader title="Launch Checklists" badge="Execution Tools" description="Interactive checklists to guide each stage of launch." />
        <div className="space-y-6">
          <ChecklistSystem items={preLaunchChecklist} title="Pre-Launch Checklist" />
          <ChecklistSystem items={launchDayChecklist} title="Launch Day Checklist" />
        </div>
      </section>

      <CalloutBox variant="success" title="The One Metric That Matters at Each Stage" className="mt-8">
        <ul className="space-y-1.5 mt-2">
          <li>→ <strong className="text-white">Days 1–7:</strong> Problem score ≥ 36 + ≥ 8 validation responses</li>
          <li>→ <strong className="text-white">Days 8–21:</strong> Working product deployed at a real URL</li>
          <li>→ <strong className="text-white">Days 22–35:</strong> ≥ 10 real users who have used the product more than once</li>
          <li>→ <strong className="text-white">Days 36–60:</strong> ≥ 3 paying users. Even ₹1 from a real stranger validates more than 1,000 free signups.</li>
          <li>→ <strong className="text-white">Days 61–90:</strong> ≥ ₹10,000 MRR. 10 users paying ₹1,000/month is the first real business milestone.</li>
        </ul>
      </CalloutBox>
    </PageWrapper>
  );
}
