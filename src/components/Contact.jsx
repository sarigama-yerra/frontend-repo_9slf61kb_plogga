import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Get in touch</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Have a project in mind? Let’s talk about it.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-xl border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none ring-indigo-500/20 placeholder:text-gray-400 focus:ring-4 dark:border-gray-700 dark:bg-gray-800/60" placeholder="Ada Lovelace" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full rounded-xl border border-gray-300 bg-white/80 px-9 py-2 text-sm outline-none ring-indigo-500/20 placeholder:text-gray-400 focus:ring-4 dark:border-gray-700 dark:bg-gray-800/60" placeholder="you@example.com" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="w-full rounded-xl border border-gray-300 bg-white/80 px-3 py-2 text-sm outline-none ring-indigo-500/20 placeholder:text-gray-400 focus:ring-4 dark:border-gray-700 dark:bg-gray-800/60" placeholder="Tell me about your idea..." />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">I usually reply within 1-2 business days.</p>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110">
              <Send className="h-4 w-4" /> Send
            </button>
          </div>

          {submitted && (
            <p role="status" className="mt-3 text-sm font-medium text-emerald-600">Thanks! Your message has been recorded locally for this demo.</p>
          )}
        </form>
      </div>
    </section>
  );
}
