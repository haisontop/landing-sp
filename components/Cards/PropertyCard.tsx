import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShare,
  faCalendarPlus,
  faBed,
  faBath,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Tag } from "@/components";

interface PropertyCardProps {
  id: number;
  type?: "feature" | "horizontal" | "vertical";
  size?: "regular" | "small";
  className?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  type = "vertical",
  id,
  className,
  size = "regular",
}) => {
  const features = [
    {
      label: "3",
      type: "bed",
    },
    {
      label: "1",
      type: "car",
    },
    {
      label: "1",
      type: "bath",
    },
    {
      label: "300",
      type: "footage",
    },
  ];

  return (
    <Card className={className}>
      <div className={`flex ${type === "vertical" ? "flex-col" : ""}`}>
        <div
          style={{ backgroundImage: "url(https://placehold.it/800x600)" }}
          className={`aspect-video bg-cover bg-center ${
            type === "vertical" ? "w-full" : "w-9/12"
          }`}
        >
          {type === "vertical" && (
            <div className="pl-10 pt-8">
              <Tag label="Auction - Sat 28th Feb" icon={faCalendarPlus} />
            </div>
          )}
        </div>
        <div
          className={`flex flex-col text-sp-blue grow ${
            type !== "vertical" && "basis-2/3"
          }`}
        >
          <div className="px-10 py-6 flex flex-col gap-4">
            {type !== "vertical" && (
              <div>
                <Tag label="Auction - Sat 28th Feb" icon={faCalendarPlus} />
              </div>
            )}
            <h4
              className={`${
                size === "regular" ? "text-4xl" : "text-2xl"
              } font-bold`}
            >
              13/84 Beachly Ln, Newcastle
            </h4>
          </div>
          <div
            className={`flex border-y border-gray-200 px-10 ${
              type === "vertical" && "border-b-0"
            }`}
          >
            {features.map((feature) => {
              let icon = faBed;

              switch (feature.type) {
                case "bed":
                  icon = faBed;
                  break;
                case "bath":
                  icon = faBath;
                  break;
                case "car":
                  icon = faCar;
                  break;
              }

              return (
                <div
                  className="
                  py-4 pr-4 pl-4 border-r border-gray-200 font-bold
                  flex
                  first:pl-0 last:pr-0 last:border-0"
                  key={feature.type}
                >
                  {feature.label}
                  {feature.type !== "footage" ? (
                    <FontAwesomeIcon icon={icon} className="w-4 ml-2" />
                  ) : (
                    <span className="text-xs bold inline-block ml-1">M2</span>
                  )}
                </div>
              );
            })}
          </div>
          {type !== "vertical" && (
            <div className="px-10 py-6 flex flex-col gap-6">
              <h5 className="text-lg font-medium">
                Price Guide: $1,200,000 - $1,400,000
              </h5>
              <p>
                Superbly designed, this brand new build rests in a prized
                Hamilton South location here is another line
              </p>
            </div>
          )}

          <div className="flex mt-auto border-t border-gray-200">
            <a
              href="#"
              className="
              px-10 py-6 font-semibold grow flex
              transition
              hover:bg-sp-blue hover:text-white
            "
            >
              View Listing
              <span className="ml-auto">
                <FontAwesomeIcon icon={faArrowRight} className="w-5" />
              </span>
            </a>
            <a
              href="#"
              className="
              px-8 py-6 border-l border-gray-200
              transition
              hover:bg-sp-blue hover:text-white  
            "
            >
              <FontAwesomeIcon icon={faShare} className="w-5" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};
