'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import { navigationItems } from '@/lib/navigation';

const searchIndex = [
  { title: 'Problem Quality Scoring System', section: 'Problem Discovery', href: '/problem-discovery', excerpt: 'Score every problem on 5 dimensions: pain intensity, frequency, solution quality, willingness to pay, market size.' },
  { title: 'Industry Observation Framework', section: 'Problem Discovery', href: '/problem-discovery', excerpt: 'How to study industries systematically. Education, healthcare, logistics, SMB, enterprise SaaS inefficiencies.' },
  { title: 'Billion-Dollar Inefficiency Method', section: 'Problem Discovery', href: '/problem-discovery', excerpt: '8 methods for finding problems worth solving: job postings, Reddit mining, software reviews, regulatory changes.' },
  { title: 'Problem Validation System', section: 'Problem Discovery', href: '/problem-discovery', excerpt: '5-step validation protocol. Find 10 real people with the problem before writing a single line of code.' },
  { title: 'First-Principles Thinking', section: 'Thinking Frameworks', href: '/thinking-frameworks', excerpt: 'Break industry assumptions to base facts. How Stripe, Zerodha, and Notion applied first-principles.' },
  { title: 'Systems Thinking Framework', section: 'Thinking Frameworks', href: '/thinking-frameworks', excerpt: 'Map the full system of any industry. Find the highest-leverage intervention point.' },
  { title: 'Leverage Thinking', section: 'Thinking Frameworks', href: '/thinking-frameworks', excerpt: 'Four types of leverage: code, content, network, capital. How to stack all four as a technical founder.' },
  { title: 'High-Agency Mindset', section: 'Thinking Frameworks', href: '/thinking-frameworks', excerpt: 'Refuse to accept impossible as a final answer. High-agency vs low-agency responses to common obstacles.' },
  { title: '72-Hour MVP Rule', section: 'Thinking Frameworks', href: '/thinking-frameworks', excerpt: 'If you cannot build a basic version in 72 hours, your scope is too large. How to scope MVPs correctly.' },
  { title: 'Zero-Cost Stack Philosophy', section: 'Building Products', href: '/building-products', excerpt: 'Build real products with $0 infrastructure. Supabase, Vercel, Next.js, Groq — all free tiers.' },
  { title: 'Free Tool Stack by Category', section: 'Building Products', href: '/building-products', excerpt: 'Frontend, backend, hosting, AI — complete free stack with exact tier limits.' },
  { title: 'SaaS Analytics Dashboard', section: 'Building Products', href: '/building-products', excerpt: 'Microsoft 365 License Optimizer. Connect Graph API, detect waste, sell to IT managers at ₹5–25K/month.' },
  { title: 'Execution Roadmap Day 1–90', section: 'Execution Roadmap', href: '/execution-roadmap', excerpt: 'Day-by-day from idea to ₹10K MRR. Exact tasks, exact timelines, exact targets.' },
  { title: 'Go/No-Go Decision Framework', section: 'Execution Roadmap', href: '/execution-roadmap', excerpt: 'Scoring criteria to decide whether to proceed with an idea or pivot after Day 7 validation.' },
  { title: 'Launch Day Checklist', section: 'Execution Roadmap', href: '/execution-roadmap', excerpt: 'Interactive checklist for every step of your product launch day.' },
  { title: 'Ideal Customer Profile (ICP)', section: 'Marketing & Acquisition', href: '/marketing-acquisition', excerpt: '10 ICP definition questions. Three complete ICP examples for Indian markets.' },
  { title: 'Cold Email Framework', section: 'Marketing & Acquisition', href: '/marketing-acquisition', excerpt: 'Complete cold email templates for IT managers, SMB owners, HR teams. Subject lines, hooks, CTAs.' },
  { title: 'LinkedIn Strategy', section: 'Marketing & Acquisition', href: '/marketing-acquisition', excerpt: 'Profile optimization for young founders. DM sequences. Connection request templates.' },
  { title: 'Reddit Acquisition Playbook', section: 'Marketing & Acquisition', href: '/marketing-acquisition', excerpt: 'Top subreddits by product type. The value-first strategy before promoting.' },
  { title: 'First 10 Users System', section: 'Marketing & Acquisition', href: '/marketing-acquisition', excerpt: '5-step system: warm network, cold outreach, communities, ProductHunt, landing page.' },
  { title: 'Gumroad for Minors', section: 'Payment Systems', href: '/payment-systems', excerpt: 'How to use Gumroad as a minor Indian founder. Parent account structure, payout setup.' },
  { title: 'Lemon Squeezy SaaS Payments', section: 'Payment Systems', href: '/payment-systems', excerpt: 'Merchant of Record model. SaaS subscriptions, license keys, global tax compliance.' },
  { title: 'Trusted Adult Operator Structure', section: 'Payment Systems', href: '/payment-systems', excerpt: 'How to approach parents, set up business through a trusted adult, transition at 18.' },
  { title: 'Pre-18 Launch Strategy', section: 'Payment Systems', href: '/payment-systems', excerpt: 'Phase 1: Build free. Phase 2: Prepare payments. Phase 3: Full launch at 18.' },
  { title: 'SaaS Pricing Strategy', section: 'Payment Systems', href: '/payment-systems', excerpt: 'Indian SMB pricing ₹999–₹4,999/month. International $19–$99/month. Three-tier formula.' },
  { title: 'Three Stages of Scaling', section: 'Scaling Systems', href: '/scaling-systems', excerpt: 'Pre-Scale → Early Scale → Growth Scale. Different jobs at each stage with clear triggers.' },
  { title: 'Infrastructure Scaling Guide', section: 'Scaling Systems', href: '/scaling-systems', excerpt: 'Exact user thresholds for infrastructure upgrades from free tier to production.' },
  { title: 'SaaS Financial Model', section: 'Scaling Systems', href: '/scaling-systems', excerpt: 'MRR, ARR, CAC, LTV, churn, NRR — definitions, formulas, Indian benchmarks.' },
  { title: 'Founder Roadmap 2026–2035', section: 'Founder Roadmap', href: '/founder-roadmap', excerpt: 'Decade-long playbook. Year-by-year objectives from age 16 to 25.' },
  { title: 'Why Starting at 16–17 is an Advantage', section: 'Founder Roadmap', href: '/founder-roadmap', excerpt: 'Asymmetric risk, compounding networks, AI leverage, India at inflection point.' },
  { title: 'Senior Engineer Perspective', section: 'Five Perspectives', href: '/five-perspectives', excerpt: 'Build for working, not elegance. Technical decisions that actually matter in year one.' },
  { title: 'Young Founder Perspective', section: 'Five Perspectives', href: '/five-perspectives', excerpt: 'The emotional reality of building alone. How to use your age as an advantage.' },
  { title: 'Systems Thinker Perspective', section: 'Five Perspectives', href: '/five-perspectives', excerpt: 'Network effects, compounding mathematics, why market timing beats product quality.' },
  { title: 'Long-Term Thinker Perspective', section: 'Five Perspectives', href: '/five-perspectives', excerpt: 'Identify problems worth decades of life. India\'s 2030 economy opportunities.' },
  { title: 'AI Strategic Perspective', section: 'Five Perspectives', href: '/five-perspectives', excerpt: 'Your competitive advantages as a young Indian builder. How to use AI as a force multiplier.' },
  { title: 'SaaS Economics Guide', section: 'Advanced Knowledge', href: '/advanced-knowledge', excerpt: 'MRR, ARR, CAC, LTV, NRR — complete tutorial with Indian SaaS benchmarks.' },
  { title: 'Competitive Moats', section: 'Advanced Knowledge', href: '/advanced-knowledge', excerpt: 'Network effects, switching costs, data moats, brand, regulatory moats.' },
  { title: 'AI Leverage for Founders', section: 'Advanced Knowledge', href: '/advanced-knowledge', excerpt: 'Cursor, Groq, Claude — how to 3x your output using AI tools as a founder.' },
  { title: 'Niche Domination Strategy', section: 'Advanced Knowledge', href: '/advanced-knowledge', excerpt: 'Why niches beat broad markets. How to own a vertical before expanding horizontally.' },
  { title: 'Startup Psychology', section: 'Advanced Knowledge', href: '/advanced-knowledge', excerpt: 'Dealing with rejection, isolation, slow periods. Pivot vs persist framework.' },
  { title: '200 Tools Across 20 Categories', section: 'Tool Stack', href: '/tool-stack', excerpt: 'Complete library of free tools for building, deploying, marketing, and monetizing your product.' },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof results> = {};
    for (const r of results) {
      if (!map[r.section]) map[r.section] = [];
      map[r.section].push(r);
    }
    return map;
  }, [results]);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-10 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white mb-2">Search</h1>
        <p className="text-[#9CA3AF]">Search across all modules, frameworks, and tools.</p>
      </div>

      {/* Search input */}
      <div className="relative mb-8">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Search frameworks, tools, strategies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-[#0F0F1A] border border-[#1E1E3F] focus:border-[#4F7EFF] rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-[#6B7280] outline-none transition-colors text-sm"
          autoFocus
        />
      </div>

      {/* Results */}
      {query && results.length === 0 && (
        <p className="text-[#9CA3AF] text-sm">No results for "{query}". Try different keywords.</p>
      )}

      {results.length > 0 && (
        <div className="space-y-6">
          {Object.entries(grouped).map(([section, items]) => (
            <div key={section}>
              <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-widest mb-3">{section}</p>
              <div className="space-y-2">
                {items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-start justify-between gap-3 bg-[#0F0F1A] border border-[#1E1E3F] hover:border-[#2D2D6B] rounded-xl px-4 py-3 transition-colors group"
                  >
                    <div>
                      <p className="font-semibold text-white text-sm group-hover:text-[#4F7EFF] transition-colors">{item.title}</p>
                      <p className="text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">{item.excerpt}</p>
                    </div>
                    <ArrowRight size={14} className="text-[#6B7280] group-hover:text-[#4F7EFF] flex-shrink-0 mt-1 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Suggested topics when no query */}
      {!query && (
        <div>
          <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-4">Browse by Module</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navigationItems.filter(n => n.href !== '/').map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 bg-[#0F0F1A] border border-[#1E1E3F] hover:border-[#2D2D6B] rounded-xl px-4 py-3 transition-colors group"
              >
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="font-medium text-white text-sm group-hover:text-[#4F7EFF] transition-colors">{item.label}</p>
                  <p className="text-[11px] text-[#6B7280]">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
