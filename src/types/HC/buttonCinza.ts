export interface ButtonCinzaProps {
  onClick?: () => void;
  px?: number;                 
  py?: number;
  titleMessage: string;
  children: React.ReactNode;
  className?: string;
}
