import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  label: string;
  action?: Function;
  type?: "blue" | "pink" | "dark-blue";
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
      className={`
        px-6 py-4 rounded-lg flex items-center gap-2
        ${type === "blue" ? "bg-sp-blue text-white" : ""}
        ${type === "pink" ? "bg-sp-pink text-sp-blue" : ""}
        ${type === "dark-blue" ? "bg-slate-900 text-white" : ""}
        ${className}
      `}
      onClick={() => action && action}
    >
      {icon && <FontAwesomeIcon icon={icon} className="w-4" />}
      {label}
    </button>
  );
};
