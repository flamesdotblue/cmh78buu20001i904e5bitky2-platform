import { motion } from 'framer-motion';
import { Calendar, Download } from 'lucide-react';

export default function ProductHero() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[72vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505807551634-c2a3892f0000?q=80&w=2000&auto=format&fit=crop"
          alt="Bikers on mountain roads"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Tawang–Kaziranga Adventure (9 Days / 8 Nights)
            </h1>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              Ride through mountain passes, visit high-altitude lakes, and experience Kaziranga Safari — with trusted local experts.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-full bg-[#E29578] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-95"
              >
                Book Now
              </a>
              <a
                id="dates"
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
              >
                <Calendar size={18} /> View Dates
              </a>
              <a
                href="/itinerary.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#006D77] shadow hover:shadow-md"
                download
              >
                <Download size={18} /> Download Itinerary (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
