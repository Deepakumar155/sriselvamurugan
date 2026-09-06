import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const materials = [
  {
    name: 'River Sand',
    route: '/river-sand',
    alt: 'River sand for construction work',
    description: 'Natural River Sand for masonry, concrete and fine plastering work. Contact us to check availability and delivery to your Chennai-area site.',
    image: '/images/riversand.jpg'
  },
  {
    name: 'M-Sand',
    route: '/m-sand',
    alt: 'M-Sand for construction material supply',
    description: 'M-Sand (manufactured sand) for concrete, block work and heavy construction. Available with direct lorry delivery.',
    image: '/images/m-sand.jpg'
  },
  {
    name: 'Stone Jalli',
    route: '/stone-jalli',
    alt: 'Stone jalli construction aggregate',
    description: 'Stone Jalli / crushed aggregate for foundations, roads and concrete mixtures, supplied for residential and commercial projects.',
    image: '/images/stone-jalli.jpg'
  },
  {
    name: 'Filling Gravel',
    route: '/filling-gravel',
    alt: 'Filling gravel for site preparation',
    description: 'Filling Gravel for site filling, levelling and drainage preparation. Ask for the right quantity for your site.',
    image: '/images/filling-gravel.jpg'
  },
  {
    name: 'Red Sand',
    route: '/red-sand',
    alt: 'Red sand for filling and landscaping work',
    description: 'Red Sand for filling, landscaping and selected construction requirements, delivered to sites across Chennai and nearby areas.',
    image: '/images/red-sand.jpg'
  }
];

export default function Materials() {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>River Sand, M-Sand & Construction Materials | Sri Selvamurugan</title>
        <meta name="description" content="Explore River Sand, M-Sand, Stone Jalli, Filling Gravel and Red Sand with delivery across Chennai, Chengalpattu, Thiruporur, Kelambakkam, OMR and ECR." />
        <link rel="canonical" href="https://www.sriselvamurugan.com/materials" />
        <meta property="og:title" content="River Sand, M-Sand & Construction Materials | Sri Selvamurugan" />
        <meta property="og:description" content="Explore construction materials supplied with delivery across Chennai and nearby areas." />
        <meta property="og:url" content="https://www.sriselvamurugan.com/materials" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark dark:text-white mb-4">River Sand, M-Sand & Construction Materials</h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">Sri Selvamurugan supplies River Sand, M-Sand, Stone Jalli, Filling Gravel and Red Sand for sites across Chennai, OMR, ECR, Thiruporur, Kelambakkam and Chengalpattu.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {materials.map((mat, index) => (
            <motion.div 
              key={mat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col"
            >
              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden relative group">
                <img src={mat.image} alt={mat.alt || mat.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-dark dark:text-white mb-3">{mat.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed text-sm sm:text-base">{mat.description}</p>
                <Link to={mat.route || '/contact'} className="text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 flex items-center gap-1 transition-colors w-fit text-sm sm:text-base">
                  Learn More & Enquire &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark dark:text-white mb-6 text-center">Construction Material Delivery FAQs</h2>
          <div className="space-y-4">
            <details className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
              <summary className="font-semibold text-brand-dark dark:text-white cursor-pointer">Which construction materials do you supply in Chennai?</summary>
              <p className="mt-3 text-slate-600 dark:text-slate-400">We supply River Sand, M-Sand, Stone Jalli, Filling Gravel and Red Sand for construction and site-development requirements.</p>
            </details>
            <details className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
              <summary className="font-semibold text-brand-dark dark:text-white cursor-pointer">Which areas do you deliver to?</summary>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Delivery is available across Chennai and nearby areas including OMR, ECR, Thiruporur, Chengalpattu, Tambaram, Medavakkam, Sholinganallur and Kelambakkam.</p>
            </details>
            <details className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
              <summary className="font-semibold text-brand-dark dark:text-white cursor-pointer">How can I request a material quote?</summary>
              <p className="mt-3 text-slate-600 dark:text-slate-400">Call or WhatsApp us with the material, approximate quantity and delivery location, or use our contact page to request a quote.</p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
