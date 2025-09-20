'use client';

import Link from 'next/link';

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Start your application</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          We will guide you through eligibility, documents, and submitting to the right programs. This is a short, friendly
          walkthrough. You can save and come back anytime.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <div className="font-semibold">Step 1</div>
            <div className="mt-1 text-lg font-bold">Eligibility</div>
            <p className="mt-2 text-sm text-neutral-700">Answer a few questions to find matching programs.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <div className="font-semibold">Step 2</div>
            <div className="mt-1 text-lg font-bold">Documents</div>
            <p className="mt-2 text-sm text-neutral-700">We’ll generate a personalized checklist.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <div className="font-semibold">Step 3</div>
            <div className="mt-1 text-lg font-bold">Apply & track</div>
            <p className="mt-2 text-sm text-neutral-700">Submit applications and monitor progress.</p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <Link href="#" className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-neutral-900 text-white font-semibold">
            Begin eligibility
          </Link>
          <Link href="/" className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-neutral-300 text-neutral-900 font-semibold">
            Back to home
          </Link>
        </div>

        <p className="mt-4 text-xs text-neutral-500">You can pause anytime; your progress is saved to your device.</p>
      </section>
    </main>
  );
}


