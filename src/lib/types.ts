export type NavigationItem = {
  label: string;
  href: string;
  icon: string;
  badge?: string;
  description: string;
  group: string;
};

export type ContentSection = {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToRead: number;
  lastUpdated: string;
};

export type Tool = {
  id: string;
  name: string;
  category: string;
  description: string;
  freeTier: string;
  bestUseCase: string;
  maxValueTip: string;
  limitations: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  url: string;
  tags: string[];
};

export type ToolCategory = {
  id: string;
  name: string;
  icon: string;
  description: string;
  tools: Tool[];
};

export type FrameworkStep = {
  step: number;
  title: string;
  description: string;
  actions: string[];
  timeRequired: string;
  tools: string[];
};

export type PerspectiveContent = {
  id: string;
  persona: string;
  title: string;
  icon: string;
  philosophy: string;
  content: string;
  keyAdvice: string[];
  warnings: string[];
};

export type RoadmapPhase = {
  id: string;
  phase: string;
  period: string;
  ageRange: string;
  objective: string;
  keyMilestones: string[];
  skills: string[];
  tools: string[];
  content: string;
  status: 'upcoming' | 'current' | 'completed';
};

export type ProblemScore = {
  dimension: string;
  description: string;
  ranges: {
    range: string;
    label: string;
    color: string;
    advice: string;
  }[];
};

export type ChecklistItem = {
  id: string;
  text: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  description?: string;
};

export type MetricData = {
  label: string;
  value: string;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  change?: string;
};

export type CalloutVariant = 'info' | 'warning' | 'critical' | 'success' | 'tip' | 'quote';

export type CardVariant = 'default' | 'highlighted' | 'data' | 'warning' | 'success' | 'danger';
