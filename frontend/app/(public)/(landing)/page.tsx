export default function LandingPage() {
  return (
    <section className="mx-6 md:mx-20 my-16 bg-primary rounded-3xl overflow-hidden shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="p-10 lg:p-20 lg:w-3/5 text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Turn Your Passion Into a Career
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Join our global community of local experts and share the soul of
            your city with travelers from around the world. Set your own
            schedule, prices, and build your brand.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary font-bold py-4 px-10 rounded-xl shadow-lg hover:scale-105 transition-transform">
              Apply to Guide
            </button>
            <button className="bg-blue-600 text-white font-bold py-4 px-10 rounded-xl border border-blue-400 hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
