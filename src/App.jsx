import ProductHero from './components/ProductHero';
import OverviewFacts from './components/OverviewFacts';
import PricingItinerary from './components/PricingItinerary';
import InclusionsBookingContact from './components/InclusionsBookingContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main>
        <ProductHero />
        <OverviewFacts />
        <PricingItinerary />
        <InclusionsBookingContact />
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <a href="#book" className="flex-1 inline-flex items-center justify-center rounded-full bg-[#E29578] px-4 py-3 text-sm font-medium text-white shadow hover:opacity-95">
            Book Now
          </a>
          <a href="#pricing" className="flex-1 inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:shadow">
            View Dates
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
