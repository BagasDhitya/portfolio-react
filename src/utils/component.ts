export interface LayoutProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  id: string;
  to?: any;
  label?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  type?: "filled" | "non-filled";
  onClick?: React.MouseEventHandler;
}
