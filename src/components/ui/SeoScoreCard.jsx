import Card from "./card";
import CircularProgress from "./circularProgress";

const SeoScoreCard = () => {
  return (
    <Card title="SEO Score" subtitle="Basis on daily analysis">
      <div className="flex flex-col items-center justify-center">
        <CircularProgress percentage={82} color="#3B82F6">
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold">82%</h2>
            <p className="text-gray-400 text-sm">Optimized</p>
          </div>
        </CircularProgress>

        <div className="w-full mt-6 flex justify-between text-sm">
          <span className="text-gray-400">0%</span>
          <span className="text-gray-400">100%</span>
        </div>
      </div>
    </Card>
  );
};

export default SeoScoreCard;
