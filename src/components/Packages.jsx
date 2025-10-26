const packages = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1508264165352-258a6c54ccb7?q=80&w=1900&auto=format&fit=crop',
    title: 'Tawang–Kaziranga Adventure (9D/8N)',
    subtitle:
      'Bike & SUV Expedition through lakes, monasteries, and Kaziranga Safari.',
    price: 'From ₹22,999',
    href: '/packages/1',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1900&auto=format&fit=crop',
    title: 'Tawang Winter Backpacking (6D/5N)',
    subtitle: 'Slow-travel backpacking through passes and valleys.',
    price: 'From ₹17,999',
    href: '/packages/2',
  },
];

export default function Packages() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-[#006D77] sm:text-3xl">Our Signature Adventures</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {packages.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-base font-medium text-[#006D77]">{p.price}</span>
                <a
                  href={p.href}
                  className="inline-flex items-center rounded-full bg-[#E29578] px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                >
                  View Details
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
