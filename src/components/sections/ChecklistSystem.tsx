'use client';

import { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ChecklistItem } from '@/lib/types';

interface ChecklistSystemProps {
  items: ChecklistItem[];
  title?: string;
}

const priorityColors = {
  high: 'text-[#EF4444]',
  medium: 'text-[#F59E0B]',
  low: 'text-[#10B981]',
};

export default function ChecklistSystem({ items, title }: ChecklistSystemProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setChecked(next);
  };

  const pct = Math.round((checked.size / items.length) * 100);
  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <div className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-2xl p-5">
      {title && <h3 className="font-bold text-white text-lg mb-3">{title}</h3>}

      {/* Progress */}
      <div className="mb-5">
        <div className="flex justify-between text-xs text-[#6B7280] mb-1.5">
          <span>{checked.size}/{items.length} completed</span>
          <span>{pct}%</span>
        </div>
        <div className="h-1.5 bg-[#1E1E3F] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#4F7EFF] to-[#8B5CF6] rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Items by category */}
      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat}>
            <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-widest mb-2">{cat}</p>
            <div className="space-y-2">
              {items.filter((i) => i.category === cat).map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-start gap-3 text-left hover:bg-[#141428] rounded-lg px-2 py-1.5 transition-colors group"
                >
                  {checked.has(item.id) ? (
                    <CheckSquare size={16} className="text-[#10B981] flex-shrink-0 mt-0.5" />
                  ) : (
                    <Square size={16} className="text-[#1E1E3F] group-hover:text-[#6B7280] flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <span className={cn('text-sm', checked.has(item.id) ? 'line-through text-[#6B7280]' : 'text-[#9CA3AF]')}>
                      {item.text}
                    </span>
                    {item.description && !checked.has(item.id) && (
                      <p className="text-xs text-[#6B7280] mt-0.5">{item.description}</p>
                    )}
                  </div>
                  <span className={cn('text-[9px] font-bold uppercase tracking-wider flex-shrink-0 mt-1', priorityColors[item.priority])}>
                    {item.priority}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {checked.size === items.length && (
        <div className="mt-4 text-center text-sm text-[#10B981] font-medium">
          ✓ All tasks complete! Time to execute.
        </div>
      )}
    </div>
  );
}
