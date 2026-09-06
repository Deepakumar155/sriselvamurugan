import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import CustomerReviews from '../components/CustomerReviews';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Construction Materials Supplier in Chennai & Chengalpattu | Sri Selvamurugan</title>
        <meta name="description" content="M-Sand, River Sand, Stone Jalli, Filling Gravel and Red Sand with JCB and lorry support across Chennai, Chengalpattu, Thiruporur, Kelambakkam, OMR and ECR." />
        <link rel="canonical" href="https://www.sriselvamurugan.com/" />
        <meta property="og:title" content="Construction Materials Supplier in Chennai & Chengalpattu | Sri Selvamurugan" />
        <meta property="og:description" content="M-Sand, River Sand, Stone Jalli, Filling Gravel, JCB work and lorry delivery across Chennai and nearby areas." />
        <meta property="og:url" content="https://www.sriselvamurugan.com/" />
      </Helmet>
      {/* Hero */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 bg-slate-900 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-900 to-slate-950"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30 mb-6 font-medium text-xs sm:text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              Premium Quality Supplier
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight"
            >
              M-Sand, River Sand & Construction Materials <span className="text-brand-500">for Chennai & Chengalpattu</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed font-light"
            >
              Order River Sand, M-Sand, Stone Jalli, Filling Gravel and Red Sand for your construction project, with JCB support and lorry delivery across Chennai, Chengalpattu, Thiruporur, Kelambakkam, OMR and ECR.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4"
            >
              <Link to="/materials" className="bg-brand-500 hover:bg-brand-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-500/30 text-base sm:text-lg">
                Explore Materials <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium flex items-center justify-center transition-all text-base sm:text-lg">
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-brand-dark dark:text-white">Construction materials for every stage of your project</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">Choose the material you need, then contact us with your quantity and delivery location. We supply across Chennai and nearby areas.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ['M-Sand', '/m-sand'], ['River Sand', '/river-sand'], ['Stone Jalli / Blue Metal', '/stone-jalli'], ['Filling Gravel', '/filling-gravel']
            ].map(([name, path]) => <Link key={path} to={path} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 font-semibold text-brand-dark dark:text-white hover:border-brand-500 transition-colors">{name} <span className="block mt-2 text-sm text-brand-600 dark:text-brand-400">Learn more &rarr;</span></Link>)}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><Link to="/jcb-lorry-services" className="text-brand-600 dark:text-brand-400 hover:underline">JCB & lorry services &rarr;</Link><Link to="/areas-we-serve" className="text-brand-600 dark:text-brand-400 hover:underline">Areas we serve &rarr;</Link></div>
        </div>
      </section>
      
      {/* Quick Services */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark dark:text-white mb-4">Premium Materials</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">High-grade sands and aggregates, strictly quality checked for all types of construction.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark dark:text-white mb-4">Logistics & Delivery</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Fast and reliable site delivery utilizing our fleet of tipper lorries for any bulk requirements.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-dark dark:text-white mb-4">Machinery Support</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">JCB excavators and earthmoving equipment for site preparation and material handling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & CEO Feature */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            <div className="lg:w-5/12 w-full flex justify-center">
              <div className="relative max-w-xs sm:max-w-sm w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-amber-600 rounded-[2rem] blur-lg opacity-40"></div>
                <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[3/4]">
                  <img
                    src="/images/founder.jpg"
                    alt="Founder and CEO of Sri Selvamurugan Transport & Suppliers"
                    width="681"
                    height="1024"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-7/12 w-full space-y-4 sm:space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 text-xs sm:text-sm font-semibold">
                Founder & CEO — Mr. V. Ruthrakotti, B.A.
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-dark dark:text-white leading-tight">
                Driven by Quality, Built on Trust
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Under the visionary leadership of our Founder & CEO, <strong>Mr. V. Ruthrakotti, B.A.</strong>, Sri Selvamurugan Transport & Suppliers is committed to setting the benchmark for reliability in sand supply, gravel aggregates, tipper logistics, and JCB earthworks across Chennai.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 font-semibold text-base transition-colors"
                >
                  Read Our Full Story & Mission &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Areas We Serve */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-brand-dark dark:text-white mb-4">Serving Chennai, Chengalpattu & Nearby Areas</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            We provide fast and reliable delivery of construction materials and machinery to construction sites across the greater Chennai region.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Chennai', 'Chengalpattu', 'Thiruporur', 'ECR', 'OMR', 'Tambaram', 'Pallavaram', 'Chromepet', 'Medavakkam', 'Sholinganallur', 'Kelambakkam', 'Vandalur', 'Perungalathur'].map(area => (
              <span key={area} className="px-4 py-2 bg-white dark:bg-slate-900 rounded-full text-brand-dark dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700 shadow-sm hover:border-brand-500 dark:hover:border-brand-500 transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
          <Link to="/areas-we-serve" className="inline-block mt-8 text-brand-600 dark:text-brand-400 font-semibold hover:underline">Explore our delivery areas &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
