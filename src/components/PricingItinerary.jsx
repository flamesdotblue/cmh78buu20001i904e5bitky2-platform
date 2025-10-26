import { useState } from 'react';

const pricing = [
  { type: 'Solo Rider', price: '42,999' },
  { type: 'Dual Rider', price: '34,999' },
  { type: 'BYOB (Bring Your Own Bike)', price: '25,999' },
  { type: 'SUV Seat', price: '22,999' },
  { type: 'Himalayan 450 Upgrade', price: '+5,000' },
  { type: 'Double Sharing', price: '+7,000' },
  { type: 'Single Room', price: '+10,000' },
];

const itinerary = [
  { day: 'Day 1: Arrival at Guwahati', details: 'Check-in, orientation & briefing.' },
  { day: 'Day 2: Ride to Bomdilla/Shergaon', details: 'Mountain views, Nyukmadung & Jaswant Garh memorials.' },
  { day: 'Day 3: Bomdila to Tawang', details: 'Scenic ride via Sela Tunnel to the land of monasteries.' },
  { day: 'Day 4: Tawang sightseeing', details: 'PT Tso, Bum La, Monastery, War Memorial.' },
  { day: 'Day 5: Tawang to Zemithang', details: 'Riverside ride, Gorsam Chorten, Dolma & Jampa Lhakhang.' },
  { day: 'Day 6: Zemithang to Dirang', details: 'Via Se La, hidden gem Sangti Valley.' },
  { day: 'Day 7: Dirang to Kaziranga', details: 'Long valley ride.' },
  { day: 'Day 8: Kaziranga Safari & return to Guwahati.', details: 'Jungle safari, last night meet-up.' },
  { day: 'Day 9: Departure.', details: 'End of expedition.' },
];

export default function PricingItinerary() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Pricing Table */}
        <div>
          <h2 className="text-2xl font-semibold text-[#006D77]">Pricing</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50/60">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-600">Package Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-600">Price (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricing.map((p) => (
                  <tr key={p.type} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 text-sm text-gray-800">{p.type}</td>
                    <td className="px-4 py-3 text-sm font-medium text-[#006D77]">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">*Minimum 10 participants required.*</p>
        </div>

        {/* Itinerary Accordion */}
        <div id="itinerary">
          <h2 className="text-2xl font-semibold text-[#006D77]">Itinerary</h2>
          <div className="mt-4 space-y-3">
            {itinerary.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.day} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-gray-900">{item.day}</span>
                    <span className={`ml-4 inline-block h-5 w-5 rounded-full border text-center text-xs leading-5 ${isOpen ? 'bg-[#006D77] text-white border-[#006D77]' : 'border-gray-300 text-gray-600'}`}>{isOpen ? '-' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-100 px-4 py-3 text-sm text-gray-700">
                      {item.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
