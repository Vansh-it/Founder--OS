import { ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { CardVariant } from '@/lib/types';

interface CardProps {
  title?: string;
  description?: string;
  icon?: ReactNode | string;
  badge?: string;
  children?: ReactNode;
  variant?: CardVariant;
  href?: string;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-[#0F0F1A] border-[#1E1E3F] hover:border-[#2D2D6B]',
  highlighted: 'bg-[#0F0F1A] border-[#4F7EFF]/40 hover:border-[#4F7EFF] shadow-[0_0_20px_rgba(79,126,255,0.05)]',
  data: 'bg-[#0F0F1A] border-[#06B6D4]/30 hover:border-[#06B6D4]/60',
  warning: 'bg-[#0F0F1A] border-[#F59E0B]/30 hover:border-[#F59E0B]/60',
  success: 'bg-[#0F0F1A] border-[#10B981]/30 hover:border-[#10B981]/60',
  danger: 'bg-[#0F0F1A] border-[#EF4444]/30 hover:border-[#EF4444]/60',
};

export default function Card({ title, description, icon, badge, children, variant = 'default', href, className }: CardProps) {
  const content = (
    <div className={cn('rounded-2xl border p-5 transition-all duration-200', variantStyles[variant], href && 'cursor-pointer', className)}>
      {(icon || badge) && (
        <div className="flex items-start justify-between mb-3">
          {icon && (
            <span className="text-2xl">
              {typeof icon === 'string' ? icon : icon}
            </span>
          )}
          {badge && (
            <span className="text-[10px] font-semibold text-[#4F7EFF] bg-[#4F7EFF]/10 border border-[#4F7EFF]/20 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}
      {title && <h3 className="font-semibold text-white text-base mb-1.5">{title}</h3>}
      {description && <p className="text-sm text-[#9CA3AF] leading-relaxed">{description}</p>}
      {children}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
