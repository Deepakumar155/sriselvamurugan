import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Phone } from 'lucide-react';

const siteUrl = 'https://www.sriselvamurugan.com';
const phone = '+919962675329';
const whatsapp = 'https://wa.me/919962675329?text=Hello%20Sri%20Selvamurugan%20Transport,%20I%20would%20like%20to%20request%20a%20quote.';

const pages = {
  'm-sand-supplier-chennai': {
    name: 'M-Sand', route: 'm-sand-supplier-chennai', image: '/images/m-sand.jpg',
    title: 'M-Sand Supplier in Chennai | Delivery & Quotes | Sri Selvamurugan',
    description: 'Order M-Sand for concrete, block work and construction projects in Chennai. Sri Selvamurugan provides dependable M-Sand supply and lorry delivery to OMR, ECR, Tambaram, Thiruporur and Chengalpattu.',
    intro: 'M-Sand, or manufactured sand, is a finely processed aggregate used in many concrete and masonry applications. We help contractors, builders and homeowners arrange M-Sand supply with delivery planned around their site requirements.',
    uses: ['Concrete and RCC work', 'Block work and masonry', 'Residential and commercial construction'],
    imageAlt: 'M-Sand stock for construction material delivery',
    faqs: [['What is M-Sand used for?', 'M-Sand is commonly used for concrete, masonry and block work. The right material and quantity depend on the work being carried out, so tell us about your project when requesting a quote.'], ['Can you deliver M-Sand to my site?', 'We arrange lorry delivery of M-Sand across Chennai and nearby service areas. Share your location and required quantity so we can confirm availability.']]
  },
  'river-sand-supplier-chennai': {
    name: 'River Sand', route: 'river-sand-supplier-chennai', image: '/images/riversand.jpg',
    title: 'River Sand Supplier in Chennai | Delivery & Quotes | Sri Selvamurugan',
    description: 'Need River Sand in Chennai? Contact Sri Selvamurugan for River Sand supply and lorry delivery for masonry, concrete and plastering projects across Chennai and nearby areas.',
    intro: 'River Sand is used for a range of construction tasks, including masonry, concrete and fine plastering work. We make it simple to enquire about available River Sand and arrange transport to your construction site.',
    uses: ['Masonry and brickwork', 'Concrete work', 'Fine plastering applications'],
    imageAlt: 'River sand ready for construction delivery',
    faqs: [['What projects use River Sand?', 'River Sand may be used in masonry, concrete and plastering work. Discuss your application with your engineer or contractor before placing an order.'], ['How do I order River Sand?', 'Call or WhatsApp with the required material, approximate quantity and delivery location. Our team will help you check supply and delivery options.']]
  },
  'stone-jalli-supplier-chennai': {
    name: 'Stone Jalli / Blue Metal', route: 'stone-jalli-supplier-chennai', image: '/images/stone-jalli.jpg',
    title: 'Stone Jalli & Blue Metal Supplier in Chennai | Sri Selvamurugan',
    description: 'Source Stone Jalli and Blue Metal for concrete, foundations and road work in Chennai. Arrange material supply and lorry delivery with Sri Selvamurugan.',
    intro: 'Stone Jalli, also called Blue Metal, is crushed stone aggregate used where a stable, durable base or concrete mix is needed. We supply aggregate for building and site-development requirements with direct lorry transport.',
    uses: ['Concrete mixtures', 'Foundations and base preparation', 'Road and site-development work'],
    imageAlt: 'Stone jalli blue metal aggregate for construction',
    faqs: [['Is Stone Jalli the same as Blue Metal?', 'Stone Jalli is commonly referred to as Blue Metal or crushed stone aggregate. Let us know the application so we can discuss your material requirement.'], ['Where do you deliver Stone Jalli?', 'We supply and arrange delivery to Chennai, OMR, ECR, Tambaram, Sholinganallur, Kelambakkam, Thiruporur, Chengalpattu and other nearby areas.']]
  },
  'filling-gravel-supplier-chennai': {
    name: 'Filling Gravel', route: 'filling-gravel-supplier-chennai', image: '/images/filling-gravel.jpg',
    title: 'Filling Gravel Supplier in Chennai | Site Filling Delivery',
    description: 'Arrange Filling Gravel for levelling, drainage and site preparation in Chennai. Sri Selvamurugan supplies filling material with lorry delivery to nearby construction sites.',
    intro: 'Filling Gravel supports site preparation before construction begins. It can be used for filling, levelling and drainage preparation, depending on the site plan. We supply filling material and coordinate lorry delivery to your location.',
    uses: ['Site filling and levelling', 'Drainage preparation', 'Pre-construction ground preparation'],
    imageAlt: 'Filling gravel for site levelling and preparation',
    faqs: [['What is Filling Gravel used for?', 'Filling Gravel is generally used for site filling, levelling and drainage preparation. Your contractor or engineer can advise on the right material for your ground conditions.'], ['Can Filling Gravel be delivered by lorry?', 'Yes. Share your site location and approximate requirement to discuss lorry delivery and material availability.']]
  },
  'jcb-lorry-services-chennai': {
    name: 'JCB & Lorry Services', route: 'jcb-lorry-services-chennai', image: '/images/jcb.jpg', schemaType: 'Service',
    title: 'JCB & Lorry Services in Chennai | Sri Selvamurugan Transport',
    description: 'Book JCB earthwork and lorry transport services in Chennai. Sri Selvamurugan supports site clearing, levelling, excavation and construction-material delivery across Chennai and nearby areas.',
    intro: 'Construction projects need dependable machinery and transport as well as the right materials. Our JCB and lorry services support site clearing, levelling, excavation, loading and direct delivery of construction materials.',
    uses: ['Site clearing, levelling and excavation', 'Material loading and unloading', 'Construction-material lorry delivery'],
    imageAlt: 'JCB earthwork equipment at a construction site',
    faqs: [['What JCB work do you support?', 'We support site clearing, levelling, foundation excavation, trenching and material handling. Explain your site requirement when you contact us.'], ['Can you deliver construction materials by lorry?', 'Yes. Our lorry service supports delivery of construction materials to sites in Chennai and nearby service areas.']]
  }
};

export default function MaterialLanding({ pageKey }) {
  const page = pages[pageKey];
  const canonical = `${siteUrl}/${page.route}`;
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      {
        '@type': 'Service',
        name: page.name,
        serviceType: page.schemaType === 'Service' ? page.name : `${page.name} supply`,
        description: page.intro,
        image: `${siteUrl}${page.image}`,
        url: canonical,
        provider: { '@id': `${siteUrl}/#business` }
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: page.name, item: canonical }
      ] }
    ]
  };

  return <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400 mb-8"><Link to="/" className="hover:text-brand-500">Home</Link> <span aria-hidden="true">/</span> <Link to="/materials" className="hover:text-brand-500">Materials</Link> <span aria-hidden="true">/</span> <span>{page.name}</span></nav>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-dark dark:text-white leading-tight">{page.schemaType === 'Service' ? `${page.name} in Chennai` : `${page.name} Supplier in Chennai`}</h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{page.intro}</p>
          <h2 className="mt-8 text-2xl font-display font-bold text-brand-dark dark:text-white">Common applications</h2>
          <ul className="mt-4 space-y-3">{page.uses.map(use => <li key={use} className="flex gap-3 text-slate-600 dark:text-slate-300"><CheckCircle2 className="text-brand-500 shrink-0" size={20} />{use}</li>)}</ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={`tel:${phone}`} className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3.5 rounded-xl font-medium text-center inline-flex justify-center items-center gap-2"><Phone size={18} />Call for a Quote</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="border border-brand-500 text-brand-600 dark:text-brand-400 px-6 py-3.5 rounded-xl font-medium text-center">WhatsApp Us</a>
          </div>
        </div>
        <img src={page.image} alt={page.imageAlt} width="1080" height="1512" className="w-full max-h-[520px] object-cover rounded-3xl shadow-xl" />
      </div>
      <section className="mt-16 sm:mt-24 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark dark:text-white">Supply and delivery areas</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">We arrange material delivery to construction sites in Chennai, Tambaram, Pallavaram, Chromepet, Medavakkam, Perungalathur, Vandalur, Guduvanchery, OMR, ECR, Sholinganallur, Kelambakkam, Thiruporur and Chengalpattu. Delivery availability depends on the site location and material requirement.</p>
        <Link to="/areas-we-serve" className="inline-block mt-4 text-brand-600 dark:text-brand-400 font-semibold hover:underline">View all areas we serve &rarr;</Link>
      </section>
      <section className="mt-14 sm:mt-20 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark dark:text-white">{page.name} FAQs</h2>
        <div className="mt-6 space-y-4">{page.faqs.map(([question, answer]) => <details key={question} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5"><summary className="font-semibold cursor-pointer text-brand-dark dark:text-white">{question}</summary><p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{answer}</p></details>)}</div>
      </section>
      <section className="mt-14 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-display font-bold text-brand-dark dark:text-white">Need {page.name} for your project?</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Tell us your material requirement, approximate quantity and delivery location. We will help you enquire about supply and lorry delivery.</p>
        <Link to="/contact" className="inline-block mt-5 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-medium">Request a Quote</Link>
      </section>
    </div>
  </div>;
}
