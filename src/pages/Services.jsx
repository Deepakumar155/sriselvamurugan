import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  return (
    <div className="py-20 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>JCB & Lorry Services | Sri Selvamurugan Transport Chennai</title>
        <meta name="description" content="Expert JCB excavation and lorry transportation services for construction sites across Chennai, Chengalpattu, Thiruporur, ECR, OMR, Tambaram, and Medavakkam. Reliable material delivery." />
        <link rel="canonical" href="https://www.sriselvamurugan.com/services" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark dark:text-white mb-4">Our Services</h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Beyond material supply, we offer the heavy machinery and transportation logistics needed to execute your project flawlessly.</p>
        </div>

        <div className="space-y-12 sm:space-y-24">
          {/* JCB Service */}
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark dark:text-white mb-4 sm:mb-6">JCB & Earthwork Services</h2>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Site preparation is the foundation of any good construction. Our well-maintained fleet of JCBs and experienced operators are ready to handle site clearing, trenching, levelling, and foundation excavation.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {['Site Clearing & Levelling', 'Foundation Trenching', 'Material Loading/Unloading', 'Debris Removal'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="text-brand-500 shrink-0" size={22} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img src="/images/jcb.jpg" alt="JCB Service" className="w-full h-56 sm:h-80 lg:h-[400px] object-cover relative z-0" />
              </div>
            </div>
          </div>

          {/* Lorry Service */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark dark:text-white mb-4 sm:mb-6">Lorry & Tipper Logistics</h2>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Timely delivery of bulk materials is critical. We operate a fleet of tipper lorries capable of transporting sand, gravel, and jalli directly to your site, exactly when you need it.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {['Bulk Material Delivery', 'Multi-Site Logistics', 'Flexible Load Capacities', 'Timely Supply Chain'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="text-brand-500 shrink-0" size={22} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img src="/images/lorry.jpg" alt="Lorry Transport" className="w-full h-56 sm:h-80 lg:h-[400px] object-cover relative z-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
