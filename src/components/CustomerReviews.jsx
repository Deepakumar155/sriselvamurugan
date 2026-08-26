import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquareQuote, CheckCircle2, User, Send, Plus, X } from 'lucide-react';

const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "OMR, Chennai",
    role: "Contractor",
    rating: 5,
    date: "2 days ago",
    comment: "Top notch quality M-Sand and River Sand! Sri Selvamurugan delivered 3 lorry loads directly to our site on OMR without any delay. Highly recommended.",
    verified: true
  },
  {
    id: 2,
    name: "K. Selvan",
    location: "Chengalpattu",
    role: "Building Owner",
    rating: 5,
    date: "1 week ago",
    comment: "Booked JCB machinery and 20mm aggregates. Operator was very skilled and completed the site excavation smoothly. Reasonable pricing too.",
    verified: true
  },
  {
    id: 3,
    name: "Anitha R.",
    location: "ECR, Chennai",
    role: "Home Owner",
    rating: 5,
    date: "2 weeks ago",
    comment: "Very polite and transparent pricing. Delivered pure river sand for our home renovation. Excellent service and fast response!",
    verified: true
  }
];

export default function CustomerReviews() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('ss_customer_reviews');
      return saved ? JSON.parse(saved) : DEFAULT_REVIEWS;
    } catch {
      return DEFAULT_REVIEWS;
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('ss_customer_reviews', JSON.stringify(reviews));
    } catch (err) {
      console.error("Could not save reviews to localStorage", err);
    }
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      location: location.trim() || 'Chennai',
      role: role.trim() || 'Customer',
      rating,
      date: 'Just now',
      comment: comment.trim(),
      verified: true
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setLocation('');
    setRole('');
    setRating(5);
    setComment('');
    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 mb-3 text-xs sm:text-sm font-semibold">
              <MessageSquareQuote size={16} />
              Customer Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-brand-dark dark:text-white tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-lg max-w-xl">
              Real reviews from contractors, builders, and homeowners across Chennai.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-brand-500/30 shrink-0 text-sm sm:text-base w-full sm:w-auto"
          >
            {showForm ? <X size={18} /> : <Plus size={18} />}
            {showForm ? 'Close Form' : 'Write a Review'}
          </button>
        </div>

        {/* Review Form Drawer */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8 sm:mb-12"
            >
              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl max-w-3xl mx-auto transition-colors">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-dark dark:text-white mb-2">
                  Share Your Experience
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-6">
                  Your feedback helps us maintain our high standard of quality and service.
                </p>

                {successMessage ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-5 sm:p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-2xl flex items-center gap-4"
                  >
                    <CheckCircle2 size={28} className="text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">Thank you for your review!</h4>
                      <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">Your review has been published and is now visible on our website.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Rating selector */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Rating
                      </label>
                      <div className="flex gap-1.5 sm:gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star
                              size={24}
                              className={`transition-colors ${
                                star <= (hoverRating || rating)
                                  ? 'text-amber-400 fill-amber-400'
                                  : 'text-slate-300 dark:text-slate-600'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. OMR, Chennai"
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Role / Project Type
                        </label>
                        <input
                          type="text"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="e.g. Home Owner, Contractor"
                          className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Review *
                      </label>
                      <textarea
                        required
                        rows="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tell us about the material quality, delivery speed, or JCB service..."
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 sm:py-3.5 rounded-xl transition-all shadow-md shadow-brand-500/20 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Send size={18} />
                      Submit Review
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < rev.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 dark:text-slate-700"}
                      />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/50">
                      <CheckCircle2 size={12} /> Verified
                    </span>
                  )}
                </div>

                {/* Comment */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                  {rev.name ? rev.name.charAt(0).toUpperCase() : <User size={18} />}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark dark:text-white text-sm sm:text-base leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {rev.role && `${rev.role} • `}{rev.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
