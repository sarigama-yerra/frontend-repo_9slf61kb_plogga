import { Heart, Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200/70 bg-white/70 py-8 backdrop-blur dark:border-gray-800 dark:bg-gray-950/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()} — Built with</span>
            <Heart className="h-4 w-4 text-rose-500" />
            <span>by a playful dev.</span>
          </p>
          <div className="text-sm text-gray-500">Crafted with React, Tailwind and Spline.</div>
        </div>
      </div>
    </footer>
  );
}
