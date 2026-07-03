import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';

export const metadata: Metadata = {
  title: 'Five Perspectives | Founder OS',
  description: 'Five distinct advisor personas analyze your situation as a young Indian technical founder. 800 words each, fully written.',
  openGraph: { title: 'Five Perspectives | Founder OS', description: 'Five advisor personas for ambitious Indian builders aged 16–20.', type: 'website' },
};

const perspectives = [
  {
    icon: '🔧',
    persona: 'THE SENIOR SOFTWARE ENGINEER',
    subtitle: '15 Years of Engineering Real Products',
    color: 'border-[#06B6D4]/30',
    accentColor: 'text-[#06B6D4]',
    bgColor: 'bg-[#06B6D4]/5',
    content: [
      "Every founder I've worked with who failed on the technical side made the same mistake: they built a beautiful architecture for 1 million users when they had 12. Your first version needs to work, not be elegant. Elegance is a luxury you earn by surviving long enough to refactor.",
      "Here's what I want you to hear as someone who has reviewed thousands of codebases: the technical decisions that matter in your first year are almost never the ones you think matter. You're worried about microservices vs monolith, SQL vs NoSQL, Kubernetes vs serverless. These are not your problems. Your problem is: does this product work reliably for 50 users? That's all.",
      "The first technical decision that actually matters is your database schema. Get that wrong and you'll spend months migrating data instead of building features. Think hard about your entities before you write your first line of code. User → Subscription → Usage. Map these relationships correctly and you can build almost any SaaS on top of them.",
      "The second technical decision that matters is your authentication layer. Don't build your own. Use Supabase Auth, NextAuth, or Clerk. I've watched engineers spend 3 weeks building auth systems when there are production-tested solutions available for free. This is time that could have gone into features that make users pay.",
      "Third: error handling. Nothing kills early-stage products faster than silent failures. Set up Sentry on day one (free tier is generous). Every uncaught exception should alert you immediately. You should know about every user-facing error before the user reports it. This is the mark of a professional engineer, not an amateur.",
      "What I want you to avoid: over-engineering a problem that doesn't exist yet. The temptation with technical founders is to solve infrastructure problems with code before they have business problems to solve at all. I've seen founders spend 4 weeks building a 'highly scalable' notification system for an app with 8 users. Build for today's scale. Refactor when you have tomorrow's problems.",
      "The technical advice I'd give my younger self: (1) Start with Next.js + Supabase + Vercel. The fastest stack to production that exists right now. (2) TypeScript strict mode from day one. You'll thank yourself in month 4. (3) One component does one thing. No giant 600-line files. (4) Write tests for your payment logic and auth logic only. Everything else can be tested manually in early stage. (5) Commit every day. Not to look productive — so you can recover from mistakes in 30 seconds.",
      "On the question of technical debt: it's inevitable and it's fine. Every codebase I've ever worked in has technical debt. The question is: is it controlled debt or uncontrolled debt? Controlled means you know where the shortcuts are and you have a plan to fix them. Uncontrolled means you've lost the map and every change might break something else. Keep a technical debt doc in Notion. Add to it every time you make a shortcut. Review it monthly. This is engineering maturity.",
    ],
    keyAdvice: [
      'Build for today\'s scale, not imaginary future scale',
      'Use existing auth solutions — never build your own',
      'Set up error monitoring (Sentry) on day one',
      'TypeScript strict mode from the start saves months',
    ],
    warnings: [
      'Never spend 3+ weeks on infrastructure with zero users',
      'Microservices are for companies with 50+ engineers',
      'Beautiful code that ships slowly kills products',
    ],
  },
  {
    icon: '🚀',
    persona: 'THE YOUNG TECHNICAL FOUNDER',
    subtitle: 'Just Went Through Exactly What You\'re About To Go Through',
    color: 'border-[#4F7EFF]/30',
    accentColor: 'text-[#4F7EFF]',
    bgColor: 'bg-[#4F7EFF]/5',
    content: [
      "Nobody told me how lonely building alone actually is. You'll have days where your product works perfectly and has zero users. Those days are harder than the days when everything is broken. Push through anyway.",
      "When I was 17 and building my first product, I was terrified that nobody would take me seriously. I was right — they didn't, at first. But the thing that nobody tells you is: nobody takes any first-time founder seriously until they have users and revenue. Age is actually the least of your problems. Show traction. Age stops mattering immediately.",
      "The emotional reality of your first year is a cycle that nobody prepares you for: excitement when you launch → anxiety when no users come → brief joy when first users appear → confusion when they churn → despair → breakthrough insight → repeat. Understanding this cycle in advance doesn't eliminate it, but it helps you not interpret normal founder emotions as signals that you've failed. You haven't failed. You're just in the dip.",
      "How I got my first 10 users: I found a Facebook group for [my ICP] with 3,000 members. I spent 2 weeks answering questions in the group with genuinely useful answers. I never mentioned my product. After 2 weeks, I posted a 'Show your tool' thread reply mentioning what I'd built. 6 of my first 10 users came from that single reply. The lesson: earn attention before asking for it.",
      "On school vs startup: you will hear the advice to drop out. Ignore it. You're 16–18. You have more learning capacity right now than you'll have at any other point in your life. School teaches you to learn systematically — that's a skill that compounds. Use school as a platform: your school email gives you student discounts, your classmates are potential beta users, your teachers can be mentors if you approach them correctly.",
      "How to explain your work to parents: don't lead with 'startup'. Lead with 'I built a software product and real people are using it.' Show them a user testimonial. Show them the analytics dashboard with real numbers. Parents respond to evidence. When you show a parent that 50 people they've never met are using software you built, they shift from skeptical to proud faster than you'd expect.",
      "The mistake I wish I hadn't made: I didn't talk to users enough before building. I spent 3 weeks building a feature that I was certain users wanted. Then I showed it to my 5 beta users and none of them used it. I had assumed what they needed based on what I thought was a gap. They needed something completely different. The week I spent validating in conversations would have saved 3 weeks of building.",
      "Your age is your marketing. I know that sounds counterintuitive but hear me out: your story is rare and memorable. '17-year-old built X for Y market' is a pattern that people share. It opens doors. Journalists write about it. Investors remember it. In a world of identical SaaS products built by 28-year-old former consultants, being 17 and building something real is genuinely differentiated. Use it intentionally.",
    ],
    keyAdvice: [
      'Loneliness in building is normal — push through it',
      'Earn attention in communities before promoting your product',
      'Talk to users before building features — always',
      'Your age is an asset, not a liability — own it',
    ],
    warnings: [
      'Dropping out at 16–17 is rarely the right move',
      'Don\'t interpret normal founder difficulty as personal failure',
      'Never assume what users want — always ask',
    ],
  },
  {
    icon: '🕸️',
    persona: 'THE HYPER-INTELLIGENT SYSTEMS THINKER',
    subtitle: 'Everything Is a System. Find the Leverage Point.',
    color: 'border-[#8B5CF6]/30',
    accentColor: 'text-[#8B5CF6]',
    bgColor: 'bg-[#8B5CF6]/5',
    content: [
      "Most founders solve symptoms. The best founders solve root causes. The difference between a $1M business and a $100M business is almost always whether the founder understood the system they were entering — or just saw the surface-level problem.",
      "Consider any market you're thinking of entering. It's not just a 'market' — it's a system of actors with interests, information flows, economic incentives, and feedback loops. The way to win in any market is to understand this system more deeply than anyone else and find the one intervention point that the entire system can't function without.",
      "Network effects are the most powerful force in technology markets, and most founders build products that have none. Ask yourself: does my product become more valuable as more people use it? If the answer is no, you're building a commodity. If yes, you've found the most defensible moat that exists in software. The companies that matter — Google, WhatsApp, Stripe, GitHub — all have some form of network effect built into their core value proposition.",
      "The compounding mathematics of SaaS businesses are almost magical if you protect them correctly. A business with 2% monthly churn keeps 78% of its customers after one year. A business with 5% monthly churn keeps only 54%. The difference between these two scenarios, compounded over 5 years with the same acquisition velocity, is not a 30% difference in revenue — it's a 3x difference. One number determines your destiny more than any other: monthly churn. Optimize this above everything else.",
      "Why being early matters more than being better: The technology industry consistently rewards market timing over product quality. The reason Facebook beat MySpace was not that Facebook was a better product in 2004 — it was that Facebook entered the college market (a precise target) at the moment that cohort was ready to adopt social networks. In India's SaaS market in 2026, you have the advantage of being early. The market is ready. The infrastructure is here. The paying customers exist. Being 18 months early in a ready market is worth more than being 20% better in a mature market.",
      "The highest-leverage thing you can do as a young founder: pick a market that will be 10x larger in 5 years than it is today. This sounds obvious but most founders pick markets that are large today rather than markets that will be large. India's SMB SaaS market will be 5–10x larger in 2031 than it is in 2026 based on digital adoption curves. A founder who enters this market in 2026 with a solid product will have 5 years of compounding market tailwinds behind them.",
      "How to think about your startup as a system: your product is not just a tool — it's an intervention in a larger system. Supabase is not just a database — it's an intervention in the system of developer infrastructure that removes the need for a DevOps hire. That's a much larger opportunity than 'better database dashboard.' Think about what system you're intervening in, what the current equilibrium of that system is, and why your intervention disrupts that equilibrium permanently.",
      "The single most important strategic question for your product: what would have to be true for every company in your target market to use your product? Not some companies. Not the early adopters. Every company. What regulatory change, what market event, what competitive shift would make your product the default choice? Build toward that inevitability now, before anyone else sees it coming.",
    ],
    keyAdvice: [
      'Solve root causes, not symptoms — map the full system first',
      'Chase network effects above all other product properties',
      'Monthly churn is the single number that determines your destiny',
      'Enter markets that will be 10x larger in 5 years, not markets that are large today',
    ],
    warnings: [
      'Building without understanding the system you\'re entering is guessing',
      'Products without network effects or switching costs become commodities',
      'Optimizing acquisition while ignoring churn is a treadmill',
    ],
  },
  {
    icon: '🎯',
    persona: 'THE ELITE PROBLEM SOLVER & LONG-TERM THINKER',
    subtitle: 'Identify Problems Worth a Decade of Your Life',
    color: 'border-[#F59E0B]/30',
    accentColor: 'text-[#F59E0B]',
    bgColor: 'bg-[#F59E0B]/5',
    content: [
      "The most important question any founder must answer is not 'can I build this?' — it's 'is this worth building?' A technically competent person can build almost anything. The rare skill is identifying which of the infinite things worth building are worth the specific investment of your finite time on earth.",
      "There is a massive difference between building a business and building an institution. Businesses exist to generate profit. Institutions exist to solve problems that matter at a civilizational scale and survive long enough to actually solve them. The founders who matter to history — and this is worth thinking about even at 17 — are the ones who identified institution-scale problems and built with sufficient ambition to match them.",
      "India's economy in 2030 will look dramatically different from 2026. Enterprise software adoption will be 10x higher. Healthcare digitization will have crossed the tipping point. Education technology will have consolidated from thousands of products to dozens of dominant platforms. Financial infrastructure will be completely UPI-native. The question is: which of these shifts are you positioned to benefit from, and are you building toward that position now?",
      "How to develop the ability to see 5–10 years ahead: read history. Not startup history — economic history, technology adoption curves, regulatory history. The pattern of how industries transform is surprisingly consistent across different markets and time periods. The US healthcare system computerized in a predictable sequence. Indian healthcare will follow a similar sequence, lagged by 10–15 years and adapted to Indian constraints. If you understand the US pattern, you can position yourself for the Indian version.",
      "The difference between building a feature and building a platform is the single most important architectural decision a founder makes in years 1–3. Features are captured by incumbent platforms. Platforms capture features. If you're building a feature on top of someone else's platform, you are always one API change away from losing your business. If you're building the platform, every feature someone else builds makes you more valuable. Ask yourself every quarter: are we building features or building infrastructure?",
      "The most important problems you could work on as an Indian technical founder in the next decade: (1) Making government services accessible and usable — the opportunity is enormous and the competition is weak. (2) Digitizing unorganized labor markets — 80% of India's workforce is informal, largely unserved by software. (3) Affordable enterprise software for Indian pricing expectations — Salesforce pricing does not work for Indian companies, but Indian enterprise needs are real. (4) Healthcare infrastructure at scale — appointment management, record digitization, diagnostics connectivity. (5) Financial services for the newly banked — 800M Indians are now in the financial system; very few have software serving their specific needs.",
      "The compounding value of reputation: the reputation you build between 16 and 22 will determine the opportunities available to you from 22 to 35. Building publicly, shipping real products, getting real customers, speaking honestly about your journey — these actions compound into a reputation that opens doors that money cannot open. The most valuable thing you can do alongside building your product is building your name as someone who executes, ships, and delivers real value.",
      "My specific advice for the 2026–2030 window: India's B2B SaaS market is at the perfect moment for vertical SaaS. Build deep for one specific industry rather than broad across many. A system that manages 200+ coaching institutes better than any existing option is worth more than a generic SaaS that sort-of serves 10 industries. Vertical depth creates brand, switching costs, and network effects within communities (one coaching institute owner tells another). Own a vertical before expanding horizontally.",
    ],
    keyAdvice: [
      'Ask: is this problem worth 5–10 years of my life?',
      'Build toward India\'s 2030 economy, not 2026',
      'Vertical SaaS beats horizontal in the early stages every time',
      'Reputation compounds — build it publicly from day one',
    ],
    warnings: [
      'Building a feature on someone else\'s platform makes you a dependency, not a company',
      'Short-term thinking optimizes for metrics that don\'t matter in 5 years',
      'Don\'t ignore market timing — being 3 years early is as bad as being 3 years late',
    ],
  },
  {
    icon: '🤖',
    persona: 'DIRECT STRATEGIC ADVICE FROM THE AI',
    subtitle: 'An Honest Assessment of Your Position and Your Options',
    color: 'border-[#10B981]/30',
    accentColor: 'text-[#10B981]',
    bgColor: 'bg-[#10B981]/5',
    content: [
      "I'm going to speak to you directly, without the framing of a 'persona'. You're a technically capable person between 16 and 20, in India, reading a document designed to help you build a startup. Here's my honest assessment of your position.",
      "Your specific advantages are more significant than you probably realize. First: you can build. This is not common. The ability to take an idea and turn it into working software is a skill that most adults — including most people who want to start companies — do not have. You're starting from a dramatically better position than the average aspiring founder. Second: you have time. Building at 17 means your mistakes cost very little. Every failure is a lesson that makes you stronger for the next attempt, and you have 10+ years of attempts available to you before most founders even start. Third: you're in India in 2026, which is the most interesting country to be building software in right now. Market is large, competition is developing, and the willingness to pay is increasing.",
      "Your specific risks, honestly stated. First: the legal and payment infrastructure constraints are real. Don't underestimate them. The Gumroad/Lemon Squeezy path works, but it's a workaround, not a solution. Build using workarounds while planning carefully for the transition to proper infrastructure at 18. Second: isolation is a genuine risk. Building alone without a community of peers who are doing the same thing is psychologically difficult in a way that's hard to predict in advance. Find communities — IndieHackers, Twitter builder communities, local startup groups — and participate actively. Third: the temptation to build without validating is especially strong for technical people. Code is comfortable. User research conversations are uncomfortable. Do the uncomfortable thing first, every single time.",
      "How I would think about this if I were in your position: I would pick one industry that I can actually study — ideally one where I have access to real practitioners (through family, school connections, or local community). I would spend 4 weeks studying that industry using the Problem Discovery framework in this document before writing a single line of code. I would find 10 people in that industry to have real conversations with before building anything. Then I would build the absolute minimum version of a solution to the best problem I found — in 2 weeks maximum — and put it in front of those same 10 people.",
      "On using AI as a competitive advantage: this is the most important tactical opportunity available to you right now. Every AI tool available today was not available to founders 5 years ago. Groq gives you Llama 3.1 70B inference for free. Cursor gives you an AI pair programmer. Claude gives you a research and writing assistant. Ollama gives you local models. The total cost: $0. The leverage: enormous. A single founder with these tools can produce the output of a 2–3 person team from 2020. Use them aggressively and unapologetically.",
      "What I observe in Indian technical founders who succeed: they have extremely high pain tolerance for rejection. Early-stage founders hear 'no' far more than 'yes'. The ones who succeed are the ones who interpret rejection as information rather than judgment. Every 'no' tells you something: wrong ICP, wrong problem framing, wrong price point, wrong distribution channel. Collect 'no's and treat them like data. The founder who has collected 200 'no's has a 200-data-point map of what doesn't work — which is exactly what you need to find what does.",
      "Two or three things that matter most in year one: (1) Talk to users more than you think you need to. Then talk to them more. You cannot over-invest in understanding your customer. (2) Ship something real to real people as fast as possible. The speed of learning from a live product in front of real users is 10x the speed of learning from any other source. (3) Find one person who has done what you're trying to do and build a real relationship with them. Not a mentor in the abstract sense — a specific person who has navigated these exact challenges and can give you specific, informed guidance. This is worth more than any document, including this one.",
      "The future of building with AI: the competitive landscape for software products is changing faster than at any point in the last 20 years. Products that would have taken 6 months to build in 2022 take 6 weeks now. Features that required senior engineers can be implemented by a competent developer with AI assistance. This is simultaneously threatening (incumbents can iterate faster) and enabling (you can build things that were previously out of reach). The founders who thrive in this environment are the ones who learn to use AI tools deeply and build products that are themselves AI-enhanced. Build with AI inside the product from day one, not as an afterthought.",
    ],
    keyAdvice: [
      'Your ability to build software is your most underappreciated advantage',
      'Treat every "no" as a 1-data-point market map — collect them eagerly',
      'Use AI tools aggressively as a force multiplier — this advantage is exclusive to your generation',
      'Find one real relationship with someone who has done what you\'re trying to do',
    ],
    warnings: [
      'Don\'t let legal/payment constraints become a reason to delay building entirely',
      'Isolation is a real risk — find a community and engage with it consistently',
      'The temptation to build without validating is the single most common failure mode',
    ],
  },
];

export default function FivePerspectivesPage() {
  return (
    <PageWrapper
      title="Five Perspectives"
      description="Five distinct advisor personas. Each writes directly to you as an ambitious Indian technical founder aged 16–20."
      icon="👁️"
      badge="Perspectives Module"
      timeToRead={30}
      lastUpdated="Jan 2026"
    >
      <CalloutBox variant="info" title="How to Read This Section">
        Each perspective is fully written in the voice of a distinct advisor. They don't always agree.
        That's intentional. The truth about building a startup is not a single point of view — it's
        a synthesis of multiple informed perspectives. Read each one. Disagree where it doesn't fit
        your situation. Take what's useful.
      </CalloutBox>

      <div className="space-y-8 mt-8">
        {perspectives.map((p) => (
          <div key={p.persona} className={`border ${p.color} ${p.bgColor} rounded-2xl overflow-hidden`}>
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#1E1E3F]">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h2 className={`font-black text-base ${p.accentColor} tracking-wide uppercase`}>{p.persona}</h2>
                  <p className="text-sm text-[#9CA3AF] mt-0.5">{p.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-4">
              {p.content.map((para, i) => (
                <p key={i} className={`text-sm leading-relaxed ${i === 0 ? 'text-white font-medium italic' : 'text-[#9CA3AF]'}`}>
                  {i === 0 ? `"${para}"` : para}
                </p>
              ))}
            </div>

            {/* Key Advice + Warnings */}
            <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0F0F1A] border border-[#10B981]/20 rounded-xl p-4">
                <p className="text-[10px] font-semibold text-[#10B981] uppercase tracking-widest mb-2">Key Advice</p>
                <ul className="space-y-1.5">
                  {p.keyAdvice.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                      <span className="text-[#10B981] flex-shrink-0">✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0F0F1A] border border-[#EF4444]/20 rounded-xl p-4">
                <p className="text-[10px] font-semibold text-[#EF4444] uppercase tracking-widest mb-2">Warnings</p>
                <ul className="space-y-1.5">
                  {p.warnings.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                      <span className="text-[#EF4444] flex-shrink-0">⚠</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
