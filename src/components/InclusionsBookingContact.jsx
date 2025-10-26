import { Check, X, MessageCircle, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';

const included = [
  'Royal Enfield Himalayan 411cc / SUV option',
  'Backup vehicle & mechanic',
  'Inner Line & Bum-La permits',
  'Safety gear (helmet, guards)',
  'Fuel for rented bikes',
  'Meals: Breakfast (Day 2–9), Dinner (Day 1–8)',
  'Triple-sharing accommodation',
];

const notIncluded = [
  'Refundable bike deposit ₹5,000',
  'Lunch & personal expenses',
  '5% GST',
  'Delay/weather costs',
  'Entry fees, airfare/train tickets',
];

export default function InclusionsBookingContact() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-2 sm:pb-20">
      {/* Inclusions & Exclusions */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#006D77]">Included</h3>
          <ul className="mt-4 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-800">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#006D77]/10 text-[#006D77]"><Check size={16} /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-[#006D77]">Not Included</h3>
          <ul className="mt-4 space-y-3">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-800">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600"><X size={16} /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Booking & Cancellation */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-[#006D77]">Booking & Cancellation</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between px-4 py-3 text-left"
            aria-expanded={open}
          >
            <span className="text-sm font-medium text-gray-900">Booking Amount & Cancellation Policy</span>
            <span className={`ml-4 inline-block h-5 w-5 rounded-full border text-center text-xs leading-5 ${open ? 'bg-[#006D77] text-white border-[#006D77]' : 'border-gray-300 text-gray-600'}`}>{open ? '-' : '+'}</span>
          </button>
          {open && (
            <div className="space-y-4 border-t border-gray-100 px-4 py-4">
              <p className="text-sm text-gray-800"><span className="font-medium">Booking Amount:</span> ₹2,500 (non-refundable)</p>
              <div>
                <p className="text-sm font-medium text-gray-900">Cancellation Policy:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                  <li>≥45 days — 25%</li>
                  <li>45–30 days — 50%</li>
                  <li>30–20 days — 75%</li>
                  <li>&lt;20 days — 100%</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact / CTA */}
      <div id="book" className="mx-auto mt-12 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-[#006D77]">Join the Next Expedition</h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#book" className="inline-flex items-center rounded-full bg-[#E29578] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-95">
            Book Now
          </a>
          <a
            href="https://wa.me/918257053344"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm hover:shadow"
          >
            <MessageCircle size={18} className="text-[#006D77]" /> WhatsApp
          </a>
          <a
            href="tel:+918257053344"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm hover:shadow"
          >
            <Phone size={18} className="text-[#006D77]" /> Call Now
          </a>
        </div>
        <div className="mt-5 space-y-1 text-sm text-gray-700">
          <p>
            Phone: <a className="text-[#006D77] hover:underline" href="tel:+918257053344">+91 82570 53344</a> |{' '}
            <a className="text-[#006D77] hover:underline" href="tel:+919147066477">+91 91470 66477</a>
          </p>
          <p>
            Instagram: <a className="inline-flex items-center gap-1 text-[#006D77] hover:underline" href="https://instagram.com/Country_Miles" target="_blank" rel="noreferrer">
              <Instagram size={16} /> @Country_Miles
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
