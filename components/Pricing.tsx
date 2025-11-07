export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Complete Fitness Platform
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Everything you need to launch your professional fitness website with all essential features included
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-5xl mx-auto">
      {/* Header Row */}
      <div className="grid grid-cols-4 border-b border-gray-200 bg-slate-50">
        <div className="col-span-1 p-6">
          <h3 className="text-xl font-bold text-slate-900">Features</h3>
        </div>
        <div className="col-span-3 p-6 bg-blue-50 border-l border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">APEX Fitness Platform</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">$29</span>
                <span className="text-gray-600">one-time payment</span>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Feature Rows */}
      <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-slate-50 transition-colors">
        <div className="col-span-1 p-6 border-r border-gray-200">
          <h4 className="font-semibold text-slate-900 mb-1">Group Fitness Classes</h4>
          <p className="text-sm text-gray-600">Expert-led training sessions</p>
        </div>
        <div className="col-span-3 p-6 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-slate-50 transition-colors">
        <div className="col-span-1 p-6 border-r border-gray-200">
          <h4 className="font-semibold text-slate-900 mb-1">Flexible Scheduling</h4>
          <p className="text-sm text-gray-600">50+ weekly classes to choose from</p>
        </div>
        <div className="col-span-3 p-6 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-slate-50 transition-colors">
        <div className="col-span-1 p-6 border-r border-gray-200">
          <h4 className="font-semibold text-slate-900 mb-1">Premium Equipment</h4>
          <p className="text-sm text-gray-600">State-of-the-art facilities</p>
        </div>
        <div className="col-span-3 p-6 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-slate-50 transition-colors">
        <div className="col-span-1 p-6 border-r border-gray-200">
          <h4 className="font-semibold text-slate-900 mb-1">Community Support</h4>
          <p className="text-sm text-gray-600">Supportive atmosphere & motivation</p>
        </div>
        <div className="col-span-3 p-6 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-slate-50 transition-colors">
        <div className="col-span-1 p-6 border-r border-gray-200">
          <h4 className="font-semibold text-slate-900 mb-1">Personal Training</h4>
          <p className="text-sm text-gray-600">Customized workout programs</p>
        </div>
        <div className="col-span-3 p-6 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-4 hover:bg-slate-50 transition-colors">
        <div className="col-span-1 p-6 border-r border-gray-200">
          <h4 className="font-semibold text-slate-900 mb-1">Results-Driven</h4>
          <p className="text-sm text-gray-600">Proven approach to fitness goals</p>
        </div>
        <div className="col-span-3 p-6 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-50 p-8 text-center border-t border-gray-200">
        <p className="text-gray-600 mb-4">Ready to transform your fitness business?</p>
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
        >
          Get Started - $29
        </button>
      </div>
    </div>
  </div>
</section>
  );
}