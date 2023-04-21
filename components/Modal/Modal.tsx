import { Card } from "../Cards";

interface ModalProps {
  state: boolean;
  setState: Function;
  children: React.ReactNode;
  wrapperClassName?: string;
  color?: "white" | "blue" | "pink";
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  state,
  setState,
  children,
  wrapperClassName = "",
  color = "white",
  className = "",
}) => {
  return (
    <div
      className={`
          fixed left-0 w-screen h-screen flex items-center justify-center 
          transition-all ease-out
          ${state ? "visible opacity-100 top-0" : "invisible opacity-0 top-40"}
          ${wrapperClassName}
        `}
    >
      <div
        onClick={() => setState(false)}
        className={`fixed z-10 bg-gray-700/50 w-full h-full left-0 top-0 cursor-pointer`}
      ></div>
      <Card color={color} className={`z-20 ${className}`}>
        {children}
      </Card>
    </div>
  );
};
