import { useState } from 'react';
import { CalendarDays, Download, MessageCircle, Phone, MapPin, Users, Route, Gauge } from 'lucide-react';

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

export default function PackageTawangKaziranga() {
  return (
    <main className="pb-24">
      <div className="relative h-[46vh] md:h-[56vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1508264165352-258a6c54ccb7?q=80&w=2000&auto=format&fit=crop"
          alt="Bikers on mountain roads"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-10">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Tawang–Kaziranga Adventure (9 Days / 8 Nights)</h1>
            <p className="mt-2 max-w-3xl text-white/90 text-sm sm:text-base">Ride through mountain passes, visit high-altitude lakes, and experience Kaziranga Safari — with trusted local experts.</p>
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
            A thrilling expedition across the Eastern Himalayas — through Sela Pass, monasteries, and Kaziranga’s wilderness. Led by certified road captains and backed by the Arunachal Tourism Board.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-xs uppercase text-gray-500">Duration</div>
              <div className="mt-1 font-medium text-gray-900">9 Days / 8 Nights</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="text-xs uppercase text-gray-500">Route</div>
              <div className="mt-1 font-medium text-gray-900">Guwahati → Tawang → Zemithang → Dirang → Kaziranga → Guwahati</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500"><Route size={16}/> Travel Style</div>
              <div className="mt-1 font-medium text-gray-900">Bike / SUV Expedition</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500"><Gauge size={16}/> Difficulty</div>
              <div className="mt-1 font-medium text-gray-900">Moderate</div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-xs uppercase text-gray-500"><Users size={16}/> Group Size</div>
              <div className="mt-1 font-medium text-gray-900">Minimum 10 participants</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pricing" title="Pricing">
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50/60">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">Package Type</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">Price (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {[
                ['Solo Rider', '42,999'],
                ['Dual Rider', '34,999'],
                ['BYOB (Bring Your Own Bike)', '25,999'],
                ['SUV Seat', '22,999'],
                ['Himalayan 450 Upgrade', '+5,000'],
                ['Double Sharing', '+7,000'],
                ['Single Room', '+10,000'],
              ].map(([type, price]) => (
                <tr key={type}>
                  <td className="px-4 py-3 text-sm text-gray-900">{type}</td>
                  <td className="px-4 py-3 text-sm font-medium text-[#006D77]">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500">Minimum 10 participants required.</p>
      </Section>

      <Section id="itinerary" title="Itinerary">
        <div className="space-y-3">
          {[
            ['Day 1: Arrival at Guwahati', 'Check-in, orientation & briefing.'],
            ['Day 2: Ride to Bomdilla/Shergaon', 'Mountain views, Nyukmadung & Jaswant Garh memorials.'],
            ['Day 3: Bomdila to Tawang', 'Scenic ride via Sela Tunnel to the land of monasteries.'],
            ['Day 4: Tawang sightseeing', 'PT Tso, Bum La, Monastery, War Memorial.'],
            ['Day 5: Tawang to Zemithang', 'Riverside ride, Gorsam Chorten, Dolma & Jampa Lhakhang.'],
            ['Day 6: Zemithang to Dirang', 'Via Se La, hidden gem Sangti Valley.'],
            ['Day 7: Dirang to Kaziranga', 'Long valley ride.'],
            ['Day 8: Kaziranga Safari & return to Guwahati.', 'Jungle safari, last night meet-up.'],
            ['Day 9: Departure.', 'End of expedition.'],
          ].map(([title, desc]) => (
            <AccordionItem key={title} title={title}>
              <p>→ {desc}</p>
            </AccordionItem>
          ))}
        </div>
      </Section>

      <Section id="included" title="Inclusions & Exclusions">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Included</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Royal Enfield Himalayan 411cc / SUV option</li>
              <li>• Backup vehicle & mechanic</li>
              <li>• Inner Line & Bum-La permits</li>
              <li>• Safety gear (helmet, guards)</li>
              <li>• Fuel for rented bikes</li>
              <li>• Meals: Breakfast (Day 2–9), Dinner (Day 1–8)</li>
              <li>• Triple-sharing accommodation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900">Not Included</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Refundable bike deposit ₹5,000</li>
              <li>• Lunch & personal expenses</li>
              <li>• 5% GST</li>
              <li>• Delay/weather costs</li>
              <li>• Entry fees, airfare/train tickets</li>
            </ul>
          </div>
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
          <h2 className="text-2xl font-semibold text-[#006D77]">Join the Next Expedition</h2>
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
