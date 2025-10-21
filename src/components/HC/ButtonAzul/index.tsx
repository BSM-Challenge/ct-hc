import { Link } from "react-router-dom";
import type { ButtonAzulProps } from "../../../types/HC/buttonAzul";

export default function ButtonAzul({ rota, px = 5, py = 2, titleMessage, children }: ButtonAzulProps) {
  return (
    <Link
      to={rota}
      className={`
        bg-[var(--Color-blue-709CFF)] text-[var(--color-white)]
        px-${px} py-${py} rounded-[10px] border-2 border-[var(--color-blue)]
        hover:bg-[var(--color-blue)] duration-300 outline-none
        `
    }
      title={titleMessage}
    >
      {children}
    </Link>
  );
}