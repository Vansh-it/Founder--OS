'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  icon?: string;
  badge?: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, icon, badge, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#1E1E3F] rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#141428] transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-semibold text-white text-sm">{title}</span>
          {badge && (
            <span className="text-[10px] font-semibold text-[#4F7EFF] bg-[#4F7EFF]/10 border border-[#4F7EFF]/20 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <ChevronDown
          size={16}
          className={cn('text-[#6B7280] transition-transform duration-200 flex-shrink-0', open && 'rotate-180')}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 border-t border-[#1E1E3F] bg-[#0A0A0F] text-[#9CA3AF] text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={className}>{children}</div>;
}
