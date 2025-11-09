import type { CardMaisRecursosProps } from "../../../types/HC/cardMaisRecursos";

export default function CardMaisRecursos( {titleMessage, img, title, text}: CardMaisRecursosProps ) {
  return (
    <div
      className="
            bg-[var(--light-blue)] px-3 py-3 rounded-[10px] min-h-[150px]
            shadow-[4px_4px_10px_var(--shadow-black-03)]
            flex flex-col gap-3
            cursor-pointer hover:bg-[var(--light-blue-2)]
            duration-300
            "
      title={titleMessage}
    >
      <figure className="flex items-center gap-5">
        <img src={img} alt="" className="w-[18%] max-lg:w-[12%] max-md:w-[15%]" />
        <figcaption className="
          font-bold text-xl 
          max-md:text-xl
          max-lg:text-3xl
          ">
           {title}
          </figcaption>
      </figure>
      <p className="ml-3 max-lg:text-xl max-md:text-lg">
        {text}
      </p>
    </div>
  );
}
