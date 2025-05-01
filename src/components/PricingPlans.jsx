import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      tagline: "Individual",
      description: "Essential features for startups and small teams.",
      monthlyPrice: 39.99,
      yearlyPrice: 399.99,
      features: [
        { name: "30+ Features", included: true },
        { name: "Priority Support", included: true },
        { name: "4 Team Members", included: true },
        { name: "Premium Features", included: true },
        { name: "Data Insights", included: true },
        { name: "Gen AI Report", included: false },
      ],
    },
    {
      name: "Standard",
      tagline: "2 to 10 Users",
      description: "Advanced tools for scaling and growing businesses.",
      monthlyPrice: 69.99,
      yearlyPrice: 699.99,
      isPopular: true,
      features: [
        { name: "Access 80+ Enterprise Features", included: true },
        { name: "Priority Support", included: true },
        { name: "10 Team Members", included: true },
        { name: "Premium Features", included: true },
        { name: "Unlimited Data Insights", included: true },
        { name: "Gen AI Report", included: true },
      ],
    },
    {
      name: "Enterprise",
      tagline: "10+ Users",
      description:
        "Full customization and premium support for large organizations.",
      monthlyPrice: 119.99,
      yearlyPrice: 1199.99,
      features: [
        { name: "Access All Features", included: true },
        { name: "Priority Support", included: true },
        { name: "Unlimited Members", included: true },
        { name: "Premium Features", included: true },
        { name: "Unlimited Data Insights", included: true },
        { name: "Custom Gen AI Report", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Innovative Pricing for
            <br />
            Modern Needs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our range of plans designed to help you maximize your
            search performance, from basic insights to advanced analytics and
            customization.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-purple-950/50 rounded-full p-1 border border-purple-900/50">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-purple-700 text-white shadow-md"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "yearly"
                  ? "bg-purple-700 text-white shadow-md"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              billingCycle={billingCycle}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PricingCard({ plan, billingCycle, isPopular }) {
  const price =
    billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

  return (
    <div
      className={`bg-purple-950/30 backdrop-blur-sm rounded-xl overflow-hidden border ${
        isPopular ? "border-blue-500/50" : "border-purple-900/50"
      } transition-all hover:scale-[1.02] hover:shadow-xl`}
      style={{
        boxShadow: isPopular
          ? "0 0 20px rgba(56, 189, 248, 0.2)"
          : "0 0 20px rgba(139, 92, 246, 0.1)",
      }}
    >
      <div className="p-8">
        {/* Plan name */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
          <span className="text-xs text-gray-400 bg-purple-900/40 px-3 py-1 rounded-full">
            {plan.tagline}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-8">{plan.description}</p>

        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              {feature.included ? (
                <CheckCircle
                  size={18}
                  className="text-blue-500 mr-2 flex-shrink-0"
                />
              ) : (
                <XCircle
                  size={18}
                  className="text-gray-500 mr-2 flex-shrink-0"
                />
              )}
              <span
                className={feature.included ? "text-gray-300" : "text-gray-500"}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-white">
              ${price.toFixed(2)}
            </span>
            <span className="text-gray-500 ml-2">
              /{billingCycle === "monthly" ? "per month" : "per year"}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-full transition-all shadow-lg shadow-purple-500/20">
          Get Started
        </button>
      </div>
    </div>
  );
}
