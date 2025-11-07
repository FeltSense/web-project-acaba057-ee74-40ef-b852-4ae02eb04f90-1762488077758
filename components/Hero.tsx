export default function Hero() {
  return (
    <section className="bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Content */}
      <div className="flex flex-col justify-center px-8 py-24 lg:px-16">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Transform Your Fitness Journey with Expert Guidance
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Join APEX Fitness for expert-led group classes, flexible scheduling with 50+ weekly sessions, and access to state-of-the-art equipment designed to help you reach your goals.
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Expert-Led Group Classes</h3>
                <p className="text-slate-600">Train with certified instructors who bring years of experience and personalized attention to every session.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">50+ Weekly Classes</h3>
                <p className="text-slate-600">Flexible scheduling that fits your lifestyle with classes from early morning to evening, seven days a week.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">State-of-the-Art Facilities</h3>
                <p className="text-slate-600">Premium equipment and modern amenities designed to elevate your workout experience.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
              View Class Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative lg:min-h-screen">
        <img 
          src="https://picsum.photos/1200/1400" 
          alt="APEX Fitness training facility with modern equipment and group fitness class" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
      </div>
    </div>
  </div>
</section>
  );
}