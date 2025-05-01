import { MoreHorizontal } from "lucide-react";

const Card = ({
  children,
  className = "",
  title = "",
  subtitle = "",
  showMoreOptions = false,
  fullWidth = false,
}) => {
  return (
    <div
      className={`bg-purple-950 rounded-xl p-5 ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {(title || showMoreOptions) && (
        <div className="flex justify-between items-center mb-4">
          <div>
            {title && (
              <h3 className="text-white font-medium text-lg">{title}</h3>
            )}
            {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
          </div>
          {showMoreOptions && (
            <button className="text-gray-400 hover:text-white">
              <MoreHorizontal size={20} />
            </button>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
