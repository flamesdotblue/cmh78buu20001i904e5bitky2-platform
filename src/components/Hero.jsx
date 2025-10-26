import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[68vh] md:h-[78vh] w-full overflow-hidden rounded-b-3xl">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
          alt="Rider on a mountain pass"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Explore the Northeast with Country Miles
            </h1>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              Ride, Trek, and Discover the hidden gems of Arunachal — with local experts.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#packages"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#006D77] shadow hover:shadow-md"
              >
                View Packages
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[#E29578] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-95"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
