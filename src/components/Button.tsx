import { ReactNode } from "react";
type Props = {
  id?: string;
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClass?: string;
  phone?: string;
};
const Button = ({
  id,
  title,
  phone,
  leftIcon,
  rightIcon,
  containerClass,
}: Props) => {
  return (
    <a
      href={id ? `${id}` : ` tel:${phone}`}
      className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
      id={id}
    >
      {leftIcon}
      {title && (
        <span className="relative incline-flex overflow-hidden text-xs uppercase font-general">
          <div className="">{title}</div>
        </span>
      )}

      {rightIcon}
    </a>
  );
};

export default Button;
