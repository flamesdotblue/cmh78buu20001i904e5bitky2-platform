import { Phone, Instagram, MessageCircle } from 'lucide-react';

export default function ContactFooter() {
  return (
    <div className="bg-white">
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-[#006D77] sm:text-3xl">Ready to Ride the Northeast?</h2>
          <p className="mt-3 text-sm text-gray-600">
            Connect with our team and plan your next adventure.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#E29578] px-6 py-3 text-sm font-medium text-white shadow hover:opacity-95">
              Book Now
            </a>
            <a
              href="https://wa.me/918257053344"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm hover:shadow"
            >
              <MessageCircle size={18} className="text-[#006D77]" />
              WhatsApp
            </a>
            <a
              href="tel:+918257053344"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm hover:shadow"
            >
              <Phone size={18} className="text-[#006D77]" />
              Call Now
            </a>
          </div>

          <div className="mt-6 space-y-1 text-sm text-gray-700">
            <p>Phone: <a className="text-[#006D77] hover:underline" href="tel:+918257053344">+91 82570 53344</a> | <a className="text-[#006D77] hover:underline" href="tel:+919147066477">+91 91470 66477</a></p>
            <p>
              Instagram: <a className="inline-flex items-center gap-1 text-[#006D77] hover:underline" href="https://instagram.com/Country_Miles" target="_blank" rel="noreferrer">
                <Instagram size={16} /> @Country_Miles
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <a href="#home" className="flex items-baseline space-x-2">
            <span className="text-xs tracking-widest text-gray-900">0KM</span>
            <span className="font-semibold tracking-tight text-[#006D77]">COUNTRY MILES</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-gray-700 hover:text-[#006D77]">Home</a>
            <a href="#packages" className="text-gray-700 hover:text-[#006D77]">Packages</a>
            <a href="#contact" className="text-gray-700 hover:text-[#006D77]">Contact</a>
            <a href="#terms" className="text-gray-700 hover:text-[#006D77]">Terms</a>
          </div>
          <p className="text-xs text-gray-500">©2025 Country Miles. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
