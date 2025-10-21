import {
  BsEmojiAngryFill,
  BsEmojiFrownFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsEmojiLaughingFill,
} from "react-icons/bs";

export interface AvaliacoesProps {
  icon: React.ReactNode;
  text: string;
  titleMessage?: string;
  hoverColor: string;
  activeColor: string;
}

export const avaliacoes: AvaliacoesProps[] = [
  {
    icon: <BsEmojiAngryFill />,
    text: "Não gostei",
    titleMessage: "Não gostei da experiência",
    hoverColor: "hover:text-[var(--color-red)]",
    activeColor: "text-[var(--color-red)]",
  },
  {
    icon: <BsEmojiFrownFill />,
    text: "Ruim",
    titleMessage: "A experiência foi ruim",
    hoverColor: "hover:text-[var(--color-orange)]",
    activeColor: "text-[var(--color-orange)]",
  },
  {
    icon: <BsEmojiNeutralFill />,
    text: "Regular",
    titleMessage: "A experiência foi regular",
    hoverColor: "hover:text-[var(--color-yellow)]",
    activeColor: "text-[var(--color-yellow)]",
  },
  {
    icon: <BsEmojiSmileFill />,
    text: "Bom",
    titleMessage: "A experiência foi boa",
    hoverColor: "hover:text-[var(--color-green)]",
    activeColor: "text-[var(--color-green)]",
  },
  {
    icon: <BsEmojiLaughingFill />,
    text: "Ótimo",
    titleMessage: "A experiência foi ótima",
    hoverColor: "hover:text-[var(--color-blue-emoji)]",
    activeColor: "text-[var(--color-blue-emoji)]",
  },
];
