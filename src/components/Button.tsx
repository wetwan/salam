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
      href={id}
      className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
      id={id}
    >
      {leftIcon}{" "}
      <span className="relative incline-flex overflow-hidden text-xs uppercase font-general">
        {title && <div className="">{title}</div>}
        {phone && <a href="tel:+"></a>}
      </span>{" "}
      <link rel="icon" type="image/png" href="img/logo.png" />
      {rightIcon}
    </a>
  );
};

export default Button;
