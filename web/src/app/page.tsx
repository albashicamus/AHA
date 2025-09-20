'use client';

import Link from 'next/link';
import { Lightbulb } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  const [isOn, setIsOn] = useState(false);

  return (
    <main className="bg-white text-neutral-900 min-h-screen">
      {/* Darkness veil with top→bottom reveal */}
      <div
        aria-hidden
        className={`fixed inset-0 z-30 pointer-events-none bg-black/90 transform origin-top transition-transform duration-800 ease-out ${
          isOn ? 'scale-y-0' : 'scale-y-100'
        }`}
      />
      {/* Subtle white glow near the top that expands, not yellow */}
      <div
        aria-hidden
        className={`fixed z-20 left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full aspect-square pointer-events-none transition-[transform,opacity] duration-900 ease-out ${
          isOn ? 'scale-[10] opacity-0' : 'scale-50 opacity-60'
        }`}
        style={{
          width: '32rem',
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.35) 35%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 75%)',
          filter: 'blur(8px)',
        }}
      />
      {/* AHA + Switch (initial view) */}
      <section className="min-h-[70vh] flex items-center justify-center relative z-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Light bulb above AHA */}
          <Lightbulb
            aria-hidden
            className={`${
              isOn
                ? 'text-yellow-400 drop-shadow-[0_0_90px_rgba(250,204,21,0.95)]'
                : 'text-neutral-300'
            } transition-all duration-500`}
            width={96}
            height={96}
          />
          <h1
            className={`text-6xl md:text-7xl font-black tracking-tight transition-colors duration-500 ${
              isOn ? 'text-neutral-900 drop-shadow-[0_0_24px_rgba(250,204,21,0.35)]' : 'text-neutral-50 drop-shadow-[0_0_14px_rgba(255,255,255,0.25)]'
            }`}
          >
            AHA
          </h1>

          {/* Light switch */}
          <button
            type="button"
            role="switch"
            aria-checked={isOn}
            aria-label="Toggle light"
            onClick={() => setIsOn((v) => !v)}
            className={`relative w-16 h-9 rounded-full transition-colors duration-300 ${
              isOn ? 'bg-yellow-400' : 'bg-neutral-300'
            }`}
          >
            <span
              className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-white shadow transition-transform duration-300 ${
                isOn ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>

          <p className="text-sm text-neutral-500">Flip the switch to learn more</p>
        </div>
      </section>

      {/* Revealed content */}
      {isOn && (
        <div className="relative z-0 transition-opacity duration-700">
          {/* Crisis section */}
          <section className="max-w-7xl mx-auto px-6 pb-10">
            <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold">The housing shortage and affordability crisis</h2>
              <p className="mt-3 text-neutral-700 max-w-3xl">
                Across the country, families face rising rents, limited supply, and long waitlists. Navigating assistance
                programs is confusing, time-consuming, and often overwhelming.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4">
                  <div className="text-2xl font-extrabold">High demand</div>
                  <p className="text-sm text-neutral-700 mt-1">Waitlists for many programs are years long.</p>
                </div>
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4">
                  <div className="text-2xl font-extrabold">Limited supply</div>
                  <p className="text-sm text-neutral-700 mt-1">Affordable units are scarce in many areas.</p>
                </div>
                <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4">
                  <div className="text-2xl font-extrabold">Complex rules</div>
                  <p className="text-sm text-neutral-700 mt-1">Eligibility varies by location, income, and household.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How AHA helps */}
          <section className="max-w-7xl mx-auto px-6 pb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
                <h3 className="text-xl font-bold">Clarity</h3>
                <p className="mt-2 text-neutral-700">We translate policy into plain language so you know what to do next.</p>
                <ul className="mt-3 list-disc list-inside text-neutral-700 text-sm space-y-1">
                  <li>Simple step-by-step guidance</li>
                  <li>Personalized document checklist</li>
                  <li>No ads or data selling—ever</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-6">
                <h3 className="text-xl font-bold">Confidence</h3>
                <p className="mt-2 text-neutral-700">Reduce mistakes and delays with helpful tips at each step.</p>
                <ul className="mt-3 list-disc list-inside text-neutral-700 text-sm space-y-1">
                  <li>Eligibility checks for local programs</li>
                  <li>Progress tracking and reminders</li>
                  <li>Privacy-first design</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800"
              >
                Start your guided journey
              </Link>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}