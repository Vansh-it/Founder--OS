'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { navigationItems } from '@/lib/navigation';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react';

interface PageWrapperProps {
  children: ReactNode;
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  timeToRead?: number;
  lastUpdated?: string;
}

export default function PageWrapper({
  children,
  title,
  description,
  icon,
  badge,
  timeToRead,
  lastUpdated,
}: PageWrapperProps) {
  const pathname = usePathname();
  const currentIndex = navigationItems.findIndex((item) => item.href === pathname);
  const prevPage = currentIndex > 0 ? navigationItems[currentIndex - 1] : null;
  const nextPage = currentIndex < navigationItems.length - 1 ? navigationItems[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <div className="border-b border-[#1E1E3F] bg-gradient-to-b from-[#0F0F1A] to-[#0A0A0F] px-6 py-10">
        <div className="max-w-4xl">
          {badge && (
            <span className="inline-block text-[11px] font-semibold text-[#4F7EFF] bg-[#4F7EFF]/10 border border-[#4F7EFF]/20 px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3 flex items-center gap-3">
            {icon && <span className="text-3xl">{icon}</span>}
            {title}
          </h1>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl">{description}</p>
          <div className="flex items-center gap-4 mt-4">
            {timeToRead && (
              <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                <Clock size={12} />
                {timeToRead} min read
              </span>
            )}
            {lastUpdated && (
              <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                <Calendar size={12} />
                Updated {lastUpdated}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 py-8 max-w-5xl">
        {children}
      </div>

      {/* Prev / Next navigation */}
      <div className="border-t border-[#1E1E3F] mt-12 px-4 sm:px-6 py-8 max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          {prevPage ? (
            <Link
              href={prevPage.href}
              className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors group border border-[#1E1E3F] hover:border-[#2D2D6B] rounded-xl px-4 py-3"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              <div>
                <p className="text-[10px] text-[#6B7280] uppercase tracking-wide">Previous</p>
                <p className="font-medium">{prevPage.label}</p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPage ? (
            <Link
              href={nextPage.href}
              className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors group border border-[#1E1E3F] hover:border-[#2D2D6B] rounded-xl px-4 py-3 text-right ml-auto"
            >
              <div>
                <p className="text-[10px] text-[#6B7280] uppercase tracking-wide">Next</p>
                <p className="font-medium">{nextPage.label}</p>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
