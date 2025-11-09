import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: '3D Product Showcase',
    description: 'A WebGL-powered product explorer with real-time lighting and PBR materials.',
    tags: ['React', 'Three.js', 'Spline'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Streaming analytics with socket-driven micro-interactions and charts.',
    tags: ['FastAPI', 'WebSockets', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Composable component library with tokens, themes, and accessibility baked in.',
    tags: ['Radix', 'shadcn/ui', 'TypeScript'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Selected work showcasing interaction, performance and craft.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/70 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800/60">
            <Code2 className="h-4 w-4" /> View Code
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/60">
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-indigo-100 via-sky-100 to-cyan-100 dark:from-indigo-900/30 dark:via-sky-900/30 dark:to-cyan-900/30" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-gray-200 bg-white/60 px-2.5 py-1 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline">
                  Live Demo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
