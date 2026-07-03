import { ReactNode } from 'react';
import { Info, AlertTriangle, XCircle, CheckCircle, Lightbulb, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CalloutVariant } from '@/lib/types';

interface CalloutBoxProps {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
  className?: string;
}

const variantConfig: Record<CalloutVariant, {
  icon: ReactNode;
  borderColor: string;
  bgColor: string;
  titleColor: string;
  textColor: string;
}> = {
  info: {
    icon: <Info size={16} />,
    borderColor: 'border-[#4F7EFF]/40',
    bgColor: 'bg-[#4F7EFF]/5',
    titleColor: 'text-[#4F7EFF]',
    textColor: 'text-[#9CA3AF]',
  },
  warning: {
    icon: <AlertTriangle size={16} />,
    borderColor: 'border-[#F59E0B]/40',
    bgColor: 'bg-[#F59E0B]/5',
    titleColor: 'text-[#F59E0B]',
    textColor: 'text-[#9CA3AF]',
  },
  critical: {
    icon: <XCircle size={16} />,
    borderColor: 'border-[#EF4444]/40',
    bgColor: 'bg-[#EF4444]/5',
    titleColor: 'text-[#EF4444]',
    textColor: 'text-[#9CA3AF]',
  },
  success: {
    icon: <CheckCircle size={16} />,
    borderColor: 'border-[#10B981]/40',
    bgColor: 'bg-[#10B981]/5',
    titleColor: 'text-[#10B981]',
    textColor: 'text-[#9CA3AF]',
  },
  tip: {
    icon: <Lightbulb size={16} />,
    borderColor: 'border-[#8B5CF6]/40',
    bgColor: 'bg-[#8B5CF6]/5',
    titleColor: 'text-[#8B5CF6]',
    textColor: 'text-[#9CA3AF]',
  },
  quote: {
    icon: <Quote size={16} />,
    borderColor: 'border-[#06B6D4]/40',
    bgColor: 'bg-[#06B6D4]/5',
    titleColor: 'text-[#06B6D4]',
    textColor: 'text-[#9CA3AF]',
  },
};

export default function CalloutBox({ variant = 'info', title, children, className }: CalloutBoxProps) {
  const config = variantConfig[variant];
  return (
    <div className={cn('rounded-xl border p-4 my-4', config.borderColor, config.bgColor, className)}>
      <div className={cn('flex items-start gap-3', config.titleColor)}>
        <span className="mt-0.5 flex-shrink-0">{config.icon}</span>
        <div>
          {title && <p className="font-semibold text-sm mb-1">{title}</p>}
          <div className={cn('text-sm leading-relaxed', config.textColor)}>{children}</div>
        </div>
      </div>
    </div>
  );
}
