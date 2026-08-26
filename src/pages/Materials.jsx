import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const materials = [
  {
    name: 'River Sand',
    description: 'Natural river sand ideal for masonry, concrete, and fine plastering work.',
    image: '/images/riversand.jpg'
  },
  {
    name: 'M-Sand',
    description: 'Manufactured sand specifically produced for robust concrete and heavy construction.',
    image: '/images/m-sand.jpg'
  },
  {
    name: 'Stone Jalli',
    description: 'Crushed stone aggregate for strong foundations, roads, and concrete mixtures.',
    image: '/images/stone-jalli.jpg'
  },
  {
    name: 'Filling Gravel',
    description: 'High-quality gravel for site filling, levelling, and drainage preparation.',
    image: '/images/filling-gravel.jpg'
  },
  {
    name: 'Red Sand',
    description: 'Selected red earth for specific landscaping and specialized construction needs.',
    image: '/images/red-sand.jpg'
  }
];

export default function Materials() {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Construction Materials | Sri Selvamurugan - River Sand, M-Sand, Stone Jalli</title>
        <meta name="description" content="Explore our premium range of construction materials available for delivery in Chennai, Chengalpattu, Thiruporur, ECR, OMR and surrounding areas. River Sand, M-Sand, Stone Jalli, and filling gravel." />
        <link rel="canonical" href="https://example.com/materials" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark dark:text-white mb-4">Our Materials</h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We supply only the finest construction materials, rigorously tested to ensure the structural integrity of your projects.</p>
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
                <img src={mat.image} alt={mat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-dark dark:text-white mb-3">{mat.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed text-sm sm:text-base">{mat.description}</p>
                <button className="text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 flex items-center gap-1 transition-colors w-fit text-sm sm:text-base">
                  Enquire Now &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
