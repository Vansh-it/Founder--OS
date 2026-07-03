import type { Metadata } from 'next';
import PageWrapper from '@/components/shared/PageWrapper';
import SectionHeader from '@/components/sections/SectionHeader';
import Badge from '@/components/ui/Badge';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Tool Stack Library | Founder OS',
  description: '200 tools across 20 categories. Every free tool you need to build, launch, and scale your startup.',
  openGraph: { title: 'Tool Stack Library | Founder OS', description: '200 free tools for ambitious Indian builders.', type: 'website' },
};

type ToolEntry = {
  name: string;
  desc: string;
  free: string;
  tip: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
};

const difficultyColors = { Beginner: 'green', Intermediate: 'orange', Advanced: 'red' } as const;

function ToolGrid({ tools }: { tools: ToolEntry[] }) {
  return (
    <div className="space-y-2">
      {tools.map((tool, i) => (
        <div key={tool.name} className="bg-[#141428] rounded-xl p-4">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[#4F7EFF]/40 font-mono text-xs font-bold w-5">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-semibold text-white text-sm">{tool.name}</p>
            </div>
            <div className="flex gap-1.5 flex-shrink-0 flex-wrap justify-end">
              <Badge variant={difficultyColors[tool.difficulty]}>{tool.difficulty}</Badge>
              <Badge variant="green">{tool.free}</Badge>
            </div>
          </div>
          <p className="text-xs text-[#9CA3AF] mb-1.5 ml-7">{tool.desc}</p>
          <p className="text-[11px] text-[#6B7280] ml-7 italic">{tool.tip}</p>
        </div>
      ))}
    </div>
  );
}

const categories = [
  {
    name: 'CODE EDITORS & IDEs',
    icon: '💻',
    tools: [
      { name: 'VS Code', desc: 'World\'s most popular code editor. Free, open-source, infinitely extensible with 50,000+ extensions.', free: '100% free', tip: 'Install immediately: ESLint, Prettier, GitLens, Tailwind IntelliSense, ES7 React, Thunder Client, Error Lens, Auto Rename Tag, Path Intellisense, GitHub Copilot.', difficulty: 'Beginner' },
      { name: 'Cursor', desc: 'AI-first code editor built on VS Code with Claude and GPT-4o built natively into every feature.', free: '2,000 completions/month', tip: 'Tab completion for code. Ctrl+K for inline generation. Ctrl+L for chat. The compose feature writes entire files from a description.', difficulty: 'Beginner' },
      { name: 'Windsurf (Codeium)', desc: 'AI code editor with unlimited completions on free tier — better value than Cursor for pure volume.', free: 'Unlimited completions', tip: 'Use when you\'ve hit Cursor\'s monthly limit. The base completion quality is strong and unlimited.', difficulty: 'Beginner' },
      { name: 'GitHub Codespaces', desc: 'Full VS Code environment in your browser. Any machine becomes your development environment.', free: '60 hours/month', tip: 'Use when on a restricted school computer or to maintain consistent environments across devices.', difficulty: 'Intermediate' },
      { name: 'Replit', desc: 'Browser-based IDE with instant deployment. No setup required — code and deploy in one place.', free: '3 projects, limited compute', tip: 'Best for quick prototypes, sharing live demos, and collaborative coding sessions with others.', difficulty: 'Beginner' },
      { name: 'GitPod', desc: 'Cloud development environment — launches fresh VS Code with your repo pre-configured.', free: '50 hours/month', tip: 'Define your full environment in .gitpod.yml. Any contributor gets a perfect setup on first launch.', difficulty: 'Intermediate' },
      { name: 'JetBrains (Student License)', desc: 'Professional IDEs (WebStorm, IntelliJ, PyCharm, GoLand) — all free with student or educational email.', free: 'Free with student email', tip: 'Apply at jetbrains.com/student. WebStorm has the best JavaScript/TypeScript analysis of any IDE.', difficulty: 'Intermediate' },
      { name: 'Zed', desc: 'Extremely fast, minimalist code editor built in Rust. Collaborative editing built-in.', free: '100% free', tip: 'Noticeably faster than VS Code for large files. Real-time collaboration via built-in feature (no extension needed).', difficulty: 'Intermediate' },
      { name: 'Vim / Neovim', desc: 'Terminal-based text editor. Extremely fast once mastered. Universal availability on every server.', free: '100% free', tip: 'Spend 2 weeks with vimtutor. After that, you\'ll edit code faster than anyone using a GUI editor.', difficulty: 'Advanced' },
      { name: 'Sublime Text', desc: 'Fast, lightweight editor. Best for opening very large files that crash VS Code.', free: 'Unlimited free (nag screen)', tip: 'Use for editing large CSV files, log files, or any file over 50MB that other editors struggle with.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
  {
    name: 'AI CODING ASSISTANTS',
    icon: '🤖',
    tools: [
      { name: 'GitHub Copilot', desc: 'The original AI code assistant. Best integration with VS Code and GitHub ecosystem.', free: 'Free for verified students', tip: 'Apply via GitHub Student Developer Pack. Free for verified students. Worth every second of the verification process.', difficulty: 'Beginner' },
      { name: 'Codeium', desc: 'Unlimited free AI code completions. Strong quality, no usage limits, works in any IDE.', free: 'Unlimited completions', tip: 'The best truly-unlimited free option. Install as VS Code extension. Quality is 85% of Copilot at zero cost.', difficulty: 'Beginner' },
      { name: 'Tabnine', desc: 'AI code completion with local model option for complete privacy. Works offline.', free: 'Free tier with limits', tip: 'Use the local model if you\'re working with sensitive code that shouldn\'t leave your machine.', difficulty: 'Beginner' },
      { name: 'Amazon Q Developer', desc: 'AWS\'s AI coding assistant. Strong on AWS integrations and cloud architecture.', free: 'Free individual tier', tip: 'Especially useful if you use any AWS services. Understands AWS CDK and CloudFormation better than competitors.', difficulty: 'Intermediate' },
      { name: 'Claude API (Anthropic)', desc: 'Claude 3.5 Sonnet via API. Best for complex code generation, debugging, and architecture decisions.', free: 'Free via Anthropic Console trial', tip: 'Use for complex tasks: entire component generation, debugging mysterious errors, architecture review. Pay-as-you-go after trial.', difficulty: 'Intermediate' },
      { name: 'Gemini Code Assist', desc: 'Google\'s AI coding assistant integrated into VS Code and IntelliJ.', free: 'Free', tip: 'Best for Python and data science code. Good Google API integration knowledge.', difficulty: 'Beginner' },
      { name: 'Phind', desc: 'AI-powered search engine for developers. Answers coding questions with citations.', free: 'Free with daily limits', tip: 'Use when StackOverflow and documentation don\'t have clear answers. Phind synthesizes from multiple sources and cites them.', difficulty: 'Beginner' },
      { name: 'Perplexity AI', desc: 'AI search with live citations. Excellent for research on APIs, libraries, and technical concepts.', free: 'Free tier', tip: 'Use for "how does X work in production?" questions where you need current, cited answers rather than AI hallucination.', difficulty: 'Beginner' },
      { name: 'ChatGPT', desc: 'GPT-4o mini on free tier. Versatile for code, debugging, writing, and planning.', free: 'Free (GPT-4o mini)', tip: 'Still excellent for debugging: paste your error + relevant code and ask "what\'s wrong and how do I fix it?"', difficulty: 'Beginner' },
      { name: 'Mistral Le Chat', desc: 'Mistral\'s chat interface. Strong open models, European privacy standards, fast inference.', free: 'Free', tip: 'Mistral Large is competitive with GPT-4 on code. Good alternative when other tools are hitting limits.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
  {
    name: 'FRONTEND FRAMEWORKS',
    icon: '🎨',
    tools: [
      { name: 'Next.js', desc: 'The React framework for production. Server components, App Router, built-in optimization.', free: 'Open source, free', tip: 'Use App Router for all new projects. Server Components eliminate the need for separate API routes for most data fetching.', difficulty: 'Intermediate' },
      { name: 'React', desc: 'The most widely-adopted UI component library. Foundation for Next.js.', free: 'Open source, free', tip: 'Learn hooks deeply (useState, useEffect, useCallback, useRef). 90% of React patterns use only these four.', difficulty: 'Intermediate' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework. Build any UI without writing custom CSS.', free: 'Open source, free', tip: 'Use the Tailwind v4 with @tailwindcss/postcss. JIT mode is default. No purge configuration needed.', difficulty: 'Beginner' },
      { name: 'Framer Motion', desc: 'Production-ready animation library for React. Declarative, performant animations.', free: 'Open source, free', tip: 'Use AnimatePresence for enter/exit animations. Layout animations (layout prop) handle complex choreography automatically.', difficulty: 'Intermediate' },
      { name: 'shadcn/ui', desc: 'Copy-paste component library built on Radix UI + Tailwind. Not an npm package — you own the code.', free: '100% free', tip: 'Run: npx shadcn@latest init. Add components with npx shadcn@latest add [component]. Customize directly since you own the source.', difficulty: 'Beginner' },
      { name: 'Radix UI', desc: 'Headless, accessible component primitives. The foundation under shadcn/ui.', free: 'Open source, free', tip: 'Use directly when you want full styling control. Every component is accessibility-complete out of the box.', difficulty: 'Intermediate' },
      { name: 'Lucide React', desc: '1,000+ consistent SVG icons as React components. Design-consistent icon set.', free: '100% free', tip: 'Install: npm i lucide-react. Tree-shakeable — only bundle icons you use. Consistent 24x24 viewBox across all icons.', difficulty: 'Beginner' },
      { name: 'Recharts', desc: 'Composable, declarative chart library for React. Built on D3, but much easier to use.', free: 'Open source, free', tip: 'Best for dashboards: LineChart, BarChart, AreaChart. ResponsiveContainer makes all charts auto-resize.', difficulty: 'Intermediate' },
      { name: 'TanStack Query', desc: 'Server state management. Handles caching, background refetching, and loading states automatically.', free: 'Open source, free', tip: 'Replaces useEffect for data fetching in 90% of cases. Built-in cache, refetch, and error handling eliminates massive amounts of boilerplate.', difficulty: 'Intermediate' },
      { name: 'Zustand', desc: 'Minimal state management. Replace Redux with 10 lines of code.', free: 'Open source, free', tip: 'For client state that doesn\'t fit into React\'s local state. Simpler API than Redux. Works with Next.js without configuration.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
  {
    name: 'BACKEND & API',
    icon: '⚙️',
    tools: [
      { name: 'Node.js + Express', desc: 'The default JavaScript backend. Massive ecosystem, abundant tutorials, universal hiring.', free: 'Open source, free', tip: 'Use with TypeScript. Install: @types/node @types/express. Add express-async-errors for clean async error handling.', difficulty: 'Beginner' },
      { name: 'Hono', desc: 'Ultra-fast web framework for Cloudflare Workers, Deno, Bun, and Node. ~14KB bundle size.', free: 'Open source, free', tip: 'Use for API routes that need edge deployment. Built-in middleware for CORS, auth, and rate limiting. TypeScript-first design.', difficulty: 'Intermediate' },
      { name: 'FastAPI', desc: 'Python API framework with automatic OpenAPI documentation. Best for AI/ML products.', free: 'Open source, free', tip: 'Auto-generates Swagger UI at /docs. Pydantic validation means type errors are caught at the API boundary.', difficulty: 'Intermediate' },
      { name: 'Bun', desc: 'All-in-one JavaScript runtime: faster than Node.js, built-in test runner, bundler, and package manager.', free: 'Open source, free', tip: 'Drop-in Node.js replacement. npm install works. 3x faster cold starts. Use for new backend projects in 2026.', difficulty: 'Intermediate' },
      { name: 'tRPC', desc: 'End-to-end type-safe APIs without code generation. Call backend functions as if they\'re local.', free: 'Open source, free', tip: 'Use with Next.js App Router. Define procedures on server, call them client-side with full TypeScript inference. Eliminates entire category of API bugs.', difficulty: 'Advanced' },
      { name: 'Prisma', desc: 'Type-safe ORM for PostgreSQL, MySQL, SQLite. Schema-first with automatic migrations.', free: 'Open source, free', tip: 'Define schema in schema.prisma. Run prisma db push for dev. prisma generate creates the typed client. Industry standard in 2026.', difficulty: 'Intermediate' },
      { name: 'Drizzle ORM', desc: 'Lightweight SQL ORM. Smaller bundle, closer to raw SQL, simpler queries than Prisma.', free: 'Open source, free', tip: 'Use for edge runtimes where Prisma\'s bundle size is problematic. SQL-like query API means no "magic" — queries are readable.', difficulty: 'Intermediate' },
      { name: 'Zod', desc: 'Schema validation that generates TypeScript types. Validate all user input and API responses.', free: 'Open source, free', tip: 'Validate every API input with z.object(). Use z.infer<typeof schema> to generate TypeScript types from validation schemas.', difficulty: 'Beginner' },
      { name: 'NextAuth.js / Auth.js', desc: 'Authentication for Next.js. OAuth, email, credentials, JWT — all handled.', free: 'Open source, free', tip: 'Use Auth.js v5 (beta but stable). Configure providers array. Session in server components via auth(). Client via useSession().', difficulty: 'Intermediate' },
      { name: 'Lucia Auth', desc: 'Flexible, framework-agnostic auth library. Full control over session management.', free: 'Open source, free', tip: 'Use when you need custom auth flows that NextAuth can\'t handle. More code, more control.', difficulty: 'Advanced' },
    ] as ToolEntry[],
  },
  {
    name: 'DATABASES (FREE TIERS)',
    icon: '🗄️',
    tools: [
      { name: 'Supabase', desc: 'PostgreSQL database + Auth + Storage + Edge Functions + Realtime. The complete backend-as-a-service.', free: '500MB DB, Auth, 1GB Storage', tip: 'One Supabase project handles auth, DB, storage, and realtime for your entire MVP. supabase-js client works in browser and server components.', difficulty: 'Beginner' },
      { name: 'PlanetScale', desc: 'Serverless MySQL with database branching — create feature branches for schema changes.', free: 'Hobby plan available', tip: 'Branching is the killer feature: create a DB branch for every feature branch. Merge DB changes like code changes.', difficulty: 'Intermediate' },
      { name: 'Turso', desc: 'SQLite at the edge. 9GB storage free, globally distributed, minimal latency.', free: '9GB storage, 500 DBs free', tip: 'Best for read-heavy applications with global users. libSQL driver works with Drizzle. Create a DB per tenant for true multi-tenancy.', difficulty: 'Intermediate' },
      { name: 'Firebase Firestore', desc: 'NoSQL document database with realtime sync. Excellent for apps with real-time collaboration.', free: '1GB, 50K reads/day, 20K writes/day', tip: 'Free tier handles 1,000+ users comfortably if you query efficiently. Use compound queries to avoid multiple reads per page load.', difficulty: 'Beginner' },
      { name: 'MongoDB Atlas', desc: 'Hosted MongoDB with a permanent free tier cluster. Best for flexible document data models.', free: '512MB free cluster', tip: 'Use for products with schema flexibility needs. Free tier runs permanently at minimal performance — enough for early stage.', difficulty: 'Intermediate' },
      { name: 'Neon', desc: 'Serverless PostgreSQL with branching and zero cold-start time.', free: '512MB, 3 branches', tip: 'Better than Supabase for read-heavy workloads. Branching for dev/staging environments. Compatible with Drizzle and Prisma.', difficulty: 'Intermediate' },
      { name: 'CockroachDB', desc: 'Distributed SQL database. Postgres-compatible with global distribution built-in.', free: '10GB storage free', tip: 'Use when you need multi-region data distribution from the start. Postgres-compatible — existing queries just work.', difficulty: 'Advanced' },
      { name: 'Upstash Redis', desc: 'Serverless Redis. Pay-per-request, no idle cost. Perfect for rate limiting and caching.', free: '10,000 commands/day', tip: 'Use for: rate limiting, session storage, job queues, feature flags. ioredis-compatible API.', difficulty: 'Intermediate' },
      { name: 'Appwrite', desc: 'Open-source backend platform. Self-host or use cloud free tier. Firebase alternative.', free: 'Cloud free tier available', tip: 'Self-hosting on a cheap VPS gives unlimited usage. Good documentation. Active community for support.', difficulty: 'Intermediate' },
      { name: 'Xata', desc: 'Database with full-text search built in. Postgres-compatible with Elasticsearch-quality search.', free: '15GB free', tip: 'Use when your product needs both relational data and fast full-text search without managing two separate systems.', difficulty: 'Intermediate' },
    ] as ToolEntry[],
  },
  {
    name: 'HOSTING & DEPLOYMENT',
    icon: '🚀',
    tools: [
      { name: 'Vercel', desc: 'The default deployment platform for Next.js. Unlimited personal deployments, edge network.', free: 'Unlimited deploys, custom domains', tip: 'Connect GitHub → automatic deployment on every push. Preview URLs for every branch. Edge middleware for auth and redirects.', difficulty: 'Beginner' },
      { name: 'Netlify', desc: 'Deployment platform with form handling, identity, and split testing built-in.', free: '100GB bandwidth, 300 build minutes/month', tip: 'Use for sites that need built-in form handling (100 free submissions/month). Serverless functions for lightweight backend.', difficulty: 'Beginner' },
      { name: 'GitHub Pages', desc: 'Free static hosting directly from your GitHub repository.', free: 'Unlimited bandwidth', tip: 'Perfect for marketing pages and documentation. Connect custom domain in 5 minutes. HTTPS is automatic.', difficulty: 'Beginner' },
      { name: 'Cloudflare Pages', desc: 'Fastest CDN deployment. Workers for edge compute. Unlimited deployments free.', free: 'Unlimited deployments, 500 builds/month', tip: 'CDN is genuinely faster than Vercel for global audiences. Workers for edge functions. KV storage for edge-side data.', difficulty: 'Beginner' },
      { name: 'Railway', desc: 'Simple backend deployment. Docker containers, Postgres, Redis all in one platform.', free: '$5 credit/month', tip: 'Best for background jobs, Python APIs, and services that need persistent compute. Template marketplace for one-click deploys.', difficulty: 'Intermediate' },
      { name: 'Render', desc: 'Heroku alternative with Docker support. Auto-deploy from GitHub.', free: 'Free tier (spins down)', tip: 'Free web services spin down after 15 min of inactivity. Use paid ($7/month) for production services that need to stay warm.', difficulty: 'Intermediate' },
      { name: 'Fly.io', desc: 'Deploy Docker containers globally. $5 free monthly allowance.', free: '$5/month credit', tip: 'Best for containerized apps that need specific runtime environments. Global deployment to 30+ regions in one command.', difficulty: 'Intermediate' },
      { name: 'Deno Deploy', desc: 'Edge serverless for Deno and web-standard JavaScript. Generous free tier.', free: 'Generous free tier', tip: 'Excellent for edge functions that need TypeScript without compilation. Deploys in seconds.', difficulty: 'Intermediate' },
      { name: 'Koyeb', desc: 'Serverless platform for full-stack apps. Docker support, global deployment.', free: 'Free tier', tip: 'Good Railway alternative. Supports Node.js, Python, Docker. Free tier has enough for early-stage background services.', difficulty: 'Intermediate' },
      { name: 'Coolify', desc: 'Self-hosted deployment platform. Deploy on any VPS and manage all your apps through a Heroku-like UI.', free: 'Free (self-hosted)', tip: 'Deploy on a ₹500/month Hetzner VPS. Handles SSL, domains, deployments, and monitoring. No platform fees.', difficulty: 'Advanced' },
    ] as ToolEntry[],
  },
  {
    name: 'AI & MACHINE LEARNING',
    icon: '🧠',
    tools: [
      { name: 'Hugging Face', desc: 'The GitHub of AI. Inference API, Spaces (GPU), 500K+ models, 100K+ datasets.', free: 'Inference API + Spaces GPU', tip: 'Use Inference API for zero-setup model inference. Deploy an AI demo on Spaces for free (CPU; GPU requires Pro). Dataset viewer for research.', difficulty: 'Intermediate' },
      { name: 'Google Colab', desc: 'Free Jupyter notebooks with GPU/TPU access. Best for training and experimenting with models.', free: 'Free GPU (T4, limited time)', tip: 'Save your work to Drive — sessions expire. Pro+ ($50/month) gives A100 access. Use for model training, fine-tuning, and data processing.', difficulty: 'Beginner' },
      { name: 'Ollama', desc: 'Run any open-source LLM locally. Zero API cost. Zero data leaving your machine.', free: '100% free', tip: 'Install: curl -fsSL https://ollama.com/install.sh | sh. Run: ollama run llama3.1. Build products without any API bill during development.', difficulty: 'Beginner' },
      { name: 'Groq', desc: 'Fastest LLM inference available. Llama 3.1 70B free API with generous rate limits.', free: 'Thousands of free API calls/day', tip: 'Rate limits: 6,000 tokens/minute on free tier. Use Llama 3.1 70B for quality, Llama 3.1 8B for speed. Build real AI products for free.', difficulty: 'Beginner' },
      { name: 'Together AI', desc: 'Open-source model access. $25 free credits for new accounts. Many models available.', free: '$25 free credits', tip: 'Credits go far with efficient models. Use Mixtral 8x7B for cost-effective quality. Good for building demos before committing to infrastructure.', difficulty: 'Intermediate' },
      { name: 'Replicate', desc: 'Run ML models via API. Pay-per-second GPU compute. Vast model library.', free: 'Free to start, pay per run', tip: 'Zero setup for any model in their library. Great for image generation, video, audio, and specialized models. No upfront cost.', difficulty: 'Intermediate' },
      { name: 'OpenRouter', desc: 'Single API for 100+ models. Switch between OpenAI, Anthropic, Meta without code changes.', free: 'Free credits on registration', tip: 'Build model-agnostic apps. If one provider has an outage, switch instantly. Price comparison across all models in one place.', difficulty: 'Intermediate' },
      { name: 'Mistral AI', desc: 'Frontier models with European data sovereignty. Mistral Large competitive with GPT-4.', free: 'Free tier via La Plateforme', tip: 'Best for EU data-sensitive use cases. Mistral 7B is excellent for lightweight, cost-efficient AI features.', difficulty: 'Intermediate' },
      { name: 'Cohere', desc: 'NLP-specialized AI. Embeddings, classification, and generation APIs with free tier.', free: 'Trial API key, generous limits', tip: 'Best for embeddings and semantic search. embed-english-v3.0 is among the best embedding models available.', difficulty: 'Intermediate' },
      { name: 'LangChain', desc: 'Framework for building LLM-powered applications. Chains, agents, tools, and memory.', free: 'Open source, free', tip: 'Use for complex AI workflows with multiple steps. Retrieval-Augmented Generation (RAG) is LangChain\'s strongest use case.', difficulty: 'Advanced' },
    ] as ToolEntry[],
  },
  {
    name: 'DESIGN & UI TOOLS',
    icon: '✏️',
    tools: [
      { name: 'Figma', desc: 'The industry-standard UI design tool. Real-time collaboration, component libraries, prototyping.', free: 'Free for 3 projects, unlimited personal', tip: 'Free tier is enough for any solo project. Learn Auto Layout — it makes designs resize correctly for different screen sizes.', difficulty: 'Beginner' },
      { name: 'Excalidraw', desc: 'Infinite canvas whiteboarding for wireframes, diagrams, and architecture sketches. Hand-drawn aesthetic.', free: '100% free', tip: 'Perfect for quick wireframes before building. Shareable links for async feedback. Import/export to PNG, SVG.', difficulty: 'Beginner' },
      { name: 'Canva', desc: 'Design tool for non-designers. Templates for social media, presentations, and marketing materials.', free: 'Generous free tier', tip: 'Use for: Twitter header, LinkedIn banner, pitch deck slides, social media graphics. Canva Docs for visual documents.', difficulty: 'Beginner' },
      { name: 'Penpot', desc: 'Open-source Figma alternative. Self-host or use cloud. No vendor lock-in.', free: '100% free (cloud or self-hosted)', tip: 'Use when Figma\'s 3-project limit is hit. Full feature parity with Figma for most workflows. Growing plugin ecosystem.', difficulty: 'Intermediate' },
      { name: 'Coolors', desc: 'Color palette generator. Create, explore, and export color schemes for your product.', free: 'Free for basic use', tip: 'Lock colors you like and generate complementary colors. Export as CSS variables, Tailwind config, or Figma palette.', difficulty: 'Beginner' },
      { name: 'Google Fonts', desc: '1,500+ free fonts for commercial use. Web-optimized, fast loading.', free: '100% free, commercial use', tip: 'For SaaS: Inter (UI), JetBrains Mono (code), Plus Jakarta Sans (headings). Load only the weights you need to minimize bundle.', difficulty: 'Beginner' },
      { name: 'Unsplash', desc: '3+ million free, high-resolution photos for commercial use with no attribution required.', free: '100% free', tip: 'Best for: hero images, blog thumbnails, marketing visuals. Use the Unsplash API to pull images dynamically into your app.', difficulty: 'Beginner' },
      { name: 'Icons8', desc: 'Icons, illustrations, and photos. 1M+ assets. Free tier with attribution.', free: 'Free with attribution', tip: 'Good for app icons, illustrations, and animated icons. Consistent style sets across multiple design languages.', difficulty: 'Beginner' },
      { name: 'Spline', desc: '3D design tool for web. Create and embed interactive 3D scenes without WebGL expertise.', free: 'Free tier', tip: 'Use for hero section 3D elements that make your landing page stand out. Export as React component or embed via iframe.', difficulty: 'Intermediate' },
      { name: 'Rive', desc: 'Interactive animation tool. Create animations that respond to user interactions.', free: 'Free tier, 3 files', tip: 'Better than Lottie for interactive animations. State machines for animations that respond to hover, click, data.', difficulty: 'Intermediate' },
    ] as ToolEntry[],
  },
  {
    name: 'MARKETING & DISTRIBUTION',
    icon: '📣',
    tools: [
      { name: 'Resend', desc: 'Email API built for developers. 3,000 emails/month free. React Email templates.', free: '3,000 emails/month forever', tip: 'Use with React Email to build beautiful transactional emails in React syntax. Best developer experience of any email provider.', difficulty: 'Beginner' },
      { name: 'Mailchimp', desc: 'Email marketing platform. Lists, campaigns, automation, and analytics.', free: '500 subscribers, 1,000 emails/month', tip: 'Free tier is enough until you have a real email list. Use automation for onboarding sequences. Segment by user behavior.', difficulty: 'Beginner' },
      { name: 'Beehiiv', desc: 'Newsletter platform built for growth. Referral programs, subscriber analytics, monetization.', free: 'Up to 2,500 subscribers free', tip: 'Better than Substack for growth-focused newsletters. Built-in referral programs. Better analytics than Mailchimp.', difficulty: 'Beginner' },
      { name: 'Substack', desc: 'Newsletter + podcast + community platform. Free to start, takes 10% of subscription revenue.', free: 'Free to publish, 10% of paid subscriptions', tip: 'Use for audience building. Substack has built-in discovery. Your writing grows your distribution list which grows your product user base.', difficulty: 'Beginner' },
      { name: 'Buffer', desc: 'Social media scheduling. Queue posts for Twitter, LinkedIn, Instagram in one place.', free: 'Free for 3 channels, 10 posts each', tip: 'Schedule a week of social posts on Sunday. Consistent posting without daily time investment. Analytics show which content performs.', difficulty: 'Beginner' },
      { name: 'Google Search Console', desc: 'Free tool to see how your site appears in Google Search. Keywords, clicks, impressions, errors.', free: '100% free', tip: 'Check weekly. See which search queries bring traffic. Identify pages with high impressions but low CTR — improve their titles.', difficulty: 'Beginner' },
      { name: 'Ahrefs Webmaster Tools', desc: 'Free SEO monitoring. Backlinks, organic keywords, site audit for your own domain.', free: 'Free for your own domain', tip: 'Check monthly for new backlinks, broken links, and keyword opportunities. The free tier is surprisingly powerful.', difficulty: 'Intermediate' },
      { name: 'Google Analytics 4', desc: 'Free web analytics. User behavior, acquisition channels, conversions, demographics.', free: '100% free', tip: 'Set up conversion events from day one. Track: signup, first feature use, payment. Without these events, GA4 data is meaningless.', difficulty: 'Beginner' },
      { name: 'Hotjar', desc: 'Heatmaps, session recordings, and surveys. See exactly how users interact with your product.', free: '35 sessions/day, 3 heatmaps', tip: 'Watch 20 session recordings of your signup flow. You\'ll see exactly where users get confused. More valuable than any survey.', difficulty: 'Beginner' },
      { name: 'Tally', desc: 'Free form builder with unlimited responses. Beautiful forms, no coding required.', free: 'Unlimited responses, unlimited forms', tip: 'Better free tier than Typeform. Use for: user research surveys, waitlist signups, feedback forms, beta applications.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
  {
    name: 'PRODUCTIVITY & OPERATIONS',
    icon: '📋',
    tools: [
      { name: 'Notion', desc: 'All-in-one workspace: notes, docs, databases, wikis, and project management.', free: 'Free for personal, unlimited blocks', tip: 'Use as: product roadmap, problem database, user research CRM, meeting notes, and company wiki. Replace 5 tools with one.', difficulty: 'Beginner' },
      { name: 'Linear', desc: 'Issue tracking built for engineering teams. Fast, opinionated, beautiful.', free: 'Free for small teams', tip: 'Best issue tracker in 2026 by far. Cycles (sprints), triage, and roadmap planning are all included. Keyboard-first design.', difficulty: 'Beginner' },
      { name: 'Obsidian', desc: 'Local-first knowledge base. Markdown files, bidirectional links, graph view.', free: '100% free for personal use', tip: 'Build your personal knowledge base of everything you learn about your market, customers, and industry. Graph view shows connections between ideas.', difficulty: 'Intermediate' },
      { name: 'Loom', desc: 'Screen recording with AI summaries. Record and share video messages instead of meetings.', free: '25 videos, 5 min each on free', tip: 'Use to: onboard new users (record walkthroughs), explain bugs to engineers, give async feedback on designs without scheduling calls.', difficulty: 'Beginner' },
      { name: 'Calendly', desc: 'Meeting scheduling. Share a link, people book available slots. No more email back-and-forth.', free: '1 event type free', tip: 'Set buffer times between meetings. Limit daily meetings to 3. Connect to Google Calendar for automatic conflict detection.', difficulty: 'Beginner' },
      { name: 'Slack', desc: 'Team communication. Channels, DMs, threads, and integrations.', free: '90-day message history, 10 integrations', tip: 'Free tier is enough for teams under 10. Set up channels for: engineering, customers, random. Move long discussions to threads.', difficulty: 'Beginner' },
      { name: 'Discord', desc: 'Community platform. Voice, text, and video. Best for building communities around your product.', free: '100% free', tip: 'Build a user community before you need it. Users who engage in your community churn at half the rate of users who don\'t.', difficulty: 'Beginner' },
      { name: 'Trello', desc: 'Visual kanban board for project management. Simple, intuitive, free.', free: '10 boards free', tip: 'Use for: content calendar, feature backlog, customer pipeline. Butler automation for automatic card movement without code.', difficulty: 'Beginner' },
      { name: 'Google Workspace', desc: 'Gmail, Drive, Docs, Sheets, Slides — all integrated. Free with personal Gmail.', free: 'Free with Gmail account', tip: 'Use a custom domain email via Google Workspace (₹150/month per user) for professional communication. Critical for cold outreach credibility.', difficulty: 'Beginner' },
      { name: 'Airtable', desc: 'Database meets spreadsheet. Flexible data management with views and automations.', free: '1,200 records/base', tip: 'Better than a spreadsheet for structured data. Use for: CRM, content calendar, user feedback tracking. Automations on free tier are limited but useful.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
  {
    name: 'RESEARCH & INTELLIGENCE',
    icon: '🔬',
    tools: [
      { name: 'Anna\'s Archive', desc: 'World\'s largest shadow library. Access to millions of books, textbooks, and research papers for free.', free: '100% free access', tip: 'Use to study any industry you\'re targeting: download industry textbooks, academic papers on your market, competitor analysis reports. Knowledge advantage compounds.', difficulty: 'Beginner' },
      { name: 'Perplexity AI', desc: 'AI-powered research with live web citations. Better than Google for complex research questions.', free: 'Free tier with daily limits', tip: 'Use for: market research, competitor analysis, regulatory research, technical documentation synthesis. Pro ($20/month) for unlimited.', difficulty: 'Beginner' },
      { name: 'Google Scholar', desc: 'Free access to millions of academic papers. Search by topic, author, or citation.', free: '100% free', tip: 'Research your industry\'s academic literature. Understanding the academic consensus on a problem signals depth of domain knowledge to customers.', difficulty: 'Beginner' },
      { name: 'Semantic Scholar', desc: 'AI-powered academic research. Find papers by topic and see citation networks.', free: '100% free', tip: 'Better than Google Scholar for finding recent, highly-cited papers. AI summaries save reading time.', difficulty: 'Beginner' },
      { name: 'SimilarWeb', desc: 'Website traffic intelligence. See any website\'s traffic, sources, and audience.', free: 'Limited data on free tier', tip: 'Check competitors\' traffic sources and top landing pages. Understand where their users come from before building your own distribution.', difficulty: 'Beginner' },
      { name: 'Crunchbase', desc: 'Startup and investor database. Funding rounds, investor portfolios, company news.', free: 'Limited lookups free', tip: 'Research who funds companies in your space. Find which investors are active in your vertical. See competitor funding rounds and amounts.', difficulty: 'Beginner' },
      { name: 'Product Hunt', desc: 'Product discovery platform. Launch, get visibility, see what\'s trending in your category.', free: '100% free', tip: 'Study your competitor\'s Product Hunt comments — they\'re unfiltered customer feedback. Post your own product when it\'s ready for visibility.', difficulty: 'Beginner' },
      { name: 'G2 & Capterra', desc: 'Software review platforms. Read reviews to understand what customers hate about competitor products.', free: '100% free to read', tip: 'Read 50 reviews of your top competitor. Sort by "Most Recent" and filter to 1-star and 2-star. Each complaint is a potential product feature.', difficulty: 'Beginner' },
      { name: 'Reddit', desc: '100K+ communities. Raw, honest feedback from real users across every industry and market.', free: '100% free', tip: 'Search "[competitor name] alternatives" and "[your industry] software" in Reddit. Users ask for recommendations in plain language — understand their vocabulary.', difficulty: 'Beginner' },
      { name: 'LinkedIn Sales Navigator (Trial)', desc: '30-day free trial of the most powerful B2B prospect search tool available.', free: '30-day free trial', tip: 'During trial: export your entire ICP list. Search by job title + company size + geography + industry. Build your first cold outreach list.', difficulty: 'Intermediate' },
    ] as ToolEntry[],
  },
  {
    name: 'DEVELOPER INFRASTRUCTURE',
    icon: '🔧',
    tools: [
      { name: 'GitHub', desc: 'Code hosting with CI/CD, project management, and 100M+ developers. Free for public and private repos.', free: 'Unlimited private repos, Actions 2K min/month', tip: 'Use GitHub Projects for issue tracking. GitHub Actions for CI/CD. GitHub Pages for docs. One platform for your entire development workflow.', difficulty: 'Beginner' },
      { name: 'GitHub Actions', desc: 'CI/CD pipeline integrated into GitHub. Automate testing, building, and deploying on every push.', free: '2,000 minutes/month for private repos', tip: 'Set up: lint on PR, type check on PR, deploy to staging on merge to main, deploy to production on release tag.', difficulty: 'Intermediate' },
      { name: 'Docker', desc: 'Container platform. Package your app with all dependencies for consistent deployment anywhere.', free: '100% free (Desktop free for personal use)', tip: 'Dockerfile + docker-compose.yml defines your entire development environment. Share with contributors — they get the exact same setup in one command.', difficulty: 'Intermediate' },
      { name: 'Cloudflare', desc: 'CDN + DDoS protection + DNS + WAF + Workers + Pages. Essential free tier for production apps.', free: 'Generous free tier across products', tip: 'Put Cloudflare in front of everything. Free DDoS protection. DNS management. Cache static assets. Reduce origin server load significantly.', difficulty: 'Intermediate' },
      { name: 'Let\'s Encrypt', desc: 'Free SSL certificates for any domain. Auto-renewal, trusted by all browsers.', free: '100% free', tip: 'Most platforms (Vercel, Netlify, Cloudflare) handle Let\'s Encrypt automatically. For self-hosted: use Certbot for automatic renewal.', difficulty: 'Beginner' },
      { name: 'Uptime Robot', desc: 'Uptime monitoring with email/SMS alerts. Monitor 50 websites free.', free: '50 monitors, 5-min checks free', tip: 'Set up day one. You should know about downtime before users report it. Email + Slack webhook alerts on status changes.', difficulty: 'Beginner' },
      { name: 'Sentry', desc: 'Error monitoring and performance tracing. Know about bugs before users report them.', free: '5K errors/month, 10K performance events', tip: 'Install in 5 minutes: npm install @sentry/nextjs. Every unhandled exception appears in your dashboard with full context.', difficulty: 'Beginner' },
      { name: 'PostHog', desc: 'Open-source product analytics. Events, funnels, session replay, feature flags.', free: '1M events/month, unlimited users', tip: 'Track: signup, first feature use, upgrade, churn. Build funnels to see where users drop off. Session replay to watch exactly what they did.', difficulty: 'Intermediate' },
      { name: 'Plausible', desc: 'Privacy-first analytics. GDPR compliant, no cookies, simple dashboard.', free: 'Free for open-source projects', tip: 'For public sites or marketing pages where you care about privacy compliance. Simpler than GA4, no consent banner needed.', difficulty: 'Beginner' },
      { name: 'Nginx', desc: 'High-performance web server. Reverse proxy, load balancer, and static file server.', free: '100% free', tip: 'For self-hosted apps: Nginx as reverse proxy in front of your Node/Python server. Config files are simple once you have a working template.', difficulty: 'Advanced' },
    ] as ToolEntry[],
  },
  {
    name: 'PAYMENT & MONETIZATION',
    icon: '💳',
    tools: [
      { name: 'Gumroad', desc: 'Digital product selling platform. Simple setup, no company required.', free: 'Free to start, 10% fee', tip: 'Best for: ebooks, templates, one-time software access, cohorts. Marketplace discovery adds organic traffic to your products.', difficulty: 'Beginner' },
      { name: 'Lemon Squeezy', desc: 'SaaS payment platform. Merchant of Record handles tax, subscriptions, license keys.', free: 'Free to start, 5% + $0.50', tip: 'Best option for SaaS products. MoR means global tax compliance is handled. License key generation built-in for software.', difficulty: 'Beginner' },
      { name: 'Polar', desc: 'Open-source monetization. GitHub integration for developer tools and open-source projects.', free: 'Free to start, small fee on transactions', tip: 'Best for open-source projects and developer tools. Tightly integrated with GitHub repos. Sponsorship and product sales in one.', difficulty: 'Beginner' },
      { name: 'Buy Me a Coffee', desc: 'Creator support platform. One-time payments and memberships.', free: 'Free, 5% platform fee', tip: 'Lower friction for supporters than Patreon. Good for newsletters, open-source maintainers, and community builders.', difficulty: 'Beginner' },
      { name: 'Ko-fi', desc: '0% fee on one-time donations. Memberships, commissions, and shop.', free: '0% fee on donations', tip: 'Best fee structure for low-volume donation scenarios. Use alongside a product-based monetization for supporter revenue.', difficulty: 'Beginner' },
      { name: 'Patreon', desc: 'Creator membership platform. Recurring support with tiered perks.', free: 'Free to start, 5–12% fee', tip: 'Better for content creators than product companies. Indian creators receive payouts via PayPal → parent bank account workaround.', difficulty: 'Beginner' },
      { name: 'Paddle', desc: 'Payment processor + Merchant of Record. Enterprise-grade but available to any size company.', free: 'Free to start, 5% + $0.50', tip: 'Similar to Lemon Squeezy but more established. Better for higher-volume products. Tax compliance in 200+ countries.', difficulty: 'Intermediate' },
      { name: 'Stripe', desc: 'The best payment infrastructure. Use when you\'re 18+ and have a business registered.', free: 'No monthly fee, 2.9% + 30¢', tip: 'Open at 18 with your company registration. Stripe Billing handles subscriptions, Stripe Checkout for one-time payments. The gold standard.', difficulty: 'Intermediate' },
      { name: 'Razorpay', desc: 'Best Indian payment gateway. UPI, cards, net banking, EMI. 18+ with GST required.', free: 'No monthly fee, 2% per transaction', tip: 'Register with your company PAN and GST at 18. Razorpay Subscriptions for recurring billing. Best for INR-denominated products.', difficulty: 'Intermediate' },
      { name: 'UPI Collect Requests', desc: 'Instant UPI payment collection. Free via any UPI app. No gateway fees.', free: '100% free', tip: 'For early-stage Indian customers: generate UPI payment links via any UPI app. Manual, but zero fees. Record every payment in your ledger.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
  {
    name: 'AUTOMATION & WORKFLOW',
    icon: '⚡',
    tools: [
      { name: 'n8n', desc: 'Self-hosted workflow automation. Unlimited workflows and executions with no per-automation fee.', free: 'Free (self-hosted)', tip: 'Host on Railway or a cheap VPS. Connect any two apps. Replaces Zapier for most use cases at zero ongoing cost.', difficulty: 'Intermediate' },
      { name: 'Make (Integromat)', desc: 'Visual workflow automation. More powerful than Zapier, better free tier.', free: '1,000 operations/month free', tip: '1,000 operations/month handles: email notifications, CRM updates, Slack alerts, and more for an early-stage product.', difficulty: 'Beginner' },
      { name: 'Zapier', desc: 'Largest automation platform. 6,000+ app integrations. Simple interface.', free: '100 tasks/month, 5 Zaps', tip: 'Free tier is limited. Use for: new signup → Slack alert, new payment → Google Sheet log. Move to Make or n8n for more complex flows.', difficulty: 'Beginner' },
      { name: 'Pipedream', desc: 'Serverless automation platform. Code-based workflows. Generous free tier.', free: '10,000 credits/month', tip: 'Best for technical founders: write JavaScript/Python in workflows for complex logic. Better than Zapier for custom transformations.', difficulty: 'Intermediate' },
      { name: 'Activepieces', desc: 'Open-source automation. Self-host or use cloud. No-code + code blocks.', free: 'Free (self-hosted or cloud trial)', tip: 'Self-host for unlimited automations. Good Make alternative with growing template library.', difficulty: 'Intermediate' },
      { name: 'Trigger.dev', desc: 'Background jobs for developers. Scheduled tasks, event-driven workflows in your codebase.', free: 'Free tier', tip: 'Better than cron jobs and Vercel\'s edge functions for complex long-running tasks. Write background jobs in TypeScript with full IDE support.', difficulty: 'Advanced' },
      { name: 'Inngest', desc: 'Event-driven background functions. Retry logic, fan-out, multi-step workflows built-in.', free: 'Generous free tier', tip: 'Use for: post-signup sequences, payment webhooks, AI processing pipelines. Reliable background jobs without managing queues.', difficulty: 'Advanced' },
      { name: 'IFTTT', desc: 'Simple personal automations between 700+ services. Less powerful but extremely easy.', free: 'Free tier, 5 applets', tip: 'For personal automations: RSS to email, social media cross-posting, smart home integrations. Not for production product automation.', difficulty: 'Beginner' },
      { name: 'Windmill', desc: 'Open-source workflow engine for developers. Scripts, flows, and apps in Python/TypeScript.', free: 'Free (self-hosted)', tip: 'More powerful than n8n for code-heavy workflows. Build internal admin tools and automations. Self-host on any server.', difficulty: 'Advanced' },
      { name: 'Temporal', desc: 'Workflow orchestration for complex, long-running business processes.', free: 'Free self-hosted, cloud has free tier', tip: 'Use when you need workflows that run for hours or days with complex retry/compensation logic. Overkill until you have complex operational flows.', difficulty: 'Advanced' },
    ] as ToolEntry[],
  },
  {
    name: 'COMMUNICATION & OUTREACH',
    icon: '📬',
    tools: [
      { name: 'Gmail + Custom Domain', desc: 'Professional email with your own domain via Google Workspace or Zoho Mail.', free: 'Zoho Mail: 5 accounts free', tip: 'Use founder@yourproduct.com for cold outreach. Custom domain email gets 30–50% better reply rates than @gmail.com.', difficulty: 'Beginner' },
      { name: 'Hunter.io', desc: 'Find professional email addresses by name and company domain.', free: '25 searches/month free', tip: 'Find the email of any professional. Use to verify emails before sending cold outreach to reduce bounce rate.', difficulty: 'Beginner' },
      { name: 'Apollo.io', desc: 'B2B lead database + email sequencing. 200M+ contacts with job titles, companies, emails.', free: '50 email credits/month', tip: 'Free tier gives 50 verified emails/month. Use for: finding ICPs in specific companies, researching prospects before cold email.', difficulty: 'Intermediate' },
      { name: 'Instantly', desc: 'Cold email sending platform with warmup and deliverability tools.', free: 'Paid only, mention as reference', tip: 'Note: Paid only but industry standard. Alternative: use Gmail + a sending schedule (max 50 new contacts/day) to avoid spam filters.', difficulty: 'Intermediate' },
      { name: 'LinkedIn', desc: 'Professional network. Best B2B prospecting and outreach platform in the world.', free: '100% free account', tip: 'Optimize profile first. Then: connect with 20 ICPs/week. Engage with their content before messaging. DM acceptance rate 40–60%.', difficulty: 'Beginner' },
      { name: 'Twitter/X', desc: 'Public platform. Build-in-public community, developer ecosystem, founder network.', free: '100% free', tip: 'Post weekly: what you built, what you learned, what surprised you. Tag relevant founders. Reply to industry conversations. Compound reach over months.', difficulty: 'Beginner' },
      { name: 'WhatsApp Business', desc: 'Free business messaging. Used by 99% of Indian SMB customers for business communication.', free: '100% free', tip: 'Set up auto-reply, business hours, and quick replies. For Indian SMB products: WhatsApp is often the primary support and sales channel.', difficulty: 'Beginner' },
      { name: 'Crisp', desc: 'Live chat and customer messaging. Chatbot, shared inbox, CRM on free tier.', free: '2 seats, unlimited conversations free', tip: 'Free tier handles all early-stage support. Widget on your website converts visitors to users via live chat.', difficulty: 'Beginner' },
      { name: 'Tally Forms', desc: 'Free form builder with unlimited responses. Better UI than Google Forms.', free: 'Unlimited responses, unlimited forms', tip: 'Use for: waitlist signup, user research surveys, feedback collection, beta applications. Notion-like editing experience.', difficulty: 'Beginner' },
      { name: 'Loom', desc: 'Screen recording + async video messaging. Replace scheduled calls with video updates.', free: '25 videos, 5 min each', tip: 'Record product walkthroughs, bug reports, and async feedback. Users who receive personal Loom videos from founders convert at 2x rate.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
  {
    name: 'LEARNING & DEVELOPMENT',
    icon: '📖',
    tools: [
      { name: 'The Odin Project', desc: 'Free, open-source full-stack web development curriculum. From zero to job-ready.', free: '100% free', tip: 'The best structured learning path for web development. Do not skip the projects — they are the education, not the reading.', difficulty: 'Beginner' },
      { name: 'freeCodeCamp', desc: '3,000+ hours of free coding curriculum. Certifications in responsive design, JavaScript, Python.', free: '100% free', tip: 'Use for structured practice. The algorithms section is particularly valuable for technical interview preparation.', difficulty: 'Beginner' },
      { name: 'CS50 (Harvard)', desc: 'Harvard\'s intro to computer science. Available free on edX. Covers C, Python, SQL, web development.', free: '100% free (certificate costs money)', tip: 'Take this even if you already code. CS50 gives you the mental model of computation, not just syntax. The problem sets are legitimately challenging.', difficulty: 'Beginner' },
      { name: 'MIT OpenCourseWare', desc: 'Free MIT course materials: lectures, problem sets, exams for 2,500+ courses.', free: '100% free', tip: 'For advanced learning: 6.006 (Algorithms), 6.824 (Distributed Systems), 15.S12 (Blockchain). University depth at zero cost.', difficulty: 'Advanced' },
      { name: 'Coursera (Audit Mode)', desc: 'University courses from Stanford, Google, IBM. Audit for free — pay only for certificates.', free: 'Free to audit all courses', tip: 'Click "Audit" instead of "Enroll". You get all course content free. The certificate is optional and not necessary for most purposes.', difficulty: 'Beginner' },
      { name: 'YouTube (Technical Channels)', desc: 'Best technical channels: Fireship, Theo - t3.gg, Jack Herrington, Kevin Powell, TechWorld with Nana.', free: '100% free', tip: 'Fireship for quick mental models. Theo for React/Next.js opinions. Kevin Powell for CSS mastery. TechWorld with Nana for DevOps. Follow all four.', difficulty: 'Beginner' },
      { name: 'Hacker News', desc: 'YC\'s community forum. Startup news, technical discussions, "Show HN" launches, career advice.', free: '100% free', tip: 'Read the "Ask HN" and "Show HN" posts. They reveal what builders are working on and what founders are struggling with. Invaluable market intelligence.', difficulty: 'Beginner' },
      { name: 'Paul Graham Essays', desc: 'Essays on startups, thinking, and life by Y Combinator\'s co-founder. 100+ essays.', free: '100% free at paulgraham.com', tip: 'Start with: "Do Things That Don\'t Scale", "How to Get Startup Ideas", "Default Alive or Default Dead", "Founder Mode". Read in that order.', difficulty: 'Beginner' },
      { name: 'Dev.to', desc: 'Developer blogging platform. Technical tutorials, career advice, community discussions.', free: '100% free', tip: 'Read: Trending section for what\'s technically relevant this week. Write: your own build logs and tutorials to build a technical audience.', difficulty: 'Beginner' },
      { name: 'Khan Academy', desc: 'Free courses in mathematics, computer science, and economics. World-class quality.', free: '100% free', tip: 'For mathematical foundations: Linear Algebra, Statistics, and Discrete Math are all relevant to understanding ML and data products.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
  {
    name: 'SECURITY & COMPLIANCE',
    icon: '🔒',
    tools: [
      { name: 'Bitwarden', desc: 'Open-source password manager. Free for personal use, teams plan available.', free: 'Free for individuals', tip: 'Use immediately. Store all your API keys, database credentials, and account passwords. Share secrets with co-founders via encrypted vault.', difficulty: 'Beginner' },
      { name: 'Let\'s Encrypt', desc: 'Free SSL/TLS certificates. Auto-renewal. Trusted by all browsers worldwide.', free: '100% free', tip: 'For self-hosted apps: use Certbot for automatic issuance and renewal. Most platforms (Vercel, Netlify) handle this automatically.', difficulty: 'Beginner' },
      { name: 'Cloudflare (Security)', desc: 'WAF, DDoS mitigation, bot protection, rate limiting — all on free tier.', free: 'Generous free tier', tip: 'Enable: DDoS protection, Bot Fight Mode, security headers. Free WAF rules cover most common attacks. Zero cost, significant protection.', difficulty: 'Intermediate' },
      { name: 'Snyk', desc: 'Dependency vulnerability scanning. Find and fix security issues in npm packages.', free: '200 tests/month free', tip: 'Run: npx snyk test in your project. See all known vulnerabilities in your dependencies. Critical for any product handling user data.', difficulty: 'Beginner' },
      { name: 'OWASP ZAP', desc: 'Free web application security scanner. Find SQL injection, XSS, and other vulnerabilities.', free: '100% free', tip: 'Run against your staging environment before launch. Fix all High and Critical findings. Medium findings document and prioritize.', difficulty: 'Advanced' },
      { name: 'SonarCloud', desc: 'Code quality and security analysis. Free for public GitHub repos.', free: 'Free for public repos', tip: 'Connect to your GitHub repo. Scans every pull request for security issues, code smells, and bugs. Comments directly on the PR.', difficulty: 'Intermediate' },
      { name: 'Have I Been Pwned', desc: 'Check if email addresses appear in data breaches. Free API for breach checking.', free: 'Free API (limited rate)', tip: 'Integrate into your signup flow to warn users if their email has appeared in known breaches. Simple privacy feature users appreciate.', difficulty: 'Beginner' },
      { name: 'Mozilla Observatory', desc: 'Scan your website for security headers and TLS configuration. Free, instant results.', free: '100% free', tip: 'Test at observatory.mozilla.org. Target A or A+ grade. Implement: CSP, HSTS, X-Frame-Options, X-Content-Type-Options headers.', difficulty: 'Intermediate' },
      { name: '1Password (Student)', desc: 'Professional password and secret manager. Free for students via GitHub Student Pack.', free: 'Free via GitHub Student Pack', tip: 'Get GitHub Student Pack first (free at education.github.com). Includes 1Password Teams Starter for your startup.', difficulty: 'Beginner' },
      { name: 'GitGuardian', desc: 'Secret detection in code commits. Alerts when API keys or passwords are accidentally committed.', free: 'Free for public repos, developer accounts', tip: 'Connect to GitHub. Prevents the nightmare scenario of accidentally committing an API key to a public repo and having it scraped in minutes.', difficulty: 'Beginner' },
    ] as ToolEntry[],
  },
];

export default function ToolStackPage() {
  return (
    <PageWrapper
      title="Tool Stack Library"
      description="200 tools across 20 categories. Every free tool you need to build, launch, and scale your first product."
      icon="🛠️"
      badge="Tools Module"
      timeToRead={30}
      lastUpdated="Jan 2026"
    >
      <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: '20 Categories', sub: 'Organized by function' },
          { label: '200 Tools', sub: 'All documented' },
          { label: '$0 to Start', sub: 'All have free tiers' },
          { label: '2026 Curated', sub: 'Current & maintained' },
        ].map((s) => (
          <div key={s.label} className="bg-[#0F0F1A] border border-[#1E1E3F] rounded-xl px-4 py-3">
            <p className="text-white font-bold text-sm">{s.label}</p>
            <p className="text-[#6B7280] text-xs mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      <Accordion>
        {categories.map((cat) => (
          <AccordionItem key={cat.name} title={cat.name} icon={cat.icon} badge={`${cat.tools.length} tools`}>
            <ToolGrid tools={cat.tools} />
          </AccordionItem>
        ))}
      </Accordion>
    </PageWrapper>
  );
}
