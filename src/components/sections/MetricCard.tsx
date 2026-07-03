import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MetricData } from '@/lib/types';

interface MetricCardProps extends MetricData {
  className?: string;
}

export default function MetricCard({ label, value, unit, trend, change, className }: MetricCardProps) {
  return (
    <div className={cn('bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5', className)}>
      <p className="text-[#6B7280] text-xs font-medium uppercase tracking-wide mb-2">{label}</p>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-[#06B6D4] font-mono">{value}</span>
        {unit && <span className="text-sm text-[#9CA3AF] mb-1">{unit}</span>}
      </div>
      {(trend || change) && (
        <div className="flex items-center gap-1 mt-2">
          {trend === 'up' && <TrendingUp size={12} className="text-[#10B981]" />}
          {trend === 'down' && <TrendingDown size={12} className="text-[#EF4444]" />}
          {trend === 'neutral' && <Minus size={12} className="text-[#9CA3AF]" />}
          {change && (
            <span className={cn('text-xs font-medium',
              trend === 'up' && 'text-[#10B981]',
              trend === 'down' && 'text-[#EF4444]',
              trend === 'neutral' && 'text-[#9CA3AF]'
            )}>
              {change}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
