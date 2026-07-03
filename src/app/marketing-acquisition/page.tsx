import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Marketing & Acquisition | Founder OS',
  description: 'Get your first 10, then 100 users. Cold outreach templates, LinkedIn playbook, Reddit strategy, and community distribution.',
  openGraph: { title: 'Marketing & Acquisition | Founder OS', description: 'Complete acquisition playbook for technical founders.', type: 'website' },
};

const coldEmailTemplates = [
  {
    scenario: 'SaaS for IT Managers',
    subject: 'Microsoft 365 license waste at [Company]',
    body: `Hi [Name],

Your company has ~[X] M365 licenses based on your LinkedIn headcount. Industry average is 28% unused — that's ~₹[Y] in annual waste that appears nowhere on any dashboard.

I built a tool that connects to your Microsoft Graph, surfaces inactive licenses in real-time, and generates an executive-ready reclamation report in 90 seconds.

Three IT managers at similar companies ran it last week and flagged 40+ unused seats each.

Would you be open to a 15-minute call to see if there's waste worth reclaiming at [Company]?`,
  },
  {
    scenario: 'Automation Tool for SMB Owners',
    subject: 'WhatsApp customers — how you\'re managing them',
    body: `Hi [Name],

Most [industry] businesses I talk to are managing 100–300 customer conversations on a personal WhatsApp account. No search history, no tags, no reminders.

I built a lightweight CRM layer on top of WhatsApp Business API — tag customers, set follow-up reminders, send segmented broadcasts, track conversation history.

Setup takes 20 minutes. First month is free.

Would it make sense to show you how [specific business type] owners are using it?`,
  },
  {
    scenario: 'AI Tool for HR Teams',
    subject: 'Resume screening for [Company]\'s engineering roles',
    body: `Hi [Name],

Reviewing 200+ engineering applications per role, and manually screening resumes, probably takes your team 2–3 days per hiring cycle.

I built an AI screener specifically for Indian technical roles — it extracts your JD requirements, scores each resume against them, and gives you a ranked shortlist with reasoning in about 4 minutes.

I can run a free batch on your most recent hiring round so you can see the output before committing to anything.

Interested?`,
  },
];

const icpExamples = [
  {
    name: 'IT Manager at Indian Mid-Size Company',
    titles: 'IT Manager, Systems Administrator, IT Head, VP IT',
    companySize: '200–2,000 employees',
    frustration: 'Software license waste, shadow IT, compliance gaps, justifying IT spend to the CFO',
    onlinePresence: 'r/sysadmin_india, Microsoft Tech Community, LinkedIn IT groups',
    budget: '₹5,000–₹25,000/month for tools that reduce cost or risk',
    champion: 'They champion tools that help them look good to their CFO. Frame savings in money, not time.',
  },
  {
    name: 'Founder of Indian D2C Brand',
    titles: 'Founder, Co-founder, CEO at D2C brands',
    companySize: '5–50 people, ₹10L–₹10Cr revenue',
    frustration: 'Logistics chaos, return management, cash flow visibility, CAC increasing',
    onlinePresence: 'Shark Tank India WhatsApp groups, eCommerce India subreddit, D2C India communities',
    budget: '₹2,000–₹10,000/month for operations tools',
    champion: 'They champion tools that reduce founder stress and operational load.',
  },
  {
    name: 'Head of Operations at Coaching Institute',
    titles: 'Operations Manager, Admin Head, Center Director',
    companySize: 'Institutes with 200–2,000 students',
    frustration: 'Manual student tracking, fee collection chaos, parent complaints about no visibility',
    onlinePresence: 'Education entrepreneur WhatsApp groups, LinkedIn education groups',
    budget: '₹5,000–₹20,000/month for complete management systems',
    champion: 'They champion tools that eliminate daily fires and make them look organized to management.',
  },
];

export default function MarketingAcquisitionPage() {
  return (
    <PageWrapper
      title="Marketing & Acquisition"
      description="Distribution is more important than the product for first-time founders. Here's the complete system."
      icon="📣"
      badge="Growth Module"
      timeToRead={25}
      lastUpdated="Jan 2026"
    >
      {/* Distribution Mindset */}
      <section className="mb-10">
        <SectionHeader title="The Distribution Mindset" badge="Foundation" />
        <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
          <p>
            A technically perfect product with no distribution is a hobby project. A mediocre product with
            excellent distribution is a business. The founders who survive their first two years are almost
            never the best engineers — they're the founders who figured out how to find customers before
            their runway ran out.
          </p>
          <p>
            Distribution thinking means building every product decision around the question: "How does
            this feature make the product easier to find, share, and recommend?" The growth mechanism
            should be designed into the product at the architecture level, not bolted on after you launch.
          </p>
          <p>
            For technical founders: every free tier you offer is a distribution channel. Every integration
            you build is a distribution channel. Every API you expose is a distribution channel. Think about
            this from the first day. Your first 10 users should be people who found you, not people you chased.
            That's the signal that you have a real distribution channel.
          </p>
          <p>
            The Indian market in 2026 has one particularly powerful distribution channel that most global
            founders underestimate: <strong className="text-white">WhatsApp groups</strong>. When an Indian
            SMB founder shares your tool in a WhatsApp group of 100 other founders, and 15 of them sign up,
            you have word-of-mouth distribution in the most trusted social channel in the country. Design
            for this. Make your product easy to share and describe in one sentence.
          </p>
        </div>
      </section>

      {/* ICP Definition */}
      <section className="mb-10">
        <SectionHeader title="Finding Your Ideal Customer Profile (ICP)" badge="Foundation" description="You cannot market to everyone. Precision targeting is the only approach that works at zero budget." />
        <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5 mb-4">
          <p className="font-bold text-white text-sm mb-3">The 10 ICP Definition Questions</p>
          <div className="space-y-2">
            {[
              'What is their exact job title? Be specific — "IT Manager" not "someone in tech".',
              'What size company do they work at? Revenue, headcount, or both?',
              'What is their single biggest daily frustration related to your product area?',
              'Where do they spend time online? (Reddit, LinkedIn, Twitter, specific forums, WhatsApp groups)',
              'What language do they use to describe their problem? (Use their exact words in your marketing)',
              'What does professional success look like for them? What makes them look good to their boss?',
              'Who influences their buying decisions? (Their boss, a consultant, a peer in another company)',
              'What tools do they already use that your product integrates with or competes with?',
              'What is their realistic monthly budget for a software tool that solves this problem?',
              'What would make them actively champion your product to colleagues without being asked?',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#4F7EFF] font-mono text-xs w-5 flex-shrink-0 font-bold">{i + 1}.</span>
                <p className="text-xs text-[#9CA3AF]">{q}</p>
              </div>
            ))}
          </div>
        </div>

        <Accordion>
          {icpExamples.map((icp) => (
            <AccordionItem key={icp.name} title={icp.name}>
              <div className="space-y-3">
                {[
                  { label: 'Titles', value: icp.titles },
                  { label: 'Company Size', value: icp.companySize },
                  { label: 'Core Frustration', value: icp.frustration },
                  { label: 'Where They Hang Out Online', value: icp.onlinePresence },
                  { label: 'Budget', value: icp.budget },
                  { label: 'How to Make Them a Champion', value: icp.champion },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wide mb-0.5">{item.label}</p>
                    <p className="text-xs text-[#9CA3AF]">{item.value}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Cold Email */}
      <section className="mb-10">
        <SectionHeader title="The Cold Outreach System" badge="Acquisition" description="Cold outreach works when it's specific, short, and shows you understand the recipient's world." />

        <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5 mb-4">
          <p className="font-bold text-white text-sm mb-4">The Anatomy of a Perfect Cold Email</p>
          <div className="space-y-4">
            {[
              {
                part: 'Subject Line',
                rule: 'Max 6 words. Reference something specific about their company. Never "quick question" or "following up".',
                examples: [
                  'License waste at [Company]',
                  '[Company]\'s resume screening process',
                  'WhatsApp CRM for [business type]',
                ],
              },
              {
                part: 'Line 1 — The Hook',
                rule: 'One specific observation about them. Never "My name is X". Show you\'ve done research.',
                examples: [
                  '"Your company has ~[X] employees on LinkedIn — at industry average, that\'s 28% M365 license waste."',
                  '"You\'re hiring 3 engineers based on your open roles — that\'s probably 400+ applications to screen."',
                ],
              },
              {
                part: 'Line 2 — The Problem',
                rule: 'Name their exact pain in their language. Show that you understand their world.',
                examples: [
                  '"Most IT managers don\'t have visibility into which licenses haven\'t been touched in 90 days."',
                  '"Manually screening resumes for technical roles takes 2–3 days of someone\'s time."',
                ],
              },
              {
                part: 'Line 3 — The Offer',
                rule: 'What you built. One specific result or metric. Keep it one sentence.',
                examples: [
                  '"I built a dashboard that shows you exact waste in real-time."',
                  '"I built an AI screener that ranks 200 resumes in 4 minutes."',
                ],
              },
              {
                part: 'Line 4 — The CTA',
                rule: 'One low-friction request. Never ask for more than one thing.',
                examples: [
                  '"Would you be open to a 15-minute call?"',
                  '"Can I send you a 2-minute demo video?"',
                ],
              },
            ].map((section) => (
              <div key={section.part} className="border-b border-[#1E1E3F] pb-4 last:border-0 last:pb-0">
                <p className="text-[#4F7EFF] font-bold text-xs mb-1">{section.part}</p>
                <p className="text-xs text-[#9CA3AF] mb-2">{section.rule}</p>
                <div className="bg-[#141428] rounded-lg p-3 space-y-1">
                  {section.examples.map((ex, i) => (
                    <p key={i} className="text-xs text-[#06B6D4] font-mono">{ex}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Accordion>
          {coldEmailTemplates.map((template) => (
            <AccordionItem key={template.scenario} title={`Template: ${template.scenario}`} icon="📧">
              <div>
                <p className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide mb-1">Subject</p>
                <p className="text-xs text-[#4F7EFF] font-mono mb-3">{template.subject}</p>
                <p className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wide mb-1">Body</p>
                <pre className="text-xs text-[#9CA3AF] whitespace-pre-wrap font-sans leading-relaxed">{template.body}</pre>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* LinkedIn Strategy */}
      <section className="mb-10">
        <SectionHeader title="LinkedIn Strategy for Young Founders" badge="Social Distribution" description="How to position yourself at 16–20 as a credible builder and use LinkedIn for customer acquisition." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
            <p className="font-bold text-white text-sm mb-3">Profile Optimization</p>
            <div className="space-y-2">
              {[
                { field: 'Headline', formula: '"Building [Product] for [ICP] | [Specific result you deliver]"' },
                { field: 'About', formula: 'Open with the problem you solve, not your background. End with a CTA to try your product.' },
                { field: 'Featured', formula: 'Pin a demo video or a post about a result your product achieved.' },
                { field: 'Experience', formula: 'List your product as your current company. You are its founder. That\'s real experience.' },
              ].map((item) => (
                <div key={item.field}>
                  <p className="text-[10px] text-[#6B7280] font-semibold uppercase">{item.field}</p>
                  <p className="text-xs text-[#9CA3AF] font-mono">{item.formula}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
            <p className="font-bold text-white text-sm mb-3">DM Sequence</p>
            <div className="space-y-3">
              {[
                { step: 'Connection Request', msg: '"Hi [Name], I\'m building [product] for [ICP]. Your experience in [their role] would be invaluable — would love to connect."' },
                { step: 'Day 2 Follow-up', msg: '"Thanks for connecting! I\'m researching [pain point] in [their industry]. Any chance you\'d be open to a quick question or two?"' },
                { step: 'Day 5 Product Intro', msg: '"I built a solution for [pain point] you might find relevant. Would a 2-min demo be worth your time?"' },
              ].map((s) => (
                <div key={s.step}>
                  <p className="text-[10px] text-[#4F7EFF] font-semibold uppercase tracking-wide mb-0.5">{s.step}</p>
                  <p className="text-xs text-[#9CA3AF]">{s.msg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CalloutBox variant="tip" title="Your Age is an Advantage on LinkedIn">
          Being 17 and building software products is genuinely remarkable — not in a condescending way,
          but in a way that makes you memorable in a sea of identical sales pitches. Your message will
          get opened because "17-year-old built this" is a pattern-break. Use it. Be honest about your age.
          Lead with your product's value, and let your age be the reason people remember you.
        </CalloutBox>
      </section>

      {/* Reddit Strategy */}
      <section className="mb-10">
        <SectionHeader title="Reddit Acquisition Playbook" badge="Community Distribution" />
        <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5 mb-4">
          <p className="font-bold text-white text-sm mb-3">Top Subreddits by Product Type</p>
          <div className="space-y-3">
            {[
              { subreddit: 'r/sysadmin', size: '900K+', best: 'IT tools, security, Microsoft 365 products, automation' },
              { subreddit: 'r/india', size: '1.5M+', best: 'General Indian tech products, SMB tools, startup launches' },
              { subreddit: 'r/startups', size: '1M+', best: 'Founder tools, SaaS products, productivity apps' },
              { subreddit: 'r/entrepreneur', size: '1.4M+', best: 'Small business tools, marketing, operations' },
              { subreddit: 'r/SideProject', size: '250K+', best: 'Developer tools, indie products, show and tell launches' },
              { subreddit: 'r/IndiaInvestments', size: '500K+', best: 'Fintech tools for Indian users, investment products' },
            ].map((sub) => (
              <div key={sub.subreddit} className="flex items-start gap-4">
                <span className="text-[#4F7EFF] font-mono text-xs w-36 flex-shrink-0 font-bold">{sub.subreddit}</span>
                <div>
                  <Badge variant="gray" className="mr-2">{sub.size}</Badge>
                  <span className="text-xs text-[#9CA3AF]">{sub.best}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
          <p className="font-bold text-white text-sm mb-3">The Reddit Value-First Strategy</p>
          <div className="space-y-2">
            {[
              'Week 1: Join the subreddit and read. Learn the community\'s language, inside jokes, and what they upvote.',
              'Week 2–3: Answer questions in your area of expertise. Provide genuinely useful answers with no promotional content. Build karma.',
              'Week 4: Post your first "Show HN/Show Reddit" post. Format: [Problem they know] → [Solution you built] → [Demo link] → [CTA to try free].',
              'Ongoing: Continue answering questions. Every helpful answer is a soft advertisement for your expertise.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#8B5CF6] font-mono text-xs w-5 flex-shrink-0">{i + 1}.</span>
                <p className="text-xs text-[#9CA3AF]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First 10 Users */}
      <section className="mb-10">
        <SectionHeader title="The First 10 Users System" badge="Critical Milestone" description="Your first 10 users are your most valuable users. Find them with this exact system." />
        <div className="space-y-3">
          {[
            { step: '1', title: 'Warm Network Audit', desc: 'List every person you know: classmates, teachers, parents\' colleagues, relatives with businesses, people from previous projects. For each person: "Are they the ICP, or do they know 2–3 people who are?" Send a personal message to each relevant person: "I built [X] that solves [Y]. Do you know anyone dealing with this problem? It\'d mean a lot if you could connect me."' },
            { step: '2', title: 'Targeted Cold Outreach Sprint', desc: 'Find 50 people on LinkedIn matching your ICP. Send connection request → follow-up on Day 2 → product intro on Day 5. Goal: get 5 demo calls. From 5 calls, 2–3 will try the product. From those, 1–2 will become early users if the product works.' },
            { step: '3', title: 'Online Community Launch', desc: 'Post in 5 relevant communities simultaneously. Post format: (1) Problem hook — one sentence describing their pain. (2) Current solution — what they do today. (3) Your solution — what you built. (4) Demo link. (5) "Giving free access to first 10 users who DM me." The scarcity framing creates urgency without being manipulative.' },
            { step: '4', title: 'ProductHunt Ship Page', desc: 'Create a Ship page (coming soon) on Product Hunt. It\'s free and adds discovery from the PH community. Include a clear problem statement, one-line solution, and email capture. ProductHunt users are early adopters by definition — they\'re exactly who you want for beta feedback.' },
            { step: '5', title: 'Landing Page Conversion', desc: 'Your landing page should have: (1) Headline — what you do for who. (2) Problem — pain in their language. (3) Solution — your product in 3 sentences. (4) Social proof — even 2 beta users with names and quotes works. (5) CTA — "Try free" or "Join waitlist." (6) Counter — "X people already signed up" (once you have any).' },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-[#4F7EFF]/10 border border-[#4F7EFF]/30 flex items-center justify-center flex-shrink-0 text-[#4F7EFF] font-bold text-sm">
                {s.step}
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{s.title}</p>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CalloutBox variant="info" title="The Key Insight About Early Distribution">
        Your first 10 users don't come from a scalable channel. They come from personal effort: direct
        messages, community posts, and warm introductions. That's normal and correct. Your job in the
        first 60 days is to find your 10 users and learn from them — not to build a scalable distribution
        machine. Build that after you know exactly who your customer is and what they actually value.
      </CalloutBox>
    </PageWrapper>
  );
}
