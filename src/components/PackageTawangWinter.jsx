import { useState } from 'react';
import { CalendarDays, Download, MessageCircle, Phone, Users, Route, Gauge, MapPin } from 'lucide-react';

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#006D77]">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <button onClick={() => setOpen(!open)} className="w-full px-5 py-4 text-left flex items-center justify-between">
        <span className="font-medium text-gray-900">{title}</span>
        <span className={`ml-4 h-5 w-5 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      {open && <div className="px-5 pb-5 text-sm text-gray-700">{children}</div>}
    </div>
  );
}

export default function PackageTawangWinter() {
  return (
    <main className="pb-24">
      <div className="relative h-[46vh] md:h-[56vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2000&auto=format&fit=crop"
          alt="Snowy mountains at Sela Pass"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-10">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Tawang Winter Backpacking (6 Days / 5 Nights)</h1>
            <p className="mt-2 max-w-3xl text-white/90 text-sm sm:text-base">Backpack through snow valleys, monasteries, and hidden passes — a slow-travel experience for the curious traveler.</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a id="book-now" href="#contact-cta" className="inline-flex items-center rounded-full bg-[#E29578] px-5 py-2.5 text-sm font-medium text-white shadow hover:opacity-95">Book Now</a>
              <a href="#dates" className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur hover:bg-white/20"><CalendarDays size={18}/> View Dates</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#006D77] shadow hover:shadow-md"><Download size={18}/> Download Itinerary (PDF)</a>
            </div>
          </div>
        </div>
      </div>

      <Section id="overview" title="Overview">
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            A scenic winter journey through the tranquil passes and monasteries of Arunachal. Designed for backpackers who prefer culture and calm over chaos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-xs uppercase text-gray-500">Duration</div>
              <div className="mt-1 font-medium text-gray-900">6 Days / 5 Nights</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-xs uppercase text-gray-500">Route</div>
              <div className="mt-1 font-medium text-gray-900">Guwahati → Shergaon → Tawang → Zemithang → Dirang → Guwahati</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500"><Route size={16}/> Travel Style</div>
              <div className="mt-1 font-medium text-gray-900">Backpacking / Shared SUV</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500"><Gauge size={16}/> Difficulty</div>
              <div className="mt-1 font-medium text-gray-900">Easy to Moderate</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500"><Users size={16}/> Group Size</div>
              <div className="mt-1 font-medium text-gray-900">Minimum 10 participants</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pricing-inclusions" title="Price & Inclusions">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Package Price</h3>
            <p className="mt-2 text-2xl font-semibold text-[#006D77]">₹17,999</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Inclusions</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Shared SUVs (Innova, Scorpio, Bolero, Ertiga)</li>
              <li>• ILP & Bum-La Permits</li>
              <li>• Experienced Driver & Assistance</li>
              <li>• Oxygen Cylinder & First-Aid Kit</li>
              <li>• Complimentary Breakfast (Day 2–6)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Exclusions</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Private SUVs available on request</li>
              <li>• Dinner as add-on</li>
              <li>• 5% GST & personal expenses</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="itinerary" title="Itinerary">
        <div className="space-y-3">
          {[
            ['Day 1: Guwahati to Shergaon', 'Pickup by 11 a.m., acclimatization in Shergaon.'],
            ['Day 2: Shergaon to Tawang', 'Nyukmadung, Sela Pass Tunnel (13,700 ft), Jaswant Garh, Jang Waterfalls.'],
            ['Day 3: Tawang Sightseeing & Bum La', 'P.T. Tso, Madhuri Tso, Tawang Monastery, War Memorial.'],
            ['Day 4: Tawang to Zemithang', 'Dolma Lhakhang, Gorsam Chorten, KentseMani (Lhasa Dwar).'],
            ['Day 5: Zemithang to Dirang', 'Se La Pass, Sangti Valley.'],
            ['Day 6: Dirang to Guwahati', 'Return drive, drop-off between 6:30–7:30 p.m.'],
          ].map(([title, desc]) => (
            <AccordionItem key={title} title={title}>
              <p>→ {desc}</p>
            </AccordionItem>
          ))}
        </div>
      </Section>

      <Section id="booking" title="Booking & Cancellation">
        <div className="space-y-3">
          <AccordionItem title="Booking Amount">
            <p>₹2,500 (non-refundable)</p>
          </AccordionItem>
          <AccordionItem title="Cancellation Policy">
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>≥45 days — 25%</li>
              <li>45–30 days — 50%</li>
              <li>30–20 days — 75%</li>
              <li>&lt;20 days — 100%</li>
            </ul>
          </AccordionItem>
        </div>
      </Section>

      <section id="contact-cta" className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-[#006D77]">Plan Your Winter Escape</h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact-cta" className="inline-flex items-center rounded-full bg-[#E29578] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-95">Book Now</a>
            <a href="https://wa.me/918257053344" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm hover:shadow"><MessageCircle size={18} className="text-[#006D77]"/> WhatsApp</a>
            <a href="tel:+918257053344" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm hover:shadow"><Phone size={18} className="text-[#006D77]"/> Call Now</a>
          </div>
          <p className="mt-4 text-sm text-gray-700">Phone: <a className="text-[#006D77] hover:underline" href="tel:+918257053344">+91 82570 53344</a> | <a className="text-[#006D77] hover:underline" href="tel:+919147066477">+91 91470 66477</a></p>
          <p className="text-sm text-gray-700 mt-1">Instagram: <a href="https://instagram.com/Country_Miles" target="_blank" rel="noreferrer" className="text-[#006D77] hover:underline">@Country_Miles</a></p>
        </div>
      </section>

      <a href="#contact-cta" className="fixed bottom-4 left-4 right-4 z-40 mx-auto w-[92%] sm:hidden">
        <div className="rounded-full bg-[#E29578] text-white py-3 text-center text-sm font-medium shadow-lg">Book Now</div>
      </a>
    </main>
  );
}
