import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TagProps {
  label: string;
  icon?: IconDefinition;
}

export const Tag: React.FC<TagProps> = ({ label, icon }) => {
  return (
    <div className="rounded-lg p-2 bg-slate-100 font-medium text-sp-blue inline-flex gap-2 transition hover:shadow-lg">
      {icon && <FontAwesomeIcon icon={icon} className="w-4" />}
      {label}
    </div>
  );
};
