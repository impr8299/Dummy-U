import Card from "./card";
import CircularProgress from "./circularProgress";

const UserTrackingCard = () => {
  return (
    <Card title="User Tracking" showMoreOptions>
      <div className="flex justify-between gap-4">
        <div className="space-y-4">
          <div className="bg-purple-900 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Active user</p>
            <p className="text-white text-xl font-medium">14 people</p>
          </div>

          <div className="bg-purple-900 rounded-lg p-4">
            <p className="text-gray-400 text-sm">Event</p>
            <p className="text-white text-xl font-medium">1,465</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <CircularProgress percentage={93} color="#10B981">
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold">9.3</h2>
              <p className="text-gray-400 text-sm">Daily</p>
            </div>
          </CircularProgress>
        </div>
      </div>
    </Card>
  );
};

export default UserTrackingCard;
