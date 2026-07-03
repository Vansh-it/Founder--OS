import { cn } from '@/lib/utils';

type BadgeVariant = 'blue' | 'purple' | 'cyan' | 'green' | 'orange' | 'red' | 'gray';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  blue: 'text-[#4F7EFF] bg-[#4F7EFF]/10 border-[#4F7EFF]/20',
  purple: 'text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/20',
  cyan: 'text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/20',
  green: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/20',
  orange: 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/20',
  red: 'text-[#EF4444] bg-[#EF4444]/10 border-[#EF4444]/20',
  gray: 'text-[#9CA3AF] bg-[#9CA3AF]/10 border-[#9CA3AF]/20',
};

export default function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full border tracking-wide', variants[variant], className)}>
      {children}
    </span>
  );
}
