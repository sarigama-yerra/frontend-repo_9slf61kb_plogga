import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[90vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-gray-950/60 dark:via-gray-950/30 dark:to-gray-950/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <p className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Available for freelance
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Software Developer crafting interactive, 3D web experiences
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I build modern, performant apps with delightful interactions. Let’s ship something great together.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110">
              View Projects
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 backdrop-blur hover:bg-white/70 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800/60">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
