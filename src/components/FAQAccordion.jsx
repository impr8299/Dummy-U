import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FAQAccordion() {
  // Array of FAQ items
  const faqItems = [
    {
      question: "What does your platform do?",
      answer:
        "Our platform provides comprehensive SEO analytics and insights to help improve your website's visibility and ranking in search engine results.",
    },
    {
      question: "How does it help improve my search traffic?",
      answer:
        "By analyzing your site's performance, identifying keywords that drive traffic, and providing actionable recommendations to optimize content and structure.",
    },
    {
      question: "Is it like having an SEO expert on my team?",
      answer:
        "Yes! Our platform offers expert-level SEO analysis and recommendations without requiring you to hire a dedicated specialist.",
    },
    {
      question: "Do I need technical SEO knowledge to use the platform?",
      answer:
        "No, our platform is designed to be user-friendly for beginners while still offering advanced features for SEO professionals.",
    },
    {
      question: "How is data analyzed by the platform?",
      answer:
        "We use a combination of AI and machine learning algorithms to analyze your site data, competitor information, and search trends to provide valuable insights.",
    },
    {
      question: "Will the platform help me identify SEO trends?",
      answer:
        "Absolutely! Our platform continuously monitors industry trends and updates to provide you with the latest SEO strategies and opportunities.",
    },
  ];

  // State to track which item is open (null means all closed)
  const [openItem, setOpenItem] = useState(null);

  // Toggle function to open/close items
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null); // Close if already open
    } else {
      setOpenItem(index); // Open the clicked item
    }
  };

  return (
    <div className="min-h-screen bg-[#241C36] text-white flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">We've Got the Answers</h1>
        <h2 className="text-4xl font-bold mb-8">You're Looking For</h2>
        <p className="text-gray-400">
          Find answers to common queries about our product, features, and
          services. If you need more information, we're here to help!
        </p>
      </div>

      <div className="w-full max-w-2xl">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left bg-[#0C0512] rounded-lg p-4 flex justify-between items-center focus:outline-none hover:bg-gray-800 transition-colors"
            >
              <span className="font-medium">{item.question}</span>
              {openItem === index ? (
                <ChevronUp className="h-5 w-5 text-white" />
              ) : (
                <ChevronDown className="h-5 w-5 text-white" />
              )}
            </button>

            {openItem === index && (
              <div className="bg-gray-800 rounded-b-lg p-4 mt-1 text-gray-300">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
