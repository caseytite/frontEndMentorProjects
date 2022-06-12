export interface CardType {
  id: number;
  title: string;
  body: string;
  image: string;
}

export interface Helper {
  setData: () => void;
  data: CardType[];
  setAddingCard: () => void;
}

export interface MTheme {
  colors: {
    header: string;
    body: string;
    footer: string;
  };
  mobile: string;
}

export type B1Type = {
  onClick?: () => void;
  text?: string;
  bg?: string;
  color?: string;
  type?: string;
};
