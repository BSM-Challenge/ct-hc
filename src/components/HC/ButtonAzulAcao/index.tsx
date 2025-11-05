import { Link } from "react-router-dom";
import type { ButtonAzulProps } from "../../../types/HC/buttonAzul";

interface ButtonAzulActionProps extends Partial<ButtonAzulProps> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonAzulAcao({
  rota,
  px = 5,
  py = 2,
  titleMessage,
  onClick,
  children,
  className
}: ButtonAzulActionProps) {
  if (rota) {
    return (
      <Link
        to={rota}
        className={`
          bg-[var(--color-blue-0077C8)] text-[var(--color-white)]
          px-${px} py-${py} rounded-[10px] border-2 border-[var(--color-blue)]
          hover:bg-[var(--color-blue)] duration-300 outline-none
        `}
        title={titleMessage}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`
        bg-[var(--color-blue)] text-[var(--color-white)]
        px-${px} py-${py} rounded-[10px] border-2 border-[var(--color-blue)]
        hover:bg-[var(--color-blue-82abff)] duration-300 outline-none
        ${className ?? ''} 
      `}
      title={titleMessage}
    >
      {children}
    </button>
  );
}
