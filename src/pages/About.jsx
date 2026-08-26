import { Helmet } from 'react-helmet-async';
import { Award, ShieldCheck, Truck, Users, Quote } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>About Us | Sri Selvamurugan Transport & Suppliers</title>
        <meta name="description" content="Meet the Founder & CEO of Sri Selvamurugan Transport & Suppliers. Learn about our commitment to quality sand, aggregates, JCB services, and tipper lorry logistics across Chennai." />
        <link rel="canonical" href="https://www.sriselvamurugan.com/about" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-4 text-xs sm:text-sm font-semibold">
            <Award size={16} />
            Delivering Trust, Every Time
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark dark:text-white mb-4">
            About Sri Selvamurugan
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Your trusted partner in building stronger infrastructure. Specializing in high-grade raw materials, JCB earthworks, and tipper lorry logistics across Chennai and Tamil Nadu.
          </p>
        </div>

        {/* Founder & CEO Feature Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 mb-16 sm:mb-24 transition-colors">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Founder Photo */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="relative group max-w-md w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-amber-600 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800 aspect-[3/4]">
                  <img
                    src="/images/founder.jpg"
                    alt="Founder and CEO of Sri Selvamurugan Transport & Suppliers"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">Founder & CEO</span>
                    <h3 className="text-2xl font-display font-bold mt-1">Mr. V. Ruthrakotti, B.A.</h3>
                    <p className="text-sm text-slate-300 mt-1">Sri Selvamurugan Transport & Suppliers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Message / Bio */}
            <div className="lg:w-1/2 w-full space-y-6">
              <div className="inline-flex items-center gap-2 text-brand-500 font-semibold text-sm">
                <Quote size={20} className="text-brand-500" />
                <span>Message From Mr. V. Ruthrakotti, B.A.</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-brand-dark dark:text-white leading-tight">
                "Delivering Trust, Every Time is Not Just Our Motto — It's Our Promise."
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Founded by <strong>Mr. V. Ruthrakotti, B.A.</strong> with a strong commitment to quality and punctuality, Sri Selvamurugan Transport & Suppliers has grown into one of Chennai's most dependable partners for construction materials and heavy equipment logistics.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether supplying pure River Sand and certified M-Sand for high-rises or deploying JCB earthmovers for site excavation, we ensure that every customer receives uncompromised quality, exact weight, and on-time site delivery.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center font-bold">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark dark:text-white text-sm">100% Certified</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Quality Assured</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center font-bold">
                    <Truck size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark dark:text-white text-sm">Direct Delivery</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">On-Time Logistics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
          <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold font-display">01</div>
            <h3 className="text-2xl font-display font-bold text-brand-dark dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
              To provide the construction industry with the highest quality raw materials seamlessly, supported by exceptional logistics and heavy machinery services, ensuring every project foundation is rock solid.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center mb-6 text-xl font-bold font-display">02</div>
            <h3 className="text-2xl font-display font-bold text-brand-dark dark:text-white mb-4">Why Choose Us</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
              We stand out through our dedication to honest pricing, direct site transport, and well-maintained machinery. From site clearing to material delivery, we cover your complete project lifecycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
