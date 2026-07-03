import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Target, TrendingUp, Brain, DollarSign, Rocket } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CalloutBox from '@/components/shared/CalloutBox';

export const metadata: Metadata = {
  title: 'Dashboard | Founder OS',
  description: 'The Complete Startup Execution System for Ambitious Indian Builders aged 16–20.',
};

const stats = [
  { label: '11 Modules', sub: 'Complete sections' },
  { label: '200+ Frameworks', sub: 'Tactical systems' },
  { label: '20 Tool Categories', sub: '200 tools documented' },
  { label: '2026–2035', sub: 'Decade roadmap' },
];

const systemCards = [
  {
    icon: '🔍',
    title: 'DISCOVER',
    description: 'How to find billion-dollar problems. The Problem Quality Scoring System scores every idea on 5 dimensions: pain intensity, frequency, solution quality, willingness to pay, and market size. Never build the wrong thing again.',
    href: '/problem-discovery',
    badge: 'Start Here',
  },
  {
    icon: '⚡',
    title: 'BUILD',
    description: 'How to build with 100% free tools. Supabase, Vercel, Next.js, Hugging Face, Groq — real production infrastructure at $0. Your first product should cost you nothing but time.',
    href: '/building-products',
    badge: '$0 Stack',
  },
  {
    icon: '🚀',
    title: 'LAUNCH',
    description: 'How to get your first 10 real paying users. Cold outreach templates, Reddit strategy, LinkedIn playbook, community distribution — specific tactics not generic advice.',
    href: '/marketing-acquisition',
    badge: 'Growth',
  },
  {
    icon: '💳',
    title: 'MONETIZE',
    description: 'How to collect payments as a minor in India. The honest, legally-sound guide to Gumroad, Lemon Squeezy, trusted adult structures, and the exact timeline to full commercial launch at 18.',
    href: '/payment-systems',
    badge: 'Critical',
  },
  {
    icon: '📈',
    title: 'SCALE',
    description: 'How to grow from 0 to a scalable startup. Infrastructure triggers, first hiring decisions, operational systems, SaaS unit economics — built for Indian founders at every stage.',
    href: '/scaling-systems',
    badge: 'Advanced',
  },
  {
    icon: '🧠',
    title: 'THINK',
    description: 'How elite founders actually think. First-principles, systems thinking, leverage frameworks, high-agency mindset — the cognitive operating system of the world\'s best builders.',
    href: '/thinking-frameworks',
    badge: 'Frameworks',
  },
];

const quickRoadmap = [
  { period: 'Week 1–2', milestone: 'Problem Discovery + Validation', color: 'text-[#4F7EFF]' },
  { period: 'Week 3–4', milestone: 'MVP Build using free tools', color: 'text-[#4F7EFF]' },
  { period: 'Week 5–6', milestone: 'First 10 Users', color: 'text-[#8B5CF6]' },
  { period: 'Week 7–8', milestone: 'First Payment Received', color: 'text-[#8B5CF6]' },
  { period: 'Month 3', milestone: 'First ₹10,000 MRR', color: 'text-[#06B6D4]' },
  { period: 'Month 6', milestone: 'First ₹50,000 MRR', color: 'text-[#10B981]' },
  { period: 'Month 12', milestone: 'First ₹2,00,000 MRR', color: 'text-[#10B981]' },
  { period: 'Year 2', milestone: 'Scalable startup operations', color: 'text-[#10B981]' },
];

const perspectives = [
  { icon: '🔧', name: 'Senior Engineer', tagline: 'Build for working, not elegance. Refactoring is earned, not gifted.', color: 'border-[#06B6D4]/30' },
  { icon: '🚀', name: 'Young Founder', tagline: 'Your age is an advantage. Build in public. Ship ugly. Learn fast.', color: 'border-[#4F7EFF]/30' },
  { icon: '🕸️', name: 'Systems Thinker', tagline: 'Every market is a system with leverage points. Find the highest one.', color: 'border-[#8B5CF6]/30' },
  { icon: '🎯', name: 'Long-Term Strategist', tagline: "Solve problems worth decades of your life. Everything else is noise.", color: 'border-[#F59E0B]/30' },
  { icon: '🤖', name: 'AI Perspective', tagline: 'You have a competitive advantage that didn\'t exist 5 years ago. Use it.', color: 'border-[#10B981]/30' },
];

const featuredTools = [
  { name: 'Supabase', desc: 'Free PostgreSQL + Auth + Storage', badge: 'Database' },
  { name: 'Vercel', desc: 'Deploy unlimited projects free', badge: 'Hosting' },
  { name: 'Groq', desc: 'Llama 3.1 70B — fastest free LLM', badge: 'AI' },
  { name: 'Gumroad', desc: 'Sell digital products without a company', badge: 'Payments' },
  { name: 'Ollama', desc: 'Run LLMs locally — zero API cost', badge: 'AI' },
  { name: 'Resend', desc: '3,000 emails/month free forever', badge: 'Email' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-14 border-b border-[#1E1E3F] bg-gradient-to-br from-[#0F0F1A] via-[#0A0A0F] to-[#0A0A0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F7EFF]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none" />
        <div className="max-w-4xl relative">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="blue">v1.0 · 2026 Edition</Badge>
            <Badge variant="purple">India-First</Badge>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4 leading-tight">
            <span className="text-white">FOUNDER</span>{' '}
            <span className="gradient-text">OS</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-[#9CA3AF] mb-4 leading-snug">
            The Complete Startup Execution System<br className="hidden sm:block" /> for Ambitious Builders
          </p>

          <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            You can already build software. That's rarer than most people realize. What you're missing is the
            complete business layer — how to find real problems worth solving, validate them before building,
            collect revenue as a minor in India, distribute without a marketing team, and scale from your
            first ₹1,000 to your first ₹1 Crore. That's what this platform is built to give you.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/problem-discovery"
              className="flex items-center gap-2 bg-[#4F7EFF] hover:bg-[#3d6ee8] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              Start with Problem Discovery <ArrowRight size={16} />
            </Link>
            <Link
              href="/tool-stack"
              className="flex items-center gap-2 border border-[#1E1E3F] hover:border-[#2D2D6B] text-[#9CA3AF] hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              View Tool Stack <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl px-4 py-3">
                <p className="text-white font-bold text-base">{s.label}</p>
                <p className="text-[#6B7280] text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Callout */}
      <section className="px-4 sm:px-6 py-6">
        <CalloutBox variant="quote" title="Who This Is Built For">
          This platform was built for one type of person: someone who can already build anything with code,
          but needs the complete business, marketing, monetization, and scaling system to turn technical skill
          into real revenue and eventually a valuable company. If you can ship code but don't know how to
          find your first paying customer — this is for you.
        </CalloutBox>
      </section>

      {/* System Overview */}
      <section className="px-4 sm:px-6 py-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold text-[#8B5CF6] uppercase tracking-widest mb-2">The System</p>
          <h2 className="text-2xl font-bold text-white">Six Operating Modules</h2>
          <p className="text-[#9CA3AF] mt-1">Everything a technical founder needs to go from idea to recurring revenue.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {systemCards.map((card) => (
            <Link key={card.href} href={card.href}>
              <div className="bg-[#0F0F1A] border border-[#1E1E3F] hover:border-[#2D2D6B] rounded-2xl p-5 transition-all duration-200 h-full card-glow cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{card.icon}</span>
                  <Badge variant="blue">{card.badge}</Badge>
                </div>
                <h3 className="font-black text-white text-base mb-2 group-hover:text-[#4F7EFF] transition-colors">{card.title}</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Start Roadmap */}
      <section className="px-4 sm:px-6 py-8 border-t border-[#1E1E3F]">
        <div className="mb-6">
          <p className="text-[11px] font-semibold text-[#8B5CF6] uppercase tracking-widest mb-2">Quick Start</p>
          <h2 className="text-2xl font-bold text-white">From Zero to ₹2L MRR</h2>
          <p className="text-[#9CA3AF] mt-1">A realistic timeline for a technical founder executing this system.</p>
        </div>
        <div className="relative">
          <div className="absolute left-2 top-3 bottom-3 w-px bg-[#1E1E3F]" />
          <div className="space-y-3">
            {quickRoadmap.map((item, i) => (
              <div key={i} className="pl-8 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0F0F1A] border border-[#1E1E3F] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4F7EFF]" />
                </div>
                <div className="flex items-center gap-3 bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl px-4 py-3">
                  <span className={`text-xs font-mono font-bold ${item.color} w-20 flex-shrink-0`}>{item.period}</span>
                  <span className="text-sm text-[#9CA3AF]">{item.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Perspectives */}
      <section className="px-4 sm:px-6 py-8 border-t border-[#1E1E3F]">
        <div className="mb-6">
          <p className="text-[11px] font-semibold text-[#8B5CF6] uppercase tracking-widest mb-2">Five Perspectives</p>
          <h2 className="text-2xl font-bold text-white">Five Advisor Personas</h2>
          <p className="text-[#9CA3AF] mt-1">Five deeply written perspectives on your exact situation as a young Indian builder.</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
          {perspectives.map((p) => (
            <Link key={p.name} href="/five-perspectives" className="flex-shrink-0 w-56">
              <div className={`bg-[#0F0F1A] border ${p.color} rounded-2xl p-4 h-full hover:bg-[#141428] transition-colors`}>
                <span className="text-2xl mb-2 block">{p.icon}</span>
                <p className="font-bold text-white text-sm mb-1">{p.name}</p>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tool Stack Preview */}
      <section className="px-4 sm:px-6 py-8 border-t border-[#1E1E3F]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[11px] font-semibold text-[#8B5CF6] uppercase tracking-widest mb-2">Tool Stack</p>
            <h2 className="text-2xl font-bold text-white">Start Here — 6 Essential Free Tools</h2>
          </div>
          <Link href="/tool-stack" className="text-sm text-[#4F7EFF] hover:text-[#3d6ee8] flex items-center gap-1">
            View all 200 <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {featuredTools.map((tool) => (
            <div key={tool.name} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-white text-sm">{tool.name}</p>
                <Badge variant="purple">{tool.badge}</Badge>
              </div>
              <p className="text-xs text-[#9CA3AF]">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 py-10 border-t border-[#1E1E3F]">
        <div className="bg-gradient-to-br from-[#4F7EFF]/10 to-[#8B5CF6]/10 border border-[#4F7EFF]/20 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-3">The Operating System Starts Now</h2>
          <p className="text-[#9CA3AF] mb-6 leading-relaxed">
            Every page in this system is a complete tactical guide. Start with Problem Discovery.
            Score 3 problems this week. Build your first MVP next month. The only variable is execution.
          </p>
          <Link
            href="/problem-discovery"
            className="inline-flex items-center gap-2 bg-[#4F7EFF] hover:bg-[#3d6ee8] text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Begin Problem Discovery <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
