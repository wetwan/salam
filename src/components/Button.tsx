import { ReactNode } from "react";
type Props = {
  id?: string;
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClass?: string;
};
const Button = ({ id, title, leftIcon, rightIcon, containerClass }: Props) => {
  return (
    <div
      className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
      id={id}
    >
      {leftIcon}{" "}
      <span className="relative incline-flex overflow-hidden text-xs uppercase font-general">
        <div className="">{title}</div>
      </span>
      {rightIcon}
    </div>
  );
};

export default Button;
