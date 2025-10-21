export interface ModalBaseProps {
  minW?: number;
  px?: number;
  py?: number;
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}