import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const areas = ['Chennai', 'Tambaram', 'Pallavaram', 'Chromepet', 'Medavakkam', 'Perungalathur', 'Vandalur', 'Guduvanchery', 'OMR', 'ECR', 'Sholinganallur', 'Kelambakkam', 'Thiruporur', 'Chengalpattu'];
const canonical = 'https://www.sriselvamurugan.com/areas-we-serve';

export default function Areas() {
  const schema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sriselvamurugan.com/' }, { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: canonical }] };
  return <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
    <Helmet>
      <title>Construction Material Delivery Areas | Chennai & Nearby Locations</title>
      <meta name="description" content="Sri Selvamurugan supplies construction materials and provides lorry delivery across Chennai, Tambaram, Pallavaram, OMR, ECR, Thiruporur, Chengalpattu and nearby areas." />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content="Construction Material Delivery Areas | Sri Selvamurugan" />
      <meta property="og:description" content="Explore Chennai and nearby areas served for construction material supply, lorry transport and JCB work." />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400 mb-8"><Link to="/" className="hover:text-brand-500">Home</Link> <span aria-hidden="true">/</span> <span>Areas We Serve</span></nav>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark dark:text-white text-center">Construction Material Delivery Areas</h1>
      <p className="mt-5 max-w-3xl mx-auto text-center text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">Sri Selvamurugan supplies M-Sand, River Sand, Stone Jalli, Filling Gravel and Red Sand, with JCB and lorry support for construction sites in Chennai and surrounding locations.</p>
      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark dark:text-white">Areas we serve</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Tell us your delivery location and material requirement so we can confirm availability and transport options for your site.</p>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{areas.map(area => <li key={area} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 font-medium text-brand-dark dark:text-white">{area}</li>)}</ul>
      </section>
      <section className="mt-14 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-display font-bold text-brand-dark dark:text-white">Planning a delivery?</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">For a faster quote, share the material needed, approximate quantity and site location.</p>
        <div className="mt-5 flex flex-wrap gap-3"><Link to="/materials" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">Explore materials &rarr;</Link><Link to="/contact" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">Request a quote &rarr;</Link></div>
      </section>
    </div>
  </div>;
}
