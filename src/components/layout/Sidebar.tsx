'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/lib/navigation';
import { cn } from '@/lib/utils';

const groupOrder = [
  'COMMAND CENTER',
  'DISCOVERY',
  'FRAMEWORKS',
  'BUILDING',
  'EXECUTION',
  'GROWTH',
  'MONEY',
  'SCALE',
  'FUTURE',
  'PERSPECTIVES',
  'INTELLIGENCE',
  'TOOLS',
];

export default function Sidebar() {
  const pathname = usePathname();

  const grouped = groupOrder.map((group) => ({
    group,
    items: navigationItems.filter((item) => item.group === group),
  }));

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-[280px] bg-[#0A0A0F] border-r border-[#1E1E3F] z-40 overflow-y-auto">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-[#1E1E3F]">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F7EFF] to-[#8B5CF6] flex items-center justify-center text-white font-black text-sm">F</div>
          <span className="text-white font-black text-lg tracking-tight">FOUNDER OS</span>
        </div>
        <span className="text-[10px] text-[#4F7EFF] font-mono bg-[#4F7EFF]/10 px-2 py-0.5 rounded-full border border-[#4F7EFF]/20">v1.0 · 2026 Edition</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {grouped.map(({ group, items }) => (
          <div key={group} className="mb-1">
            <p className="text-[10px] font-semibold text-[#6B7280] tracking-widest uppercase px-3 py-1.5">{group}</p>
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-150 group mb-0.5',
                    isActive
                      ? 'bg-[#4F7EFF]/10 text-white border border-[#4F7EFF]/30'
                      : 'text-[#9CA3AF] hover:text-white hover:bg-[#141428] border border-transparent'
                  )}
                >
                  <span className="text-base w-5 text-center flex-shrink-0">{item.icon}</span>
                  <span className="font-medium truncate">{item.label}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#4F7EFF]" />}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-6 py-4 border-t border-[#1E1E3F]">
        <p className="text-[11px] text-[#6B7280]">Built for ambitious</p>
        <p className="text-[11px] text-[#4F7EFF] font-medium">Indian builders 🇮🇳</p>
        <p className="text-[10px] text-[#6B7280] mt-1">© {new Date().getFullYear()} Founder OS</p>
      </div>
    </aside>
  );
}
