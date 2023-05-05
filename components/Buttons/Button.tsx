import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  label: string;
  action?: Function;
  type?: "blue" | "pink" | "dark-blue" | "outline";
  icon?: IconDefinition;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  action,
  type = "blue",
  icon,
  className = "",
}) => {
  return (
    <button
      type="submit"
      className={`
        px-6 py-4 rounded-lg flex items-center gap-2 justify-center
        ${type === "blue" ? "bg-sp-blue text-white" : ""}
        ${type === "pink" ? "bg-sp-pink text-sp-blue" : ""}
        ${type === "dark-blue" ? "bg-slate-900 text-white" : ""}
        ${type === "outline" ? "border-2" : ""}
        ${className}
      `}
      onClick={() => action && action}
    >
      {icon && <FontAwesomeIcon icon={icon} className="w-4" />}
      {label}
    </button>
  );
};
