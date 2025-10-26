import { Bike, Car, MapPin, Clock, Users, ShieldCheck } from 'lucide-react';

export default function OverviewFacts() {
  const facts = [
    { label: 'Duration', value: '9 Days / 8 Nights', icon: Clock },
    { label: 'Route', value: 'Guwahati → Tawang → Zemithang → Dirang → Kaziranga → Guwahati', icon: MapPin },
    { label: 'Travel Style', value: 'Bike / SUV Expedition', icon: Bike },
    { label: 'Difficulty', value: 'Moderate', icon: ShieldCheck },
    { label: 'Group Size', value: 'Minimum 10 participants', icon: Users },
    { label: 'Vehicles', value: 'Royal Enfield Himalayan or SUV', icon: Car },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-[#006D77]">Overview</h2>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            A thrilling expedition across the Eastern Himalayas — through Sela Pass, monasteries, and Kaziranga’s wilderness. Led by certified road captains and backed by the Arunachal Tourism Board.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#006D77]/10 text-[#006D77]">
                  <f.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">{f.label}</p>
                  <p className="text-sm font-medium text-gray-900">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
