import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import CalloutBox from '@/components/shared/CalloutBox';
import Badge from '@/components/ui/Badge';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Build with Free Tools | Founder OS',
  description: 'The complete $0 infrastructure stack. Build real products with free tiers of Supabase, Vercel, Next.js, Groq, and 20+ other tools.',
  openGraph: { title: 'Build with Free Tools | Founder OS', description: 'Build real SaaS products with $0 infrastructure.', type: 'website' },
};

const toolCategories = [
  {
    category: 'Frontend Development',
    icon: '🎨',
    tools: [
      { name: 'VS Code', free: '100% free forever', tip: 'Install: ESLint, Prettier, GitLens, Tailwind IntelliSense, ES7 React Snippets, Thunder Client, Error Lens, Auto Rename Tag, Path IntelliSense, GitHub Copilot.' },
      { name: 'Next.js', free: 'Open source, free', tip: 'App Router for layout sharing. Server Components for DB queries without API routes. Static generation means $0 hosting for marketing pages.' },
      { name: 'Tailwind CSS', free: 'Open source, free', tip: 'Build full UI with zero custom CSS. Dark mode via class strategy. Use shadcn/ui for component primitives built on Tailwind.' },
    ],
  },
  {
    category: 'Backend & Database',
    icon: '🗄️',
    tools: [
      { name: 'Supabase', free: '500MB DB, Auth, 1GB Storage, Edge Functions', tip: 'One Supabase project covers auth, database, storage, and realtime for your entire MVP. Stays free well past your first 1,000 users.' },
      { name: 'Neon', free: '512MB PostgreSQL, serverless branching', tip: 'Better cold start performance than Supabase for read-heavy apps. Use for data-intensive products.' },
      { name: 'Firebase', free: '1GB Firestore, 50K reads/day, 20K writes/day, Auth', tip: 'Best for real-time collaboration apps. Auth is excellent and free for scale you won\'t hit in year one.' },
      { name: 'Turso', free: '9GB SQLite, edge-deployed', tip: 'Read-heavy apps with global users. SQLite is faster than PostgreSQL for reads. 9GB is enormous for an early-stage product.' },
    ],
  },
  {
    category: 'Hosting & Deployment',
    icon: '🚀',
    tools: [
      { name: 'Vercel', free: 'Unlimited deployments, custom domains, Edge, Analytics', tip: 'Deploy every git push. Preview URLs for every branch. Perfect for Next.js. Stays free until you need team features.' },
      { name: 'Cloudflare Pages', free: 'Unlimited deployments, Workers, KV storage', tip: 'Fastest CDN on earth. Workers for serverless compute. Pages for static sites. Use alongside Vercel for different products.' },
      { name: 'Railway', free: '$5 credit/month', tip: 'Best for backend services that need persistent compute. Docker containers. Postgres included. $5 runs a small background job server for months.' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    tools: [
      { name: 'Groq', free: 'Llama 3.1 70B, thousands of API calls free', tip: 'Fastest inference available. Llama 3.1 70B is genuinely powerful. Build AI products without paying OpenAI rates. Rate limits are workable for early products.' },
      { name: 'Ollama', free: 'Completely free, local execution', tip: 'Run Llama 3.1, Mistral, Gemma on your laptop. Zero API costs. Build and test AI products without any limits. Ship to cloud when ready.' },
      { name: 'Hugging Face', free: 'Inference API, Spaces (free GPU), Datasets', tip: 'Thousands of specialized models. Use the Inference API for text classification, embeddings, and image tasks without GPU cost.' },
      { name: 'Together AI', free: '$25 free credits for new accounts', tip: '$25 goes far with efficient models. Use Mixtral 8x7B for cost-effective, high-quality inference. Good for building demos to show investors.' },
    ],
  },
];

const productTypes = [
  {
    n: '01',
    title: 'SaaS Analytics Dashboard',
    example: 'Microsoft 365 License Optimizer',
    customer: 'IT Managers at Indian companies 200–2000 employees',
    revenue: '₹5,000–₹25,000/month per company',
    complexity: 'Intermediate',
    buildTime: '3–4 weeks',
    color: 'border-[#4F7EFF]/30',
    description: 'Connect to Microsoft Graph API using client credentials flow. Pull license assignment data, sign-in activity logs, and usage telemetry. Calculate inactive licenses (no sign-in for 30+ days). Generate monthly waste reports. Show exactly which licenses to reclaim and how much money that saves. IT managers love this because it directly reduces their budget spend and makes them look good to their CFO. Sell at ₹10,000/month for 50% of what they save annually — it always pays for itself.',
    techStack: ['Next.js', 'Microsoft Graph API', 'Supabase', 'Vercel'],
  },
  {
    n: '02',
    title: 'Automation Tool for SMBs',
    example: 'WhatsApp CRM for Small Businesses',
    customer: 'Local retailers, tutors, service businesses with 50–500 WhatsApp customers',
    revenue: '₹999–₹2,999/month',
    complexity: 'Intermediate',
    buildTime: '2–3 weeks',
    color: 'border-[#8B5CF6]/30',
    description: 'Small businesses manage all customer communication on WhatsApp personal accounts. No history search, no tagging, no automated follow-ups. Build a WhatsApp Business API integration that lets them tag customers, set follow-up reminders, send broadcast messages to segments, and track conversation history. The WhatsApp Business API has a free tier for testing. The core value is turning 200 scattered customer conversations into an organized CRM. At ₹999/month, a business with 200 customers needs to retain just one extra customer per year to justify the cost.',
    techStack: ['Node.js', 'WhatsApp Business API', 'Supabase', 'Vercel'],
  },
  {
    n: '03',
    title: 'AI-Powered Niche Tool',
    example: 'AI Resume Screener for Indian Startups',
    customer: 'Startup founders and HR teams hiring for technical roles',
    revenue: 'Pay-per-screen model: ₹50–₹200 per resume analyzed',
    complexity: 'Beginner-Intermediate',
    buildTime: '1–2 weeks',
    color: 'border-[#06B6D4]/30',
    description: 'Indian startups receive 200–500 applications per engineering role. Founders manually screen resumes for 2–3 days. Build a tool that takes a job description and batch of resumes (PDF upload), extracts key requirements with LLM, scores each resume against requirements, and ranks candidates with reasoning. Use Groq\'s free tier (Llama 3.1) for inference. The per-resume pricing model works because it directly replaces founder time. At 500 applications per hire and ₹100/resume, one hiring round = ₹50,000 in revenue from one customer.',
    techStack: ['Next.js', 'Groq API', 'Supabase', 'PDF parsing'],
  },
  {
    n: '04',
    title: 'Vertical SaaS — Education',
    example: 'Coaching Institute Management System',
    customer: 'Coaching institutes with 100–1000 students',
    revenue: '₹5,000–₹20,000/month',
    complexity: 'Advanced',
    buildTime: '6–8 weeks for MVP',
    color: 'border-[#10B981]/30',
    description: 'Target mid-size coaching institutes. Core modules: student enrollment (replace paper forms), batch management (schedule classes, assign faculty), attendance (QR code or biometric integration), test result tracking (score entry, rank calculation), fee collection tracking (installment schedules, payment reminders via WhatsApp), and parent communication dashboard. The key insight: institutes with 200+ students are losing ₹2–5 lakhs/year in administrative inefficiency. Your ₹10,000/month fee is a small fraction of that. Start with one institute in your city. Offer free setup and 3 months free. Get testimonials. Then charge.',
    techStack: ['Next.js', 'Supabase', 'WhatsApp Business API', 'Razorpay'],
  },
  {
    n: '05',
    title: 'Developer Tool / API Product',
    example: 'Notification Infrastructure',
    customer: 'Developers building apps who need multi-channel notifications',
    revenue: '$9–$49/month SaaS',
    complexity: 'Advanced',
    buildTime: '4–6 weeks',
    color: 'border-[#F59E0B]/30',
    description: 'Every app needs notifications: email, SMS, WhatsApp, push. Developers either build this themselves (2 weeks of work) or stitch together 4 different APIs. Build a single API that routes notifications across channels with smart failover (SMS if email bounces), template management, delivery tracking, and preference management. Use Resend for email, Twilio for SMS, Meta for WhatsApp. Charge developers $19/month and API usage above limits. Developer tools have the best CAC because developers find tools through GitHub, Reddit, and Hacker News — free channels.',
    techStack: ['Node.js', 'Hono', 'Resend', 'Twilio', 'Turso'],
  },
  {
    n: '06',
    title: 'AI Wrapper with Real Value',
    example: 'AI Contract Review for Indian Freelancers',
    customer: 'Indian freelancers, consultants, and small agencies',
    revenue: '₹299–₹999/month',
    complexity: 'Beginner',
    buildTime: '1 week',
    color: 'border-[#EF4444]/30',
    description: 'Indian freelancers sign contracts they don\'t understand — NDA clauses, payment terms, IP ownership, non-competes. A lawyer review costs ₹5,000–₹15,000 per contract. Build a tool: upload contract PDF → LLM extracts and explains each clause in plain Hindi/English → flags risky clauses → suggests negotiation points → explains what you\'re agreeing to. At ₹499/month for 5 contract reviews, a freelancer who signs 1–2 contracts per month gets enormous value. This is the template for "AI wrapper with real value": don\'t just summarize, explain implications and suggest actions.',
    techStack: ['Next.js', 'Groq API', 'PDF parsing', 'Gumroad'],
  },
];

export default function BuildingProductsPage() {
  return (
    <PageWrapper
      title="Build with Free Tools"
      description="Real products with $0 infrastructure. The complete free tool stack for Indian technical founders."
      icon="⚡"
      badge="Building Module"
      timeToRead={22}
      lastUpdated="Jan 2026"
    >
      {/* Philosophy */}
      <section className="mb-10">
        <SectionHeader title="The Zero-Cost Stack Philosophy" badge="Core Principle" />
        <div className="space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
          <p>
            The free tiers of Supabase, Vercel, Groq, and Hugging Face available in 2026 are more powerful
            than the paid infrastructure most startups used in 2020. This is not a compromise — it's an
            advantage. You can build and scale a real product to 1,000+ users with zero infrastructure cost.
          </p>
          <p>
            The principle is simple: <strong className="text-white">stay free until you have paying users
            who justify the cost</strong>. Every rupee you spend on infrastructure before you have revenue
            is money you're losing, not investing. The free tier constraint also forces you to build
            efficiently — a discipline that makes your product better.
          </p>
          <p>
            When you do need to upgrade, free-to-paid transitions on these platforms are smooth and predictable.
            Supabase's paid tier is $25/month. Vercel Pro is $20/month. You'll have a product generating
            revenue long before these costs become relevant.
          </p>
        </div>
      </section>

      {/* Tool Stack by Category */}
      <section className="mb-10">
        <SectionHeader title="The Free Tool Stack by Category" badge="Infrastructure" description="What to use, how to use it, and exactly what the free tier gives you." />
        <Accordion>
          {toolCategories.map((cat) => (
            <AccordionItem key={cat.category} title={cat.category} icon={cat.icon}>
              <div className="space-y-4">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="bg-[#141428] rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-white text-sm">{tool.name}</p>
                      <Badge variant="green">{tool.free}</Badge>
                    </div>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">{tool.tip}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Free API Directory */}
      <section className="mb-10">
        <SectionHeader title="Free APIs to Build Real Products" badge="Data Sources" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: 'Microsoft Graph API', use: 'Office 365 license data, email, calendar, Teams', limit: 'Free with app registration' },
            { name: 'Google APIs', use: 'Maps, Gmail, Calendar, Drive, YouTube Analytics', limit: 'Free tier on all; quota varies' },
            { name: 'Resend', use: 'Transactional email for your app', limit: '3,000 emails/month free' },
            { name: 'SendGrid', use: 'Marketing email + transactional', limit: '100 emails/day free forever' },
            { name: 'Alpha Vantage', use: 'Stock market data, OHLCV, fundamentals', limit: '25 API calls/day free' },
            { name: 'NewsAPI', use: 'Real-time news aggregation by keyword', limit: '100 requests/day free' },
            { name: 'OpenWeather', use: 'Weather data, forecasts, historical', limit: '60 calls/minute free' },
            { name: 'CoinGecko', use: 'Crypto prices, market data', limit: 'Generous free tier' },
          ].map((api) => (
            <div key={api.name} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <p className="font-semibold text-white text-sm mb-1">{api.name}</p>
              <p className="text-xs text-[#9CA3AF] mb-2">{api.use}</p>
              <Badge variant="green">{api.limit}</Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Product Types */}
      <section className="mb-10">
        <SectionHeader title="Product Categories with High Revenue Potential" badge="What to Build" description="Six product types with technical instructions, target customers, and revenue models." />
        <div className="space-y-4">
          {productTypes.map((product) => (
            <div key={product.n} className={`bg-[#0F0F1A] border ${product.color} rounded-2xl overflow-hidden`}>
              <div className="px-5 py-4 border-b border-[#1E1E3F]">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#4F7EFF]/40 font-mono font-bold text-lg">{product.n}</span>
                      <h3 className="font-bold text-white">{product.title}</h3>
                    </div>
                    <p className="text-sm text-[#9CA3AF]">{product.example}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="cyan">{product.complexity}</Badge>
                    <Badge variant="orange">{product.buildTime}</Badge>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wide mb-1">Target Customer</p>
                    <p className="text-xs text-[#9CA3AF]">{product.customer}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wide mb-1">Revenue Potential</p>
                    <p className="text-xs text-[#10B981] font-semibold">{product.revenue}</p>
                  </div>
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3">{product.description}</p>
                <div>
                  <p className="text-[10px] text-[#6B7280] uppercase tracking-wide mb-2">Recommended Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.techStack.map((t) => (
                      <span key={t} className="text-[11px] text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CalloutBox variant="info" title="The Most Important Building Principle">
        Build the simplest version that proves your hypothesis, not the most complete version you can imagine.
        Your first version should do one thing embarrassingly well. Every feature beyond that is a bet on
        what users want before you know what they actually want. Ship in 72 hours. Then improve based on
        real feedback from real users.
      </CalloutBox>
    </PageWrapper>
  );
}
