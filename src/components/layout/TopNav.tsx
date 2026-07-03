'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';
import { navigationItems } from '@/lib/navigation';
import { cn } from '@/lib/utils';

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const currentPage = navigationItems.find((item) => item.href === pathname);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 lg:left-[280px] h-14 bg-[#0A0A0F]/95 backdrop-blur-sm border-b border-[#1E1E3F] z-30 flex items-center px-4 gap-4">
        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#9CA3AF] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Page title */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#6B7280] hidden sm:inline">Founder OS</span>
            {currentPage && (
              <>
                <span className="text-[#1E1E3F] hidden sm:inline">/</span>
                <span className="text-white font-medium truncate">{currentPage.label}</span>
              </>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link href="/search" className="text-[#9CA3AF] hover:text-white transition-colors" aria-label="Search">
            <Search size={18} />
          </Link>
          <span className="hidden sm:inline text-[10px] text-[#4F7EFF] font-mono bg-[#4F7EFF]/10 px-2 py-1 rounded-full border border-[#4F7EFF]/20">
            16–20 · Builder Edition
          </span>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-[280px] bg-[#0A0A0F] border-r border-[#1E1E3F] overflow-y-auto">
            <div className="px-6 py-5 border-b border-[#1E1E3F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F7EFF] to-[#8B5CF6] flex items-center justify-center text-white font-black text-sm">F</div>
                <span className="text-white font-black text-lg">FOUNDER OS</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-[#9CA3AF]">
                <X size={20} />
              </button>
            </div>
            <nav className="px-3 py-4 space-y-0.5">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all',
                      isActive
                        ? 'bg-[#4F7EFF]/10 text-white border border-[#4F7EFF]/30'
                        : 'text-[#9CA3AF] hover:text-white hover:bg-[#141428] border border-transparent'
                    )}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
