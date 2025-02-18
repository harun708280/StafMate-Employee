export default function PricingPlans() {
    return (
      <section className="py-16 mt-12 bg-primary bg-opacity-30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Choose Your Plan</h2>
          <p className="text-white mt-2">Find the plan that fits your needs.</p>
        </div>
  
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Basic</h3>
            <p className="text-4xl font-bold text-secondary mt-2">$19<span className="text-lg">/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ 5 Projects</li>
              <li>✔ Basic Support</li>
              <li>✔ Community Access</li>
            </ul>
            <button className="mt-6 w-full bg-secondary text-white py-2 rounded-xl hover:bg-blue-700">
              Get Started
            </button>
          </div>
  
          {/* Standard Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-secondary">
            <h3 className="text-xl font-semibold text-gray-700">Standard</h3>
            <p className="text-4xl font-bold text-secondary mt-2">$49<span className="text-lg">/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ 20 Projects</li>
              <li>✔ Priority Support</li>
              <li>✔ Advanced Features</li>
            </ul>
            <button className="mt-6 w-full bg-secondary text-white py-2 rounded-xl hover:bg-blue-700">
              Get Started
            </button>
          </div>
  
          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Pro</h3>
            <p className="text-4xl font-bold text-secondary mt-2">$99<span className="text-lg">/mo</span></p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><span className="">✔</span> Unlimited Projects</li>
              <li>✔ 24/7 Premium Support</li>
              <li>✔ All Features Included</li>
            </ul>
            <button className="mt-6 w-full bg-secondary text-white py-2 rounded-xl hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
  }
  