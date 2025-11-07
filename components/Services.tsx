export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Elevate Your Fitness Journey
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Discover comprehensive fitness solutions designed to help you achieve your goals with expert guidance and premium facilities
      </p>
    </div>

    {/* Tab Navigation */}
    <div className="flex flex-wrap justify-center gap-3 mb-12 border-b border-gray-200 pb-6">
      <button className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg shadow-sm transition-all hover:bg-slate-800">
        Group Classes
      </button>
      <button className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
        Scheduling
      </button>
      <button className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
        Facilities
      </button>
      <button className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
        Community
      </button>
    </div>

    {/* Tab Content - Group Classes */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
          Expert-Led Training
        </div>
        <h3 className="text-3xl font-bold text-slate-900">
          Group Fitness Classes
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          Experience the energy and motivation of group training with our certified instructors. From high-intensity interval training to yoga and strength conditioning, our diverse class offerings cater to all fitness levels and preferences.
        </p>
        
        <div className="grid gap-4 pt-4">
          <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Certified Instructors</h4>
              <p className="text-sm text-slate-600">Industry-certified professionals with years of experience</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">All Fitness Levels</h4>
              <p className="text-sm text-slate-600">Modifications and progressions for beginners to advanced</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Diverse Class Types</h4>
              <p className="text-sm text-slate-600">HIIT, yoga, spin, strength training, boxing, and more</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-3">
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
            <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-slate-900">HIIT Classes</h4>
          <p className="text-sm text-slate-600">High-intensity workouts for maximum calorie burn and endurance</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-3 mt-8">
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
            <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-slate-900">Yoga & Pilates</h4>
          <p className="text-sm text-slate-600">Mind-body connection with flexibility and core strength focus</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-3">
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
            <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-slate-900">Strength Training</h4>
          <p className="text-sm text-slate-600">Build muscle and increase power with guided resistance work</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-3 mt-8">
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
            <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-slate-900">Cycling Studio</h4>
          <p className="text-sm text-slate-600">Energetic spin classes with motivating music and coaching</p>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
        <div className="text-sm text-slate-600 font-medium">Weekly Classes</div>
      </div>
      <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
        <div className="text-sm text-slate-600 font-medium">Class Types</div>
      </div>
      <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="text-3xl font-bold text-slate-900 mb-2">20+</div>
        <div className="text-sm text-slate-600 font-medium">Expert Trainers</div>
      </div>
      <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="text-3xl font-bold text-slate-900 mb-2">6am-10pm</div>
        <div className="text-sm text-slate-600 font-medium">Daily Hours</div>
      </div>
    </div>
  </div>
</section>
  );
}