import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  className?: string;
}

export default function SectionHeader({ title, description, badge, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-6', className)}>
      {badge && (
        <span className="inline-block text-[11px] font-semibold text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-3 py-0.5 rounded-full mb-3 tracking-widest uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      {description && <p className="text-[#9CA3AF] leading-relaxed">{description}</p>}
    </div>
  );
}
