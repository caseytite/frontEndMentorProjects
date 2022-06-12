import { CardType } from "./types";
export interface BProps {
  onClick?: () => void;
  text?: string;
  bg?: string;
  color?: string;
  type?: string;
}
export interface SingleCard {
  item: CardType;
  handleRemoveCard: (id: number) => void;
  darkMode: boolean;
  index: number;
}

export interface FProps {
  handleAddCard: (title: string, description: string) => void;
}

export interface HProps {
  darkMode: boolean;
  handleDarkMode: () => void;
}

export interface ModalProps {
  message: string | boolean;
}
export interface BackDropProps {
  closeModal: React.Dispatch<React.SetStateAction<string | boolean>>;
  children: JSX.Element;
}
