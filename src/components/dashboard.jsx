import { BarChart, DollarSign, Eye, Globe, LogIn } from "lucide-react";
import Header from "./header";
import ActiveUsersChart from "./ui/activeUserChart";
import CountryDataCard from "./ui/countryDataCard";
import SeoScoreCard from "./ui/SeoScoreCard";
import StatCard from "./ui/StatCard";
import UserTrackingCard from "./ui/UserTrackingCard";
import VisibilityChartCard from "./ui/VisibilityChartCard";
import Login from "./login";
import PricingPlans from "./PricingPlans";
import FAQAccordion from "./FAQAccordion";
import Footer from "./footer";
import Flow from "./flow";
import SmartIndicatorsSection from "./SmartIndicatorsSection";
import FeaturesGrid from "./FeatureGrid";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full bg-[#0C0512">
      <Header />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            value="67%"
            label="Visibility"
            delta="+55%"
            icon={Eye}
            iconBgColor="bg-purple-600"
          />
          <StatCard
            value="22.5K"
            label="Traffic"
            delta="+263"
            icon={Globe}
            iconBgColor="bg-indigo-600"
          />
          <StatCard
            value="12.3"
            label="Position Avg."
            delta="+3.2"
            icon={BarChart}
            iconBgColor="bg-blue-600"
          />
          <StatCard
            value="$223"
            label="Ads Revenue"
            delta="+8%"
            icon={DollarSign}
            iconBgColor="bg-purple-600"
          />
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-3 gap-6">
          <VisibilityChartCard />
          <SeoScoreCard />
          <UserTrackingCard />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-6">
          <CountryDataCard />
          <ActiveUsersChart />
        </div>
        <FeaturesGrid />
        <Login />
        <SmartIndicatorsSection />
        <PricingPlans />
        <Flow />
        <FAQAccordion />
        <img src="/Template.png" alt="" />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
