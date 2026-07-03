'use client';

import { useState } from 'react';
import { CheckCircle, Circle, Clock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { RoadmapPhase } from '@/lib/types';

interface RoadmapTimelineProps {
  phases: RoadmapPhase[];
}

export default function RoadmapTimeline({ phases }: RoadmapTimelineProps) {
  const [expanded, setExpanded] = useState<string | null>(phases[0]?.id ?? null);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-5 bottom-5 w-px bg-[#1E1E3F]" />

      <div className="space-y-3">
        {phases.map((phase) => {
          const isOpen = expanded === phase.id;
          return (
            <div key={phase.id} className="relative pl-14">
              {/* Dot */}
              <div className={cn(
                'absolute left-3 top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center',
                phase.status === 'completed' ? 'border-[#10B981] bg-[#10B981]/20' :
                phase.status === 'current' ? 'border-[#4F7EFF] bg-[#4F7EFF]/20' :
                'border-[#1E1E3F] bg-[#0A0A0F]'
              )}>
                {phase.status === 'completed' ? (
                  <CheckCircle size={10} className="text-[#10B981]" />
                ) : phase.status === 'current' ? (
                  <div className="w-2 h-2 rounded-full bg-[#4F7EFF] animate-pulse" />
                ) : (
                  <Circle size={10} className="text-[#1E1E3F]" />
                )}
              </div>

              <button
                onClick={() => setExpanded(isOpen ? null : phase.id)}
                className="w-full text-left border border-[#1E1E3F] rounded-xl bg-[#0F0F1A] hover:border-[#2D2D6B] transition-all"
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={cn('text-xs font-semibold uppercase tracking-wide',
                        phase.status === 'current' ? 'text-[#4F7EFF]' : 'text-[#6B7280]'
                      )}>{phase.period}</span>
                      {phase.ageRange && (
                        <span className="text-[10px] text-[#6B7280] border border-[#1E1E3F] px-2 py-0.5 rounded-full">{phase.ageRange}</span>
                      )}
                    </div>
                    <p className="font-bold text-white">{phase.phase}</p>
                    <p className="text-sm text-[#9CA3AF] mt-0.5">{phase.objective}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {phase.status === 'current' && (
                      <span className="text-[10px] font-bold text-[#4F7EFF] bg-[#4F7EFF]/10 border border-[#4F7EFF]/20 px-2 py-0.5 rounded-full">NOW</span>
                    )}
                    <ChevronDown size={16} className={cn('text-[#6B7280] transition-transform', isOpen && 'rotate-180')} />
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="mt-2 border border-[#1E1E3F] rounded-xl bg-[#0A0A0F] px-5 py-4">
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">{phase.content}</p>
                  {phase.keyMilestones.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-2">Key Milestones</p>
                      <ul className="space-y-1.5">
                        {phase.keyMilestones.map((m, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                            <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {phase.tools.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-2">Tools to Master</p>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.tools.map((tool) => (
                          <span key={tool} className="text-[11px] text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-2 py-0.5 rounded-full">{tool}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
