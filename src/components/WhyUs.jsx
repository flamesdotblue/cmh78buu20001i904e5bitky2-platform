import { MapPin, ShieldCheck, Wallet } from 'lucide-react';

const items = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    desc: 'Our crew & road captains are Northeast natives.',
  },
  {
    icon: ShieldCheck,
    title: 'Govt. Backed',
    desc: 'Supported by the Arunachal Tourism Board.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    desc: 'No middlemen, no hidden costs.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-[#006D77] sm:text-3xl">Why Travel With Country Miles?</h2>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#006D77]/10 text-[#006D77]">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
