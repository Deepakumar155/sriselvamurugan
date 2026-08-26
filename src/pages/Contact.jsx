import { Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import CustomerReviews from '../components/CustomerReviews';

export default function Contact() {
  return (
    <div className="py-20 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Contact Sri Selvamurugan | Request a Quote for Construction Materials</title>
        <meta name="description" content="Get in touch with Sri Selvamurugan Transport & Suppliers to request a quote for construction materials, arrange transport, or book JCB machinery." />
        <link rel="canonical" href="https://example.com/contact" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark dark:text-white mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Get a quote for materials, arrange transport, or book machinery. We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-700 mb-8 transition-colors">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-dark dark:text-white mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center text-brand-500 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-brand-dark dark:text-white text-base sm:text-lg">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">Chennai, Tamil Nadu, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-brand-dark dark:text-white text-base sm:text-lg">WhatsApp</h4>
                    <a
                      href="https://wa.me/919962675329?text=Hello%20Sri%20Selvamurugan%20Transport,%20I%20would%20like%20to%20inquire%20about%20materials/machinery."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline font-medium text-sm sm:text-base mt-1 inline-flex items-center gap-1"
                    >
                      Chat on WhatsApp (+91 9962675329) &rarr;
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center text-brand-500 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-brand-dark dark:text-white text-base sm:text-lg">Email</h4>
                    <a href="mailto:ruthrakavin@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors text-sm sm:text-base mt-1 block break-all">ruthrakavin@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form className="bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-dark dark:text-white mb-6">Request a Quote</h3>
              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-dark dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm sm:text-base" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-dark dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm sm:text-base" placeholder="Your Phone" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Service Required</label>
                  <select className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-dark dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm sm:text-base">
                    <option>Material Supply (Sand, Aggregates)</option>
                    <option>JCB Service</option>
                    <option>Lorry Transport</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-brand-dark dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm sm:text-base" placeholder="Describe your requirement, quantity, location..."></textarea>
                </div>
                <button type="submit" onClick={(e) => e.preventDefault()} className="w-full bg-brand-500 text-white font-medium py-3.5 sm:py-4 rounded-xl hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/30 text-base sm:text-lg mt-2">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <CustomerReviews />
      </div>
    </div>
  );
}
